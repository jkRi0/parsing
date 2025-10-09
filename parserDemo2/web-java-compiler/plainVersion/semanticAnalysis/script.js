// semantic-analyzer.js
// Run with: node semantic-analyzer.js

class SemanticError extends Error {
  constructor(message, node = null) {
    super(message);
    this.node = node;
  }
}

/**
 * Very small type-compatibility helper.
 * - exact match or for arrays string[] must match exactly
 * - no automatic widening (keeps it simple)
 */
function isAssignable(toType, fromType) {
  if (toType === fromType) return true;
  // allow null to be assigned to reference types (String, class types)
  if (fromType === "null" && (toType === "String" || toType.endsWith("[]") || /^[A-Z]/.test(toType))) return true;
  return false;
}

/**
 * Symbol table supporting nested scopes.
 * Each scope is a map: name -> symbol info
 */
class SymbolTable {
  constructor() {
    this.scopes = [{}]; // stack - index 0 is global
  }

  enterScope() {
    this.scopes.push({});
  }

  exitScope() {
    if (this.scopes.length === 1) throw new Error("Attempt to pop global scope");
    this.scopes.pop();
  }

  declare(name, info, node) {
    const cur = this.scopes[this.scopes.length - 1];
    if (cur[name]) {
      throw new SemanticError(`Duplicate declaration of '${name}'`, node);
    }
    cur[name] = info;
  }

  // Look up a name through scopes (innermost first)
  lookup(name) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      if (this.scopes[i][name]) return this.scopes[i][name];
    }
    return null;
  }

  // Look up only in current scope
  lookupCurrent(name) {
    const cur = this.scopes[this.scopes.length - 1];
    return cur[name] || null;
  }

  dump() {
    console.log("=== Symbol Table Dump ===");
    this.scopes.forEach((s, i) => {
      console.log(`Scope ${i}:`);
      Object.keys(s).forEach(name => {
        console.log("  ", name, "=>", s[name]);
      });
    });
    console.log("=========================");
  }
}

/**
 * SemanticAnalyzer
 * - visitor-style traversal of AST nodes
 * - expects AST nodes with a `type` field and children fields depending on type
 */
class SemanticAnalyzer {
  constructor(ast) {
    this.ast = ast;
    this.symbols = new SymbolTable();
    this.errors = [];
    // register some built-ins
    this.registerBuiltins();
    // current enclosing method return type (used for return checks)
    this.currentMethodReturn = null;
  }

  registerBuiltins() {
    // Provide a fake "System" class with "out" field -> PrintStream with println(String)
    this.symbols.declare("System", { kind: "class", name: "System", builtIn: true, members: {
      out: { kind: "field", name: "out", type: "PrintStream", static: true }
    }});
    // PrintStream type with println(String)
    this.symbols.declare("PrintStream", { kind: "class", name: "PrintStream", builtIn: true, members: {
      println: { kind: "method", name: "println", paramTypes: ["String"], returnType: "void" }
    }});
  }

  run() {
    try {
      this.visit(this.ast);
    } catch (e) {
      if (e instanceof SemanticError) this.errors.push(e.message);
      else throw e;
    }
    return {
      errors: this.errors,
      symbolTable: this.symbols
    };
  }

  error(msg, node) {
    this.errors.push(msg);
    // don't throw; collect all errors
  }

  visit(node) {
    if (!node || typeof node !== "object") return null;
    const fn = this["visit_" + node.type];
    if (fn) return fn.call(this, node);
    // Generic traversal for unknown node shapes: look for arrays/objects children
    if (Array.isArray(node)) {
      return node.map(n => this.visit(n));
    } else {
      // traverse all object properties which are nodes or arrays of nodes
      for (const k of Object.keys(node)) {
        const val = node[k];
        if (val && typeof val === "object") {
          this.visit(val);
        }
      }
    }
    return null;
  }

  // Top-level compilation unit
  visit_compilationUnit(node) {
    // node.body = [ ... top-level declarations ... ]
    (node.body || []).forEach(child => this.visit(child));
  }

  // classDeclaration: { type: "classDeclaration", name, modifiers, body: [...] }
  visit_classDeclaration(node) {
    try {
      this.symbols.declare(node.name, { kind: "class", name: node.name, modifiers: node.modifiers || [], members: {} }, node);
    } catch (e) {
      if (e instanceof SemanticError) this.error(e.message, node);
      else throw e;
    }
    // Enter class scope for members
    this.symbols.enterScope();
    // declare class name in inner scope? typically class members go into class scope
    // We'll allow methods/fields to be declared into the current scope
    (node.body || []).forEach(member => this.visit(member));
    this.symbols.exitScope();
  }

  // methodDeclaration: { type: "methodDeclaration", name, returnType, parameters: [{name,type}], modifiers, body: [...] }
  visit_methodDeclaration(node) {
    try {
      this.symbols.declare(node.name, { kind: "method", name: node.name, returnType: node.returnType, paramTypes: (node.parameters || []).map(p => p.type) }, node);
    } catch (e) {
      if (e instanceof SemanticError) this.error(e.message, node);
      else throw e;
    }
    // Enter method scope
    this.symbols.enterScope();
    // declare parameters
    (node.parameters || []).forEach(p => {
      try {
        this.symbols.declare(p.name, { kind: "param", name: p.name, type: p.type }, node);
      } catch (e) {
        if (e instanceof SemanticError) this.error(e.message, node);
        else throw e;
      }
    });
    // set current method return type
    const prevReturn = this.currentMethodReturn;
    this.currentMethodReturn = node.returnType;
    // visit method body (assumed to be a block or array of statements)
    (node.body || []).forEach(stmt => this.visit(stmt));
    // restore
    this.currentMethodReturn = prevReturn;
    this.symbols.exitScope();
  }

  // variableDeclaration: { type: "variableDeclaration", varType, declarators: [{id, init}] }
  visit_variableDeclaration(node) {
    (node.declarators || []).forEach(d => {
      const name = d.id;
      const t = node.varType;
      try {
        this.symbols.declare(name, { kind: "var", name, type: t }, node);
      } catch (e) {
        if (e instanceof SemanticError) this.error(e.message, node);
        else throw e;
      }
      if (d.init) {
        const exprType = this.visit(d.init);
        if (exprType && !isAssignable(t, exprType)) {
          this.error(`Type error: cannot assign '${exprType}' to variable '${name}' of type '${t}'`, node);
        }
      }
    });
  }

  // block: array of statements
  visit_block(node) {
    // node.statements = [...]
    this.symbols.enterScope();
    (node.statements || []).forEach(s => this.visit(s));
    this.symbols.exitScope();
  }

  // expressionStatement: { type: "expressionStatement", expression: {...} }
  visit_expressionStatement(node) {
    return this.visit(node.expression);
  }

  // assignment: { type: "assignment", left: {type: "identifier", name}, right: expr, operator: "=" }
  visit_assignment(node) {
    const left = node.left;
    // for simplicity we only handle identifier left targets
    if (left.type !== "identifier") {
      this.error(`Unsupported assignment target type '${left.type}'`, node);
      return null;
    }
    const symbol = this.symbols.lookup(left.name);
    if (!symbol) {
      this.error(`Undeclared identifier '${left.name}'`, node);
      return null;
    }
    const rightType = this.visit(node.right);
    if (!rightType) return null;
    if (!isAssignable(symbol.type, rightType)) {
      this.error(`Type mismatch: cannot assign '${rightType}' to '${left.name}' (type '${symbol.type}')`, node);
    }
    return symbol.type;
  }

  // returnStatement: { type: "returnStatement", expression: <expr> | null }
  visit_returnStatement(node) {
    const expr = node.expression ? this.visit(node.expression) : null;
    const expected = this.currentMethodReturn;
    if (!expected) {
      this.error("Return statement outside of a method", node);
      return null;
    }
    // void method should not return value (except 'return;' is ok)
    if (expected === "void") {
      if (expr !== null) this.error(`Return type mismatch: method expects 'void' but return has value of type '${expr}'`, node);
    } else {
      if (expr === null) this.error(`Return type mismatch: method expects '${expected}' but return has no value`, node);
      else if (!isAssignable(expected, expr)) this.error(`Return type mismatch: cannot convert '${expr}' to '${expected}'`, node);
    }
    return expected;
  }

  // identifier node returns the type from the symbol table
  visit_identifier(node) {
    const sym = this.symbols.lookup(node.name);
    if (!sym) {
      this.error(`Undeclared identifier '${node.name}'`, node);
      return null;
    }
    // variable/param -> type, method -> function signature (we return method object)
    if (sym.kind === "var" || sym.kind === "param" || sym.kind === "field") return sym.type;
    return sym;
  }

  // literal: { type: "literal", value, literalType }
  visit_literal(node) {
    // literalType should be 'int', 'String', 'boolean', or 'null'
    return node.literalType;
  }

  // methodCall: { type: "methodCall", target: {type:...} | "System.out", name: "println", args: [expr,...] }
  visit_methodCall(node) {
    // support qualified target (e.g., System.out) as either string or node
    let targetType = null;
    let targetObj = null;

    if (typeof node.target === "string") {
      // e.g., "System.out"
      const parts = node.target.split(".");
      // resolve first part
      const base = this.symbols.lookup(parts[0]);
      if (!base) {
        this.error(`Undeclared identifier '${parts[0]}'`, node);
        return null;
      }
      targetObj = base;
      // resolve subsequent accesses in members
      for (let i = 1; i < parts.length; i++) {
        const memberName = parts[i];
        // built-in classes store members in .members
        const members = targetObj.members || {};
        const m = members[memberName];
        if (!m) {
          this.error(`Member '${memberName}' not found on '${parts.slice(0, i).join(".")}'`, node);
          return null;
        }
        targetObj = m;
      }
      // if last resolved object is a field of type PrintStream -> targetType = PrintStream
      if (targetObj.kind === "field") targetType = targetObj.type;
      // if last resolved object is a class, we store that
    } else {
      // target is an expression/node - get its static type
      const tt = this.visit(node.target);
      targetType = tt;
    }

    // If method is a built-in on PrintStream (System.out.println)
    if (targetObj && targetObj.kind === "field" && targetObj.type === "PrintStream") {
      // find PrintStream in symbol table
      const ps = this.symbols.lookup("PrintStream");
      if (ps && ps.members && ps.members[node.name] && ps.members[node.name].kind === "method") {
        const method = ps.members[node.name];
        // check args
        const expected = method.paramTypes || [];
        const given = (node.args || []).map(a => this.visit(a));
        if (given.length !== expected.length) {
          this.error(`Method '${node.name}' expects ${expected.length} args but got ${given.length}`, node);
        } else {
          for (let i = 0; i < expected.length; i++) {
            if (!isAssignable(expected[i], given[i])) {
              this.error(`Argument ${i} of '${node.name}' expects '${expected[i]}' but got '${given[i]}'`, node);
            }
          }
        }
        return method.returnType;
      }
    }

    // Otherwise try to look up a method symbol with the given name (simplified)
    const sym = this.symbols.lookup(node.name);
    if (!sym || sym.kind !== "method") {
      this.error(`Method '${node.name}' not found`, node);
      return null;
    }
    // check arity
    const expected = sym.paramTypes || [];
    const given = (node.args || []).map(a => this.visit(a));
    if (given.length !== expected.length) {
      this.error(`Method '${node.name}' expects ${expected.length} args but got ${given.length}`, node);
    } else {
      for (let i = 0; i < expected.length; i++) {
        if (!isAssignable(expected[i], given[i])) {
          this.error(`Argument ${i} of '${node.name}' expects '${expected[i]}' but got '${given[i]}'`, node);
        }
      }
    }
    return sym.returnType || null;
  }

  // return types for other helper node kinds:
  visit_memberAccess(node) {
    // node.object, node.member
    const objTypeOrSym = this.visit(node.object);
    // If object resolved to a class/instance symbol stored as object, find member
    if (objTypeOrSym && objTypeOrSym.members) {
      const m = objTypeOrSym.members[node.member];
      if (!m) {
        this.error(`Member '${node.member}' not found on target`, node);
        return null;
      }
      if (m.kind === "field") return m.type;
      if (m.kind === "method") return m;
    }
    return null;
  }
}

// ------------------------
// Example AST & Demo
// ------------------------

// This AST is a simplified, JSON-friendly representation of your earlier code plus
// some additional statements to demonstrate variable declaration, assignment, return checks.
const exampleAST = {
  type: "compilationUnit",
  body: [
    {
      type: "classDeclaration",
      name: "MyClass",
      modifiers: ["public"],
      body: [
        {
          type: "methodDeclaration",
          name: "main",
          returnType: "void",
          modifiers: ["public", "static"],
          parameters: [
            { name: "args", type: "String[]" }
          ],
          body: [
            // System.out.println("Hello Java!");
            {
              type: "expressionStatement",
              expression: {
                type: "methodCall",
                target: "System.out",
                name: "println",
                args: [
                  { type: "literal", literalType: "String", value: "Hello Java!" }
                ]
              }
            },
            // int x = 10;
            {
              type: "variableDeclaration",
              varType: "int",
              declarators: [
                { id: "x", init: { type: "literal", literalType: "int", value: 10 } }
              ]
            },
            // x = 20;   // ok
            {
              type: "expressionStatement",
              expression: {
                type: "assignment",
                left: { type: "identifier", name: "x" },
                right: { type: "literal", literalType: "int", value: 20 },
                operator: "="
              }
            },
            // x = "oops";  // type error
            {
              type: "expressionStatement",
              expression: {
                type: "assignment",
                left: { type: "identifier", name: "x" },
                right: { type: "literal", literalType: "String", value: "oops" },
                operator: "="
              }
            },
            // use of undeclared variable y => error
            {
              type: "expressionStatement",
              expression: {
                type: "identifier",
                name: "y" // undeclared
              }
            },
            // return; (allowed for void)
            {
              type: "returnStatement",
              expression: null
            }
          ]
        },

        // Another method to show return type checking
        {
          type: "methodDeclaration",
          name: "compute",
          returnType: "int",
          modifiers: ["public"],
          parameters: [],
          body: [
            // return "string"; // should error (return type mismatch)
            {
              type: "returnStatement",
              expression: { type: "literal", literalType: "String", value: "nope" }
            }
          ]
        },

        // Duplicate declaration example (two fields with same name)
        {
          type: "variableDeclaration",
          varType: "int",
          declarators: [ { id: "f", init: { type: "literal", literalType: "int", value: 1 } } ]
        },
        {
          type: "variableDeclaration",
          varType: "int",
          declarators: [ { id: "f", init: { type: "literal", literalType: "int", value: 2 } } ]
        }
      ]
    }
  ]
};




const astString=`(compilationUnit (typeDeclaration (classOrInterfaceModifier public) (classDeclaration class (identifier FullFeaturesDemo) 
(classBody { (classBodyDeclaration (modifier (classOrInterfaceModifier private)) (memberDeclaration (fieldDeclaration (typeType 
  (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier id)) = (variableInitializer (expression 
    (primary (literal (integerLiteral 1))))))) ;))) (classBodyDeclaration (modifier (classOrInterfaceModifier private)) (modifier 
      (classOrInterfaceModifier static)) (memberDeclaration (fieldDeclaration (typeType (classOrInterfaceType (classType (typeIdentifier 
        String)))) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier appName)) = (variableInitializer (expression 
          (primary (literal "DemoApp")))))) ;))) (classBodyDeclaration (modifier (classOrInterfaceModifier public)) (modifier 
            (classOrInterfaceModifier static)) (memberDeclaration (methodDeclaration (typeTypeOrVoid void) (identifier main)
             (formalParameters ( (formalParameter (typeType (classOrInterfaceType (classType (typeIdentifier String))) [ ]) 
             (variableDeclaratorId (identifier args))) )) (methodBody (block { (blockStatement (localVariableDeclaration (typeType 
              (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier x)) = (variableInitializer 
                (expression (primary (literal (integerLiteral 5)))))))) ;) (blockStatement (localVariableDeclaration (typeType 
                  (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier y)) = (variableInitializer
                     (expression (primary (literal (integerLiteral 10)))))))) ;) (blockStatement (localVariableDeclaration (typeType 
                      (primitiveType boolean)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier active)) = 
                      (variableInitializer (expression (primary (literal true))))))) ;) (blockStatement (localVariableDeclaration 
                        (typeType (primitiveType double)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier pi)) =
                         (variableInitializer (expression (primary (literal (floatLiteral 3.14)))))))) ;) (blockStatement 
                          (localVariableDeclaration (typeType (primitiveType char)) (variableDeclarators (variableDeclarator 
                            (variableDeclaratorId (identifier letter)) = (variableInitializer (expression (primary (literal 'A'))))))) ;)
                             (blockStatement (localVariableDeclaration (typeType (classOrInterfaceType (classType (typeIdentifier String)))) 
                             (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier message)) = (variableInitializer
                               (expression (primary (literal "Hello, Java!"))))))) ;) (blockStatement (localVariableDeclaration (typeType
                                 (primitiveType int) [ ]) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier numbers)) = 
                                 (variableInitializer (arrayInitializer { (variableInitializer (expression (primary (literal (integerLiteral 1))))) , 
                                  (variableInitializer (expression (primary (literal (integerLiteral 2))))) , (variableInitializer (expression (primary 
                                    (literal (integerLiteral 3))))) , (variableInitializer (expression (primary (literal (integerLiteral 4))))) , 
                                    (variableInitializer (expression (primary (literal (integerLiteral 5))))) }))))) ;) (blockStatement 
                                      (localVariableDeclaration (typeType (classOrInterfaceType (classType (typeIdentifier String))) [ ]) 
                                      (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier names)) = (variableInitializer 
                                        (expression new (creator (createdName (identifier String)) (arrayCreatorRest [ (expression (primary (literal 
                                          (integerLiteral 3)))) ]))))))) ;) (blockStatement (statement (expression (expression (expression (primary (identifier names))) [ 
                                            (expression (primary (literal (integerLiteral 0)))) ]) = (expression (primary (literal "Alice")))) ;)) (blockStatement 
                                              (statement (expression (expression (expression (primary (identifier names))) [ (expression (primary (literal 
                                                (integerLiteral 1)))) ]) = (expression (primary (literal "Bob")))) ;)) (blockStatement (statement (expression (expression 
                                                  (expression (primary (identifier names))) [ (expression (primary (literal (integerLiteral 2)))) ]) = (expression (primary
                                                     (literal "Charlie")))) ;)) (blockStatement (localVariableDeclaration (typeType (primitiveType int)) (variableDeclarators 
                                                      (variableDeclarator (variableDeclaratorId (identifier sum)) = (variableInitializer (expression (expression (primary 
                                                        (identifier x))) + (expression (primary (identifier y)))))))) ;) (blockStatement (localVariableDeclaration (typeType 
                                                          (primitiveType boolean)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier check)) = 
                                                          (variableInitializer (expression (expression (primary ( (expression (expression (primary (identifier x))) < (expression 
                                                            (primary (identifier y)))) ))) && (expression (primary (identifier active)))))))) ;) (blockStatement (statement if ( 
                                                              (expression (expression (primary (identifier x))) < (expression (primary (identifier y)))) ) (statement (block { (blockStatement 
                                                                (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) 
                                                                (arguments ( (expressionList (expression (primary (literal "x < y")))) )))) ;)) })) else (statement if ( (expression (expression 
                                                                  (primary (identifier x))) == (expression (primary (identifier y)))) ) (statement (block { (blockStatement (statement (expression 
                                                                    (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( 
                                                                      (expressionList (expression (primary (literal "x == y")))) )))) ;)) })) else (statement (block { (blockStatement (statement
                                                                         (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println)
                                                                          (arguments ( (expressionList (expression (primary (literal "x > y")))) )))) ;)) }))))) (blockStatement (statement switch ( 
                                                                            (expression (primary (identifier letter))) ) { (switchBlockStatementGroup (switchLabel case (expression (primary (literal 'A')))) : 
                                                                              (blockStatement (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . 
                                                                              (methodCall (identifier println) (arguments ( (expressionList (expression (primary (literal "Got A")))) )))) ;)) (blockStatement 
                                                                                (statement break ;))) (switchBlockStatementGroup (switchLabel case (expression (primary (literal 'B')))) : (blockStatement 
                                                                                  (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println)
                                                                                   (arguments ( (expressionList (expression (primary (literal "Got B")))) )))) ;)) (blockStatement (statement break ;))) 
                                                                                   (switchBlockStatementGroup (switchLabel default) : (blockStatement (statement (expression (expression (expression (primary 
                                                                                    (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList (expression (primary 
                                                                                      (literal "Unknown letter")))) )))) ;))) })) (blockStatement (statement for ( (forControl (forInit (localVariableDeclaration 
                                                                                        (typeType (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier i)) = 
                                                                                        (variableInitializer (expression (primary (literal (integerLiteral 0))))))))) ; (expression (expression 
                                                                                          (primary (identifier i))) < (expression (expression (primary (identifier numbers))) . (identifier length))) ; (expressionList 
                                                                                            (expression (expression (primary (identifier i))) ++))) ) (statement (block { (blockStatement (statement (expression 
                                                                                              (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments 
                                                                                                ( (expressionList (expression (expression (primary (literal "Number: "))) + (expression (expression (primary (identifier numbers))) [ 
                                                                                                  (expression (primary (identifier i))) ]))) )))) ;)) })))) (blockStatement (statement for ( (forControl (enhancedForControl (typeType 
                                                                                                    (classOrInterfaceType (classType (typeIdentifier String)))) (variableDeclaratorId (identifier name)) : (expression (primary 
                                                                                                      (identifier names))))) ) (statement (block { (blockStatement (statement (expression (expression (expression (primary 
                                                                                                        (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList (expression 
                                                                                                          (expression (primary (literal "Name: "))) + (expression (primary (identifier name))))) )))) ;)) })))) (blockStatement 
                                                                                                            (localVariableDeclaration (typeType (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId 
                                                                                                              (identifier count)) = (variableInitializer (expression (primary (literal (integerLiteral 0)))))))) ;) (blockStatement 
                                                                                                                (statement while ( (expression (expression (primary (identifier count))) < (expression (primary (literal 
                                                                                                                  (integerLiteral 3))))) ) (statement (block { (blockStatement (statement (expression (expression (expression 
                                                                                                                    (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList 
                                                                                                                      (expression (expression (primary (literal "While count: "))) + (expression (primary (identifier count))))) )))) ;))
                                                                                                                       (blockStatement (statement (expression (expression (primary (identifier count))) ++) ;)) })))) (blockStatement 
                                                                                                                        (localVariableDeclaration (typeType (primitiveType int)) (variableDeclarators (variableDeclarator (variableDeclaratorId 
                                                                                                                          (identifier doCount)) = (variableInitializer (expression (primary (literal (integerLiteral 0)))))))) ;) (blockStatement 
                                                                                                                            (statement do (statement (block { (blockStatement (statement (expression (expression (expression (primary (identifier System))) . 
                                                                                                                              (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList (expression (expression (primary 
                                                                                                                                (literal "Do-while count: "))) + (expression (primary (identifier doCount))))) )))) ;)) (blockStatement (statement 
                                                                                                                                  (expression (expression (primary (identifier doCount))) ++) ;)) })) while ( (expression (expression (primary 
                                                                                                                                    (identifier doCount))) < (expression (primary (literal (integerLiteral 2))))) ) ;)) (blockStatement 
                                                                                                                                      (localVariableDeclaration (typeType (classOrInterfaceType (classType (typeIdentifier String)))) (variableDeclarators 
                                                                                                                                        (variableDeclarator (variableDeclaratorId (identifier result)) = (variableInitializer (expression (expression (primary 
                                                                                                                                          ( (expression (expression (primary (identifier x))) > (expression (primary (identifier y)))) ))) ? (expression (primary (literal "X greater"))) : 
                                                                                                                                          (expression (primary (literal "Y greater")))))))) ;) (blockStatement (localVariableDeclaration (typeType (primitiveType int)) 
                                                                                                                                          (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier total)) = (variableInitializer (expression (methodCall 
                                                                                                                                            (identifier add) (arguments ( (expressionList (expression (primary (identifier x))) , (expression (primary (identifier y)))) )))))))) ;)
                                                                                                                                             (blockStatement (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall 
                                                                                                                                              (identifier println) (arguments ( (expressionList (expression (expression (primary (literal "Sum: "))) + (expression (primary 
                                                                                                                                                (identifier total))))) )))) ;)) (blockStatement (statement try (block { (blockStatement (localVariableDeclaration (typeType (primitiveType int)) 
                                                                                                                                                  (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier div)) = (variableInitializer (expression (expression
                                                                                                                                                     (primary (identifier x))) / (expression (primary (literal (integerLiteral 0))))))))) ;) }) (catchClause catch ( (catchType 
                                                                                                                                                      (qualifiedName (identifier ArithmeticException))) (identifier e) ) (block { (blockStatement (statement (expression (expression 
                                                                                                                                                        (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList 
                                                                                                                                                          (expression (primary (literal "Error: Division by zero")))) )))) ;)) })) (finallyBlock finally (block { (blockStatement 
                                                                                                                                                            (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall
                                                                                                                                                               (identifier println) (arguments ( (expressionList (expression (primary (literal "Finally block executed")))) )))) ;)) }))))
                                                                                                                                                                (blockStatement (localVariableDeclaration (typeType (classOrInterfaceType (classType (typeIdentifier FullFeaturesDemo)))) 
                                                                                                                                                                (variableDeclarators (variableDeclarator (variableDeclaratorId (identifier demo)) = (variableInitializer (expression new (creator (createdName
                                                                                                                                                                   (identifier FullFeaturesDemo)) (classCreatorRest (arguments ( ))))))))) ;) (blockStatement (statement (expression (expression 
                                                                                                                                                                    (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) (arguments ( (expressionList 
                                                                                                                                                                      (expression (expression (primary (literal "App Name: "))) + (expression (primary (identifier appName))))) )))) ;)) (blockStatement 
                                                                                                                                                                        (statement (expression (expression (expression (primary (identifier System))) . (identifier out)) . (methodCall (identifier println) 
                                                                                                                                                                        (arguments ( (expressionList (expression (expression (primary (literal "ID: "))) + (expression (expression (primary (identifier demo))) . 
                                                                                                                                                                        (identifier id)))) )))) ;)) }))))) (classBodyDeclaration (modifier (classOrInterfaceModifier public)) (modifier (classOrInterfaceModifier static)) (memberDeclaration (methodDeclaration (typeTypeOrVoid (typeType (primitiveType int))) (identifier add) (formalParameters ( (formalParameter (typeType (primitiveType int)) (variableDeclaratorId (identifier a))) , (formalParameterList (formalParameter (typeType (primitiveType int)) (variableDeclaratorId (identifier b)))) )) (methodBody (block { (blockStatement (statement return (expression (expression (primary (identifier a))) + (expression (primary (identifier b)))) ;)) }))))) (classBodyDeclaration (modifier (classOrInterfaceModifier public)) (modifier (classOrInterfaceModifier static)) (memberDeclaration (methodDeclaration (typeTypeOrVoid (typeType (primitiveType double))) (identifier add) (formalParameters ( (formalParameter (typeType (primitiveType double)) (variableDeclaratorId (identifier a))) , (formalParameterList (formalParameter (typeType (primitiveType double)) (variableDeclaratorId (identifier b)))) )) (methodBody (block { (blockStatement (statement return (expression (expression (primary (identifier a))) + (expression (primary (identifier b)))) ;)) }))))) (classBodyDeclaration (modifier (classOrInterfaceModifier public)) (memberDeclaration (methodDeclaration (typeTypeOrVoid (typeType (classOrInterfaceType (classType (typeIdentifier String))))) (identifier describe) (formalParameters ( (formalParameter (typeType (primitiveType int)) (variableDeclaratorId (identifier number))) )) (methodBody (block { (blockStatement (statement if ( (expression (expression (primary (identifier number))) > (expression (primary (literal (integerLiteral 0))))) ) (statement (block { (blockStatement (statement return (expression (primary (literal "Positive"))) ;)) })) else (statement if ( (expression (expression (primary (identifier number))) < (expression (primary (literal (integerLiteral 0))))) ) (statement (block { (blockStatement (statement return (expression (primary (literal "Negative"))) ;)) })) else (statement (block { (blockStatement (statement return (expression (primary (literal "Zero"))) ;)) }))))) }))))) }))) <EOF>)`;

// Run analyzer
// const analyzer = new SemanticAnalyzer(exampleAST);
// const analyzer = new SemanticAnalyzer(parseASTString(astString));
// const result = analyzer.run();

// Print results
// if (result.errors.length === 0) {
//   console.log("Semantic analysis passed with no errors ✅");
// } else {
//   console.log("Semantic analysis found errors:");
//   result.errors.forEach((e, i) => console.log(`${i + 1}. ${e}`));
// }

// console.log("\n-- Final symbol table --");
// result.symbolTable.dump();





// convertAstToStructuredJson.js
// Browser-friendly. Call convert(astString) and it returns structured JSON.
// It also logs the result to console by default.

function tokenizeParenthesized(input) {
  // Keep string literals intact (quick heuristic)
  // Convert to array of tokens
  const tokens = [];
  let i = 0;
  const n = input.length;
  while (i < n) {
    const ch = input[i];
    if (ch === '(' || ch === ')' || ch === '{' || ch === '}' || ch === '[' || ch === ']' || ch === ',' || ch === ';' || ch === ':' ) {
      tokens.push(ch);
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = ch;
      let j = i + 1;
      let s = q;
      while (j < n) {
        const c = input[j];
        s += c;
        if (c === q && input[j-1] !== '\\') { j++; break; }
        j++;
      }
      tokens.push(s);
      i = j;
      continue;
    }
    if (/\s/.test(ch)) { i++; continue; }
    // read word token until whitespace or parentheses
    let j = i;
    let w = '';
    while (j < n && !/\s|\(|\)|\{|\}|\[|\]|,|;|:/.test(input[j])) { w += input[j++]; }
    tokens.push(w);
    i = j;
  }
  return tokens;
}

function parseTokensToTree(tokens) {
  let idx = 0;
  function peek() { return tokens[idx]; }
  function next() { return tokens[idx++]; }
  function parseNode() {
    if (peek() !== '(') return null;
    next(); // '('
    const name = next();
    const children = [];
    while (peek() !== ')' && idx < tokens.length) {
      if (peek() === '(') {
        children.push(parseNode());
      } else {
        children.push(next());
      }
    }
    if (peek() === ')') next(); // consume ')'
    return { name, children };
  }
  // there may be a single root or multiple; return the first root
  const roots = [];
  while (idx < tokens.length) {
    if (peek() === '(') roots.push(parseNode());
    else next();
  }
  return roots.length === 1 ? roots[0] : { name: "ROOT", children: roots };
}

// helpers to search tree
function findAll(node, name, results = []) {
  if (!node) return results;
  if (node.name === name) results.push(node);
  for (const c of node.children || []) {
    if (typeof c === 'object') findAll(c, name, results);
  }
  return results;
}
function findFirst(node, name) {
  if (!node) return null;
  if (node.name === name) return node;
  for (const c of node.children || []) {
    if (typeof c === 'object') {
      const f = findFirst(c, name);
      if (f) return f;
    }
  }
  return null;
}
function firstString(node) {
  if (!node || !node.children) return null;
  for (const c of node.children) if (typeof c === 'string') return c;
  return null;
}
function extractIdentifier(node) {
  const id = findFirst(node, 'identifier');
  return id ? firstString(id) : null;
}
function extractPrimitiveType(node) {
  const prim = findFirst(node, 'primitiveType');
  return prim ? firstString(prim) : null;
}
function extractType(node) {
  if (!node) return 'Unknown';
  const p = findFirst(node, 'primitiveType');
  if (p) return firstString(p);
  const tid = findFirst(node, 'typeIdentifier') || findFirst(node, 'type');
  if (tid) return firstString(tid);
  const cot = findFirst(node, 'classOrInterfaceType') || findFirst(node, 'typeType');
  if (cot) {
    // dig for typeIdentifier under it
    const ti = findFirst(cot, 'typeIdentifier') || findFirst(cot, 'identifier');
    if (ti) return firstString(ti);
  }
  // handle array style token like 'int' followed by '[' in siblings
  const s = (node.children || []).map(c => typeof c === 'string' ? c : c.name);
  if (s.includes('[')) {
    const base = s[0];
    return base + '[]';
  }
  return 'Unknown';
}

// convert an "expression" subtree into structured expression
function convertExpression(node) {
  if (!node) return null;
  if (typeof node === 'string') {
    // token: number or string literal or identifier-like token
    if (/^["'].*["']$/.test(node)) return { type: 'literal', literalType: 'String', value: node.slice(1,-1) };
    if (/^\d+$/.test(node)) return { type: 'literal', literalType: 'int', value: node };
    if (/^\d+\.\d+$/.test(node)) return { type: 'literal', literalType: 'double', value: node };
    if (node === 'true' || node === 'false') return { type: 'literal', literalType: 'boolean', value: node === 'true' };
    return { type: 'token', value: node };
  }

  // literal node
  if (node.name === 'literal') {
    // children may include integerLiteral, floatLiteral, string token etc.
    const child = node.children && node.children[0];
    if (!child) return null;
    if (typeof child === 'string') {
      if (/^["'].*["']$/.test(child)) return { type: 'literal', literalType: 'String', value: child.slice(1,-1) };
      return { type: 'literal', literalType: 'unknown', value: child };
    } else {
      // child.name like integerLiteral
      const v = child.children && child.children[0];
      if (child.name === 'integerLiteral') return { type: 'literal', literalType: 'int', value: v };
      if (child.name === 'floatLiteral' || child.name === 'decimalFloatingPointLiteral') return { type: 'literal', literalType: 'double', value: v };
      if (child.name === "characterLiteral") return { type: 'literal', literalType: 'char', value: v };
      // fallback
      return { type: 'literal', literalType: 'unknown', value: v || null };
    }
  }

  // primary that is identifier
  if (node.name === 'primary') {
    const id = findFirst(node, 'identifier');
    if (id) return { type: 'identifier', name: firstString(id) };
    const lit = findFirst(node, 'literal');
    if (lit) return convertExpression(lit);
    const arrAccess = node.children && node.children.find(c => typeof c === 'object' && c.name === 'expression' && node.children.includes('['));
    // fallback: try last child
    if (node.children && node.children.length === 1 && typeof node.children[0] === 'object') return convertExpression(node.children[0]);
  }

  // methodCall
  if (node.name === 'methodCall') {
    const methodId = extractIdentifier(node);
    const argsNode = findFirst(node, 'arguments') || node;
    const args = [];
    // find expression children under arguments
    if (argsNode) {
      const exprLists = findAll(argsNode, 'expression');
      // filter deeper duplicates by only keeping expression nodes directly under expressionList or arguments
      for (const e of exprLists) {
        // skip nested expression that are part of larger expressions; heuristic: include if parent name is 'expression' and parent is under arguments
        // Simpler: push convertExpression(e)
        args.push(convertExpression(e));
      }
    }
    return { type: 'methodCall', name: methodId, args };
  }

  // array access pattern: expression [ expression ]
  // look for '[' in node.children sequence
  const children = node.children || [];
  for (let i = 0; i < children.length; i++) {
    if (children[i] === '[') {
      const arrNode = children[i-1];
      const idxNode = children[i+1];
      return { type: 'arrayAccess', array: convertExpression(arrNode), index: convertExpression(idxNode) };
    }
  }

  // ternary '?'
  if (children.includes('?')) {
    const q = children.indexOf('?');
    const cIdx = children.indexOf(':', q+1);
    if (q !== -1 && cIdx !== -1) {
      const cond = children.slice(0,q)[0];
      const left = children.slice(q+1,cIdx)[0];
      const right = children.slice(cIdx+1)[0];
      return { type: 'ternary', condition: convertExpression(cond), ifTrue: convertExpression(left), ifFalse: convertExpression(right) };
    }
  }

  // binary operator handling: find most common operators left-to-right
  const ops = ['+', '-', '*', '/', '<', '>', '==', '!=', '&&', '||', '%'];
  for (let i = 0; i < children.length; i++) {
    const c = children[i];
    if (typeof c === 'string' && ops.includes(c)) {
      const left = children[i-1];
      const right = children[i+1];
      return { type: 'binary', operator: c, left: convertExpression(left), right: convertExpression(right) };
    }
  }

  // member access with '.' => find '.' token
  for (let i = 0; i < children.length; i++) {
    if (children[i] === '.') {
      const left = children[i-1];
      const right = children[i+1];
      const leftExpr = convertExpression(left);
      // right could be identifier or methodCall node etc.
      if (typeof right === 'object' && right.name === 'identifier') {
        return { type: 'memberAccess', target: leftExpr, member: firstString(right) };
      }
      if (typeof right === 'object' && right.name === 'methodCall') {
        const method = convertExpression(right);
        method.target = leftExpr && leftExpr.type === 'identifier' ? leftExpr.name : leftExpr;
        return method;
      }
      if (typeof right === 'string') return { type: 'memberAccess', target: leftExpr, member: right };
    }
  }

  // If no pattern matched, try to find a direct child expression
  const exprChild = children.find(c => typeof c === 'object' && ['expression','primary','methodCall','literal','identifier'].includes(c.name));
  if (exprChild) return convertExpression(exprChild);

  // fallback: return tokenized repr
  return { type: 'unknown_expr', repr: children.map(c => typeof c === 'string' ? c : c.name).join(' ') };
}

// convert single statement blockStatement node to high-level statement object
function convertStatement(node) {
  if (!node) return null;

  // localVariableDeclaration
  const local = findFirst(node, 'localVariableDeclaration') || (node.name === 'localVariableDeclaration' ? node : null);
  if (local) {
    const typeType = findFirst(local, 'typeType') || findFirst(local, 'classOrInterfaceType') || findFirst(local, 'primitiveType');
    const varType = extractType(typeType) || extractPrimitiveType(local) || 'Unknown';
    // find all variableDeclarator under local
    const vds = findAll(local, 'variableDeclarator');
    const vars = [];
    for (const vd of vds) {
      const idNode = findFirst(vd, 'variableDeclaratorId');
      const id = idNode ? firstString(idNode) : null;
      const initNode = findFirst(vd, 'variableInitializer');
      let initExpr = null;
      if (initNode) {
        const arrInit = findFirst(initNode, 'arrayInitializer');
        if (arrInit) {
          const vals = findAll(arrInit, 'variableInitializer').map(v => {
            const lit = findFirst(v, 'literal');
            return convertExpression(lit) || null;
          });
          initExpr = { type: 'array', values: vals };
        } else {
          const expr = findFirst(initNode, 'expression');
          if (expr) initExpr = convertExpression(expr);
        }
      }
      vars.push({ id, init: initExpr });
    }
    // If single declarator, return {type: 'variable', name, varType, value}
    if (vars.length === 1) {
      const v = vars[0];
      // collapse literal init if present
      let value = null;
      if (v.init && v.init.type === 'literal') value = v.init.value;
      else value = v.init;
      return { type: 'variable', name: v.id, varType, value };
    }
    // multiple declarations
    return { type: 'variableDeclarations', varType, declarators: vars };
  }

  // fieldDeclaration (class-level) occasionally encountered in classBody conversion - handle similarly
  const field = findFirst(node, 'fieldDeclaration');
  if (field) {
    const typeNode = findFirst(field, 'typeType') || findFirst(field, 'primitiveType') || findFirst(field, 'classOrInterfaceType');
    const varType = extractType(typeNode);
    const vds = findAll(field, 'variableDeclarator');
    const result = vds.map(vd => {
      const id = firstString(findFirst(vd, 'variableDeclaratorId'));
      const initNode = findFirst(vd, 'variableInitializer');
      const lit = initNode && findFirst(initNode, 'literal');
      const init = lit ? (convertExpression(lit).value || convertExpression(lit)) : null;
      return { name: id, type: varType, init };
    });
    return { type: 'fieldList', fields: result };
  }

  // expression statement: assignment or method calls, increments
  if (node.name === 'blockStatement' || node.name === 'statement' || node.name === 'expressionStatement') {
    // check for methodCall inside
    const mcall = findFirst(node, 'methodCall');
    if (mcall) {
      const mc = convertExpression(mcall);
      // detect System.out.println pattern -> print
      if (mc && mc.target && mc.target.type === 'identifier' && mc.target.name === 'System' && mc.name === 'println') {
        // find the single argument value
        const arg = (mc.args && mc.args[0]) ? mc.args[0] : null;
        const val = (arg && arg.type === 'literal') ? arg.value : arg;
        return { type: 'print', value: val };
      }
      // if method call on member like System.out.println already handled if methodCall had target
      return { type: 'expression', expression: mc };
    }

    // assignment: find '=' token in children of expression
    const exprNode = findFirst(node, 'expression');
    if (exprNode) {
      const ch = exprNode.children || [];
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === '=') {
          const left = ch[i-1];
          const right = ch[i+1];
          const leftExpr = convertExpression(left);
          const rightExpr = convertExpression(right);
          return { type: 'assignment', left: leftExpr, right: rightExpr };
        }
      }
      // increment '++' as postfix
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === '++') {
          const target = convertExpression(ch[i-1]);
          return { type: 'update', operator: '++', target };
        }
      }
      // fallback convert expression
      const conv = convertExpression(exprNode);
      if (conv) return { type: 'expression', expression: conv };
    }
  }

  // if statement pattern: node.name === 'statement' and contains 'if'
  if (node.name === 'statement' && node.children && node.children.includes('if')) {
    // find the expression child (condition)
    const cond = findFirst(node, 'expression');
    // find then and else statement nodes (first and next statement objects)
    // naive but works for this AST shape: find subsequent 'statement' children after condition
    const stmtChildren = (node.children || []).filter(c => typeof c === 'object' && c.name === 'statement');
    const thenNode = stmtChildren[0] || null;
    const elseNode = stmtChildren[1] || null;
    const thenBody = thenNode ? convertBlockOrStatement(thenNode) : null;
    const elseBody = elseNode ? convertBlockOrStatement(elseNode) : null;
    return { type: 'if', condition: convertExpression(cond), then: Array.isArray(thenBody) ? thenBody : (thenBody ? thenBody.statements || [thenBody] : []), else: elseBody ? (elseBody.statements || [elseBody]) : null };
  }

  // switch
  if (node.name === 'statement' && node.children && node.children.includes('switch')) {
    const expr = findFirst(node, 'expression');
    const groups = findAll(node, 'switchBlockStatementGroup');
    const cases = [];
    for (const g of groups) {
      const labels = findAll(g, 'switchLabel');
      const blockStmts = findAll(g, 'blockStatement').map(bs => convertStatement(bs)).filter(Boolean);
      for (const lbl of labels) {
        const maybeCaseExpr = findFirst(lbl, 'expression');
        if (lbl.children && lbl.children.includes('default')) {
          cases.push({ default: true, body: blockStmts });
        } else {
          cases.push({ value: convertExpression(maybeCaseExpr), body: blockStmts });
        }
      }
    }
    return { type: 'switch', expression: convertExpression(expr), cases };
  }

  // for loop: handle normal and enhanced
  if (node.name === 'statement' && node.children && node.children.includes('for')) {
    const forControl = findFirst(node, 'forControl') || findFirst(node, 'for');
    const enhanced = findFirst(node, 'enhancedForControl');
    const forInit = findFirst(node, 'forInit');
    const condition = findFirst(node, 'expression');
    const forUpdate = findFirst(node, 'forUpdate') || findFirst(node, 'expressionList');
    if (enhanced) {
      const typeNode = findFirst(enhanced, 'typeType') || findFirst(enhanced, 'classOrInterfaceType');
      const varName = extractIdentifier(findFirst(enhanced, 'variableDeclaratorId'));
      const iterable = findFirst(enhanced, 'expression');
      return { type: 'enhancedFor', varType: extractType(typeNode), varName, iterable: convertExpression(iterable), body: convertBlockOrStatement(node) };
    } else {
      // normal for: find init local var under forInit
      let init = null;
      if (forInit) {
        init = convertStatement(forInit);
      } else {
        // maybe local variable declarator under forControl -> find variableDeclarator
        const vd = findFirst(node, 'variableDeclarator');
        if (vd) init = convertStatement({ name: 'localVariableDeclaration', children: [vd] });
      }
      return { type: 'for', init, condition: convertExpression(condition), update: forUpdate ? convertExpression(forUpdate) : null, body: convertBlockOrStatement(node) };
    }
  }

  // while
  if (node.name === 'statement' && node.children && node.children.includes('while')) {
    const cond = findFirst(node, 'expression');
    return { type: 'while', condition: convertExpression(cond), body: convertBlockOrStatement(node) };
  }

  // do-while
  if (node.name === 'statement' && node.children && node.children.includes('do')) {
    const cond = findFirst(node, 'expression');
    const body = findFirst(node, 'block') || findFirst(node, 'statement');
    return { type: 'doWhile', condition: convertExpression(cond), body: convertBlockOrStatement(body) };
  }

  // try-catch-finally
  if (node.name === 'statement' && node.children && node.children.includes('try')) {
    const tryBlock = findFirst(node, 'block');
    const catchClauses = findAll(node, 'catchClause');
    const catches = catchClauses.map(cc => {
      const typeNode = findFirst(cc, 'catchType');
      const exName = extractIdentifier(cc);
      const cb = findFirst(cc, 'block');
      return { exceptionType: typeNode ? (firstString(typeNode) || typeNode.name) : null, exceptionName: exName, body: convertBlockOrStatement(cb) };
    });
    const finallyBlock = findFirst(node, 'finallyBlock');
    return { type: 'try', tryBlock: convertBlockOrStatement(tryBlock), catches, finally: finallyBlock ? convertBlockOrStatement(findFirst(finallyBlock, 'block')) : null };
  }

  // return statement
  if (node.name === 'statement' && node.children && node.children[0] === 'return') {
    const expr = findFirst(node, 'expression');
    return { type: 'return', value: expr ? convertExpression(expr) : null };
  }

  // block containing statements
  if (node.name === 'block' || node.name === 'blockStatement') {
    // collect each blockStatement child
    const bs = findAll(node, 'blockStatement');
    if (bs.length) return { type: 'block', statements: bs.map(b => convertStatement(b)).filter(Boolean) };
    // otherwise if direct statement children exist
    const stmts = (node.children || []).map(c => typeof c === 'object' ? convertStatement(c) : null).filter(Boolean);
    if (stmts.length) return { type: 'block', statements: stmts };
  }

  // fallback
  return null;
}

function convertBlockOrStatement(node) {
  if (!node) return null;
  if (node.name === 'block') return convertStatement(node);
  // if node is a wrapper 'statement' that contains block, find block child
  const blk = findFirst(node, 'block') || node;
  return convertStatement(blk);
}

// top-level simplifier to produce the expected shape
function simplifyRoot(treeRoot) {
  // Expect root name 'compilationUnit'
  if (!treeRoot || treeRoot.name !== 'compilationUnit') return null;
  const out = { type: 'compilationUnit', body: [] };

  const typeDecl = findFirst(treeRoot, 'typeDeclaration') || treeRoot;
  const classDecl = findFirst(typeDecl, 'classDeclaration');
  if (!classDecl) return out;

  const classObj = { type: 'classDeclaration', name: extractIdentifier(classDecl), modifiers: [], fields: [], methods: [] };
  // collect modifiers on classOrInterfaceModifier under typeDeclaration or classDeclaration
  const mods = findAll(classDecl, 'classOrInterfaceModifier');
  classObj.modifiers = mods.map(m => firstString(m)).filter(Boolean);

  // classBody contains classBodyDeclaration nodes
  const body = findFirst(classDecl, 'classBody');
  if (body) {
    const cbds = findAll(body, 'classBodyDeclaration');
    for (const cbd of cbds) {
      // each cbd may contain memberDeclaration
      const member = findFirst(cbd, 'memberDeclaration') || cbd;
      // fieldDeclaration?
      const fd = findFirst(member, 'fieldDeclaration');
      if (fd) {
        const typeNode = findFirst(fd, 'typeType') || findFirst(fd, 'primitiveType') || findFirst(fd, 'classOrInterfaceType');
        const varType = extractType(typeNode) || extractPrimitiveType(fd) || 'Unknown';
        const vds = findAll(fd, 'variableDeclarator');
        for (const vd of vds) {
          const name = firstString(findFirst(vd, 'variableDeclaratorId'));
          // initializer
          const initNode = findFirst(vd, 'variableInitializer');
          let init = null;
          if (initNode) {
            const lit = findFirst(initNode, 'literal');
            if (lit) {
              const litConv = convertExpression(lit);
              init = litConv && litConv.type === 'literal' ? litConv.value : (litConv || null);
            } else {
              // if expression new or other, just give repr
              const expr = findFirst(initNode, 'expression');
              init = expr ? convertExpression(expr) : null;
            }
          }
          classObj.fields.push({ name, type: varType, init });
        }
        continue;
      }

      // methodDeclaration?
      const md = findFirst(member, 'methodDeclaration');
      if (md) {
        const methodName = extractIdentifier(md);
        // return type
        const rnode = findFirst(md, 'typeTypeOrVoid') || findFirst(md, 'typeType') || findFirst(md, 'type');
        let returnType = 'void';
        if (rnode && !(rnode.children || []).includes('void')) returnType = extractType(rnode);
        if (rnode && (rnode.children || []).includes('void')) returnType = 'void';
        // modifiers - pull from parent cbd and md
        const parentMods = findAll(cbd, 'classOrInterfaceModifier').map(m => firstString(m)).filter(Boolean);
        const mdMods = findAll(md, 'modifier').map(m => firstString(m)).filter(Boolean);
        const modsAll = Array.from(new Set([...parentMods, ...mdMods]));
        // parameters
        const params = [];
        const formalParams = findAll(md, 'formalParameter');
        for (const p of formalParams) {
          const typeNode = findFirst(p, 'typeType') || findFirst(p, 'primitiveType') || findFirst(p, 'classOrInterfaceType');
          const ptype = extractType(typeNode) || extractPrimitiveType(p) || 'Unknown';
          const id = firstString(findFirst(p, 'variableDeclaratorId') || findFirst(p, 'identifier'));
          // check if brackets in parameter children => array
          const isArray = (p.children || []).some(c => c === '[');
          params.push({ name: id, type: isArray ? (ptype + '[]') : ptype });
        }
        // method body: extract block and convert blockStatement children
        const bodyBlock = findFirst(md, 'block') || findFirst(md, 'methodBody') && findFirst(findFirst(md, 'methodBody'), 'block');
        const stmts = [];
        if (bodyBlock) {
          const blockStatements = findAll(bodyBlock, 'blockStatement');
          for (const bs of blockStatements) {
            const conv = convertStatement(bs);
            if (conv) stmts.push(conv);
          }
        }
        classObj.methods.push({ name: methodName, returnType, modifiers: modsAll, params, body: stmts });
      }
    }
  }

  out.body.push(classObj);
  return out;
}

// Public API
convert(astString);
function convert(astString) {
  const tokens = tokenizeParenthesized(astString);
  const tree = parseTokensToTree(tokens);
  const structured = simplifyRoot(tree);
  // log pretty
  if (typeof console !== 'undefined') {
    console.log('✅ Simplified JSON output:');
    console.log(JSON.stringify(structured, null, 2));
  }
  return structured;
}

// If used in a browser inline script without modules, also attach to window for convenience:
if (typeof window !== 'undefined') {
  window.convert = function(astStr) { return convert(astStr); };
}
