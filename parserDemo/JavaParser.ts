// Generated from JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaParserListener } from "./JavaParserListener";

export class JavaParser extends JavaParserBase {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXPORTS = 17;
	public static readonly EXTENDS = 18;
	public static readonly FINAL = 19;
	public static readonly FINALLY = 20;
	public static readonly FLOAT = 21;
	public static readonly FOR = 22;
	public static readonly GOTO = 23;
	public static readonly IF = 24;
	public static readonly IMPLEMENTS = 25;
	public static readonly IMPORT = 26;
	public static readonly INSTANCEOF = 27;
	public static readonly INT = 28;
	public static readonly INTERFACE = 29;
	public static readonly LONG = 30;
	public static readonly MODULE = 31;
	public static readonly NATIVE = 32;
	public static readonly NEW = 33;
	public static readonly NON_SEALED = 34;
	public static readonly OPEN = 35;
	public static readonly OPENS = 36;
	public static readonly PACKAGE = 37;
	public static readonly PERMITS = 38;
	public static readonly PRIVATE = 39;
	public static readonly PROTECTED = 40;
	public static readonly PROVIDES = 41;
	public static readonly PUBLIC = 42;
	public static readonly RECORD = 43;
	public static readonly REQUIRES = 44;
	public static readonly RETURN = 45;
	public static readonly SEALED = 46;
	public static readonly SHORT = 47;
	public static readonly STATIC = 48;
	public static readonly STRICTFP = 49;
	public static readonly SUPER = 50;
	public static readonly SWITCH = 51;
	public static readonly SYNCHRONIZED = 52;
	public static readonly THIS = 53;
	public static readonly THROW = 54;
	public static readonly THROWS = 55;
	public static readonly TO = 56;
	public static readonly TRANSIENT = 57;
	public static readonly TRANSITIVE = 58;
	public static readonly TRY = 59;
	public static readonly USES = 60;
	public static readonly VAR = 61;
	public static readonly VOID = 62;
	public static readonly VOLATILE = 63;
	public static readonly WHEN = 64;
	public static readonly WHILE = 65;
	public static readonly WITH = 66;
	public static readonly YIELD = 67;
	public static readonly DECIMAL_LITERAL = 68;
	public static readonly HEX_LITERAL = 69;
	public static readonly OCT_LITERAL = 70;
	public static readonly BINARY_LITERAL = 71;
	public static readonly FLOAT_LITERAL = 72;
	public static readonly HEX_FLOAT_LITERAL = 73;
	public static readonly BOOL_LITERAL = 74;
	public static readonly CHAR_LITERAL = 75;
	public static readonly STRING_LITERAL = 76;
	public static readonly TEXT_BLOCK = 77;
	public static readonly NULL_LITERAL = 78;
	public static readonly LPAREN = 79;
	public static readonly RPAREN = 80;
	public static readonly LBRACE = 81;
	public static readonly RBRACE = 82;
	public static readonly LBRACK = 83;
	public static readonly RBRACK = 84;
	public static readonly SEMI = 85;
	public static readonly COMMA = 86;
	public static readonly DOT = 87;
	public static readonly ASSIGN = 88;
	public static readonly GT = 89;
	public static readonly LT = 90;
	public static readonly BANG = 91;
	public static readonly TILDE = 92;
	public static readonly QUESTION = 93;
	public static readonly COLON = 94;
	public static readonly EQUAL = 95;
	public static readonly LE = 96;
	public static readonly GE = 97;
	public static readonly NOTEQUAL = 98;
	public static readonly AND = 99;
	public static readonly OR = 100;
	public static readonly INC = 101;
	public static readonly DEC = 102;
	public static readonly ADD = 103;
	public static readonly SUB = 104;
	public static readonly MUL = 105;
	public static readonly DIV = 106;
	public static readonly BITAND = 107;
	public static readonly BITOR = 108;
	public static readonly CARET = 109;
	public static readonly MOD = 110;
	public static readonly ADD_ASSIGN = 111;
	public static readonly SUB_ASSIGN = 112;
	public static readonly MUL_ASSIGN = 113;
	public static readonly DIV_ASSIGN = 114;
	public static readonly AND_ASSIGN = 115;
	public static readonly OR_ASSIGN = 116;
	public static readonly XOR_ASSIGN = 117;
	public static readonly MOD_ASSIGN = 118;
	public static readonly LSHIFT_ASSIGN = 119;
	public static readonly RSHIFT_ASSIGN = 120;
	public static readonly URSHIFT_ASSIGN = 121;
	public static readonly ARROW = 122;
	public static readonly COLONCOLON = 123;
	public static readonly AT = 124;
	public static readonly ELLIPSIS = 125;
	public static readonly WS = 126;
	public static readonly COMMENT = 127;
	public static readonly LINE_COMMENT = 128;
	public static readonly IDENTIFIER = 129;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_modularCompulationUnit = 1;
	public static readonly RULE_packageDeclaration = 2;
	public static readonly RULE_importDeclaration = 3;
	public static readonly RULE_typeDeclaration = 4;
	public static readonly RULE_modifier = 5;
	public static readonly RULE_classOrInterfaceModifier = 6;
	public static readonly RULE_variableModifier = 7;
	public static readonly RULE_classDeclaration = 8;
	public static readonly RULE_typeParameters = 9;
	public static readonly RULE_typeParameter = 10;
	public static readonly RULE_typeBound = 11;
	public static readonly RULE_enumDeclaration = 12;
	public static readonly RULE_enumConstants = 13;
	public static readonly RULE_enumConstant = 14;
	public static readonly RULE_enumBodyDeclarations = 15;
	public static readonly RULE_interfaceDeclaration = 16;
	public static readonly RULE_classBody = 17;
	public static readonly RULE_interfaceBody = 18;
	public static readonly RULE_classBodyDeclaration = 19;
	public static readonly RULE_memberDeclaration = 20;
	public static readonly RULE_methodDeclaration = 21;
	public static readonly RULE_methodBody = 22;
	public static readonly RULE_typeTypeOrVoid = 23;
	public static readonly RULE_genericMethodDeclaration = 24;
	public static readonly RULE_genericConstructorDeclaration = 25;
	public static readonly RULE_constructorDeclaration = 26;
	public static readonly RULE_compactConstructorDeclaration = 27;
	public static readonly RULE_fieldDeclaration = 28;
	public static readonly RULE_interfaceBodyDeclaration = 29;
	public static readonly RULE_interfaceMemberDeclaration = 30;
	public static readonly RULE_constDeclaration = 31;
	public static readonly RULE_constantDeclarator = 32;
	public static readonly RULE_interfaceMethodDeclaration = 33;
	public static readonly RULE_interfaceMethodModifier = 34;
	public static readonly RULE_genericInterfaceMethodDeclaration = 35;
	public static readonly RULE_interfaceCommonBodyDeclaration = 36;
	public static readonly RULE_variableDeclarators = 37;
	public static readonly RULE_variableDeclarator = 38;
	public static readonly RULE_variableDeclaratorId = 39;
	public static readonly RULE_variableInitializer = 40;
	public static readonly RULE_arrayInitializer = 41;
	public static readonly RULE_classType = 42;
	public static readonly RULE_packageName = 43;
	public static readonly RULE_typeArgument = 44;
	public static readonly RULE_qualifiedNameList = 45;
	public static readonly RULE_formalParameters = 46;
	public static readonly RULE_receiverParameter = 47;
	public static readonly RULE_formalParameterList = 48;
	public static readonly RULE_formalParameter = 49;
	public static readonly RULE_lambdaLVTIList = 50;
	public static readonly RULE_lambdaLVTIParameter = 51;
	public static readonly RULE_qualifiedName = 52;
	public static readonly RULE_literal = 53;
	public static readonly RULE_integerLiteral = 54;
	public static readonly RULE_floatLiteral = 55;
	public static readonly RULE_altAnnotationQualifiedName = 56;
	public static readonly RULE_annotation = 57;
	public static readonly RULE_annotationFieldValues = 58;
	public static readonly RULE_annotationFieldValue = 59;
	public static readonly RULE_annotationValue = 60;
	public static readonly RULE_elementValue = 61;
	public static readonly RULE_elementValueArrayInitializer = 62;
	public static readonly RULE_annotationTypeDeclaration = 63;
	public static readonly RULE_annotationTypeBody = 64;
	public static readonly RULE_annotationTypeElementDeclaration = 65;
	public static readonly RULE_annotationTypeElementRest = 66;
	public static readonly RULE_annotationMethodOrConstantRest = 67;
	public static readonly RULE_annotationMethodRest = 68;
	public static readonly RULE_annotationConstantRest = 69;
	public static readonly RULE_defaultValue = 70;
	public static readonly RULE_moduleDeclaration = 71;
	public static readonly RULE_moduleDirective = 72;
	public static readonly RULE_requiresModifier = 73;
	public static readonly RULE_recordDeclaration = 74;
	public static readonly RULE_recordHeader = 75;
	public static readonly RULE_recordComponentList = 76;
	public static readonly RULE_recordComponent = 77;
	public static readonly RULE_recordBody = 78;
	public static readonly RULE_block = 79;
	public static readonly RULE_blockStatement = 80;
	public static readonly RULE_localVariableDeclaration = 81;
	public static readonly RULE_identifier = 82;
	public static readonly RULE_typeIdentifier = 83;
	public static readonly RULE_localTypeDeclaration = 84;
	public static readonly RULE_statement = 85;
	public static readonly RULE_catchClause = 86;
	public static readonly RULE_catchType = 87;
	public static readonly RULE_finallyBlock = 88;
	public static readonly RULE_resourceSpecification = 89;
	public static readonly RULE_resources = 90;
	public static readonly RULE_resource = 91;
	public static readonly RULE_switchBlockStatementGroup = 92;
	public static readonly RULE_switchLabel = 93;
	public static readonly RULE_forControl = 94;
	public static readonly RULE_forInit = 95;
	public static readonly RULE_enhancedForControl = 96;
	public static readonly RULE_expressionList = 97;
	public static readonly RULE_methodCall = 98;
	public static readonly RULE_expression = 99;
	public static readonly RULE_pattern = 100;
	public static readonly RULE_componentPatternList = 101;
	public static readonly RULE_componentPattern = 102;
	public static readonly RULE_lambdaExpression = 103;
	public static readonly RULE_lambdaParameters = 104;
	public static readonly RULE_lambdaBody = 105;
	public static readonly RULE_primary = 106;
	public static readonly RULE_switchExpression = 107;
	public static readonly RULE_switchLabeledRule = 108;
	public static readonly RULE_guard = 109;
	public static readonly RULE_casePattern = 110;
	public static readonly RULE_switchRuleOutcome = 111;
	public static readonly RULE_classOrInterfaceType = 112;
	public static readonly RULE_creator = 113;
	public static readonly RULE_createdName = 114;
	public static readonly RULE_innerCreator = 115;
	public static readonly RULE_arrayCreatorRest = 116;
	public static readonly RULE_classCreatorRest = 117;
	public static readonly RULE_explicitGenericInvocation = 118;
	public static readonly RULE_typeArgumentsOrDiamond = 119;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 120;
	public static readonly RULE_nonWildcardTypeArguments = 121;
	public static readonly RULE_typeList = 122;
	public static readonly RULE_typeType = 123;
	public static readonly RULE_primitiveType = 124;
	public static readonly RULE_typeArguments = 125;
	public static readonly RULE_superSuffix = 126;
	public static readonly RULE_explicitGenericInvocationSuffix = 127;
	public static readonly RULE_arguments = 128;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "modularCompulationUnit", "packageDeclaration", "importDeclaration", 
		"typeDeclaration", "modifier", "classOrInterfaceModifier", "variableModifier", 
		"classDeclaration", "typeParameters", "typeParameter", "typeBound", "enumDeclaration", 
		"enumConstants", "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", 
		"classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration", 
		"methodDeclaration", "methodBody", "typeTypeOrVoid", "genericMethodDeclaration", 
		"genericConstructorDeclaration", "constructorDeclaration", "compactConstructorDeclaration", 
		"fieldDeclaration", "interfaceBodyDeclaration", "interfaceMemberDeclaration", 
		"constDeclaration", "constantDeclarator", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "genericInterfaceMethodDeclaration", "interfaceCommonBodyDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classType", "packageName", "typeArgument", "qualifiedNameList", 
		"formalParameters", "receiverParameter", "formalParameterList", "formalParameter", 
		"lambdaLVTIList", "lambdaLVTIParameter", "qualifiedName", "literal", "integerLiteral", 
		"floatLiteral", "altAnnotationQualifiedName", "annotation", "annotationFieldValues", 
		"annotationFieldValue", "annotationValue", "elementValue", "elementValueArrayInitializer", 
		"annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration", 
		"annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest", 
		"annotationConstantRest", "defaultValue", "moduleDeclaration", "moduleDirective", 
		"requiresModifier", "recordDeclaration", "recordHeader", "recordComponentList", 
		"recordComponent", "recordBody", "block", "blockStatement", "localVariableDeclaration", 
		"identifier", "typeIdentifier", "localTypeDeclaration", "statement", "catchClause", 
		"catchType", "finallyBlock", "resourceSpecification", "resources", "resource", 
		"switchBlockStatementGroup", "switchLabel", "forControl", "forInit", "enhancedForControl", 
		"expressionList", "methodCall", "expression", "pattern", "componentPatternList", 
		"componentPattern", "lambdaExpression", "lambdaParameters", "lambdaBody", 
		"primary", "switchExpression", "switchLabeledRule", "guard", "casePattern", 
		"switchRuleOutcome", "classOrInterfaceType", "creator", "createdName", 
		"innerCreator", "arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", 
		"typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", 
		"typeList", "typeType", "primitiveType", "typeArguments", "superSuffix", 
		"explicitGenericInvocationSuffix", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'exports'", "'extends'", "'final'", 
		"'finally'", "'float'", "'for'", "'goto'", "'if'", "'implements'", "'import'", 
		"'instanceof'", "'int'", "'interface'", "'long'", "'module'", "'native'", 
		"'new'", "'non-sealed'", "'open'", "'opens'", "'package'", "'permits'", 
		"'private'", "'protected'", "'provides'", "'public'", "'record'", "'requires'", 
		"'return'", "'sealed'", "'short'", "'static'", "'strictfp'", "'super'", 
		"'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", "'to'", 
		"'transient'", "'transitive'", "'try'", "'uses'", "'var'", "'void'", "'volatile'", 
		"'when'", "'while'", "'with'", "'yield'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", 
		"'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", 
		"'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
		"'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXPORTS", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "GOTO", 
		"IF", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", 
		"MODULE", "NATIVE", "NEW", "NON_SEALED", "OPEN", "OPENS", "PACKAGE", "PERMITS", 
		"PRIVATE", "PROTECTED", "PROVIDES", "PUBLIC", "RECORD", "REQUIRES", "RETURN", 
		"SEALED", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", 
		"THIS", "THROW", "THROWS", "TO", "TRANSIENT", "TRANSITIVE", "TRY", "USES", 
		"VAR", "VOID", "VOLATILE", "WHEN", "WHILE", "WITH", "YIELD", "DECIMAL_LITERAL", 
		"HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "TEXT_BLOCK", "NULL_LITERAL", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
		"DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
		"MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
		"LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", 
		"AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 258;
					this.packageDeclaration();
					}
					break;
				}
				this.state = 265;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 263;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JavaParser.IMPORT:
							{
							this.state = 261;
							this.importDeclaration();
							}
							break;
						case JavaParser.SEMI:
							{
							this.state = 262;
							this.match(JavaParser.SEMI);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 267;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JavaParser.NON_SEALED - 34)) | (1 << (JavaParser.PRIVATE - 34)) | (1 << (JavaParser.PROTECTED - 34)) | (1 << (JavaParser.PUBLIC - 34)) | (1 << (JavaParser.RECORD - 34)) | (1 << (JavaParser.SEALED - 34)) | (1 << (JavaParser.STATIC - 34)) | (1 << (JavaParser.STRICTFP - 34)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT) {
					{
					this.state = 270;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case JavaParser.ABSTRACT:
					case JavaParser.CLASS:
					case JavaParser.ENUM:
					case JavaParser.FINAL:
					case JavaParser.INTERFACE:
					case JavaParser.NON_SEALED:
					case JavaParser.PRIVATE:
					case JavaParser.PROTECTED:
					case JavaParser.PUBLIC:
					case JavaParser.RECORD:
					case JavaParser.SEALED:
					case JavaParser.STATIC:
					case JavaParser.STRICTFP:
					case JavaParser.AT:
						{
						this.state = 268;
						this.typeDeclaration();
						}
						break;
					case JavaParser.SEMI:
						{
						this.state = 269;
						this.match(JavaParser.SEMI);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 275;
				this.match(JavaParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.modularCompulationUnit();
				this.state = 277;
				this.match(JavaParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modularCompulationUnit(): ModularCompulationUnitContext {
		let _localctx: ModularCompulationUnitContext = new ModularCompulationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaParser.RULE_modularCompulationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IMPORT) {
				{
				{
				this.state = 281;
				this.importDeclaration();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 287;
			this.moduleDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT) {
				{
				{
				this.state = 289;
				this.annotation();
				}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 295;
			this.match(JavaParser.PACKAGE);
			this.state = 296;
			this.qualifiedName();
			this.state = 297;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(JavaParser.IMPORT);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.STATIC) {
				{
				this.state = 300;
				this.match(JavaParser.STATIC);
				}
			}

			this.state = 303;
			this.qualifiedName();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DOT) {
				{
				this.state = 304;
				this.match(JavaParser.DOT);
				this.state = 305;
				this.match(JavaParser.MUL);
				}
			}

			this.state = 308;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CLASS:
				{
				this.state = 316;
				this.classDeclaration();
				}
				break;
			case JavaParser.ENUM:
				{
				this.state = 317;
				this.enumDeclaration();
				}
				break;
			case JavaParser.INTERFACE:
				{
				this.state = 318;
				this.interfaceDeclaration();
				}
				break;
			case JavaParser.AT:
				{
				this.state = 319;
				this.annotationTypeDeclaration();
				}
				break;
			case JavaParser.RECORD:
				{
				this.state = 320;
				this.recordDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaParser.RULE_modifier);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.FINAL:
			case JavaParser.NON_SEALED:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.SEALED:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.classOrInterfaceModifier();
				}
				break;
			case JavaParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
				this.match(JavaParser.NATIVE);
				}
				break;
			case JavaParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
				this.match(JavaParser.SYNCHRONIZED);
				}
				break;
			case JavaParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 326;
				this.match(JavaParser.TRANSIENT);
				}
				break;
			case JavaParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 327;
				this.match(JavaParser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 332;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case JavaParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 333;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 334;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 335;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 336;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 337;
				this.match(JavaParser.STRICTFP);
				}
				break;
			case JavaParser.SEALED:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 338;
				this.match(JavaParser.SEALED);
				}
				break;
			case JavaParser.NON_SEALED:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 339;
				this.match(JavaParser.NON_SEALED);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaParser.RULE_variableModifier);
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 342;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(JavaParser.CLASS);
			this.state = 347;
			this.identifier();
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 348;
				this.typeParameters();
				}
			}

			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 351;
				this.match(JavaParser.EXTENDS);
				this.state = 352;
				this.typeType();
				}
			}

			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 355;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 356;
				this.typeList();
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.PERMITS) {
				{
				this.state = 359;
				this.match(JavaParser.PERMITS);
				this.state = 360;
				this.typeList();
				}
			}

			this.state = 363;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(JavaParser.LT);
			this.state = 366;
			this.typeParameter();
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 367;
				this.match(JavaParser.COMMA);
				this.state = 368;
				this.typeParameter();
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 374;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT) {
				{
				{
				this.state = 376;
				this.annotation();
				}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 382;
			this.identifier();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 383;
				this.match(JavaParser.EXTENDS);
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 384;
						this.annotation();
						}
						}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 390;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.typeType();
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITAND) {
				{
				{
				this.state = 394;
				this.match(JavaParser.BITAND);
				this.state = 395;
				this.typeType();
				}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(JavaParser.ENUM);
			this.state = 402;
			this.identifier();
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 403;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 404;
				this.typeList();
				}
			}

			this.state = 407;
			this.match(JavaParser.LBRACE);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 408;
				this.enumConstants();
				}
			}

			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 411;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 414;
				this.enumBodyDeclarations();
				}
			}

			this.state = 417;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.enumConstant();
			this.state = 424;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 420;
					this.match(JavaParser.COMMA);
					this.state = 421;
					this.enumConstant();
					}
					}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT) {
				{
				{
				this.state = 427;
				this.annotation();
				}
				}
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 433;
			this.identifier();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 434;
				this.arguments();
				}
			}

			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LBRACE) {
				{
				this.state = 437;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(JavaParser.SEMI);
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.NATIVE - 32)) | (1 << (JavaParser.NON_SEALED - 32)) | (1 << (JavaParser.OPEN - 32)) | (1 << (JavaParser.OPENS - 32)) | (1 << (JavaParser.PERMITS - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PROVIDES - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RECORD - 32)) | (1 << (JavaParser.REQUIRES - 32)) | (1 << (JavaParser.SEALED - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.TO - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRANSITIVE - 32)) | (1 << (JavaParser.USES - 32)) | (1 << (JavaParser.VAR - 32)) | (1 << (JavaParser.VOID - 32)) | (1 << (JavaParser.VOLATILE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaParser.WHEN - 64)) | (1 << (JavaParser.WITH - 64)) | (1 << (JavaParser.YIELD - 64)) | (1 << (JavaParser.LBRACE - 64)) | (1 << (JavaParser.SEMI - 64)) | (1 << (JavaParser.LT - 64)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 441;
				this.classBodyDeclaration();
				}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(JavaParser.INTERFACE);
			this.state = 448;
			this.identifier();
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 449;
				this.typeParameters();
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 452;
				this.match(JavaParser.EXTENDS);
				this.state = 453;
				this.typeList();
				}
			}

			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.PERMITS) {
				{
				this.state = 456;
				this.match(JavaParser.PERMITS);
				this.state = 457;
				this.typeList();
				}
			}

			this.state = 460;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(JavaParser.LBRACE);
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.NATIVE - 32)) | (1 << (JavaParser.NON_SEALED - 32)) | (1 << (JavaParser.OPEN - 32)) | (1 << (JavaParser.OPENS - 32)) | (1 << (JavaParser.PERMITS - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PROVIDES - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RECORD - 32)) | (1 << (JavaParser.REQUIRES - 32)) | (1 << (JavaParser.SEALED - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.TO - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRANSITIVE - 32)) | (1 << (JavaParser.USES - 32)) | (1 << (JavaParser.VAR - 32)) | (1 << (JavaParser.VOID - 32)) | (1 << (JavaParser.VOLATILE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaParser.WHEN - 64)) | (1 << (JavaParser.WITH - 64)) | (1 << (JavaParser.YIELD - 64)) | (1 << (JavaParser.LBRACE - 64)) | (1 << (JavaParser.SEMI - 64)) | (1 << (JavaParser.LT - 64)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 463;
				this.classBodyDeclaration();
				}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 469;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(JavaParser.LBRACE);
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.NATIVE - 32)) | (1 << (JavaParser.NON_SEALED - 32)) | (1 << (JavaParser.OPEN - 32)) | (1 << (JavaParser.OPENS - 32)) | (1 << (JavaParser.PERMITS - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PROVIDES - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RECORD - 32)) | (1 << (JavaParser.REQUIRES - 32)) | (1 << (JavaParser.SEALED - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.TO - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRANSITIVE - 32)) | (1 << (JavaParser.USES - 32)) | (1 << (JavaParser.VAR - 32)) | (1 << (JavaParser.VOID - 32)) | (1 << (JavaParser.VOLATILE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaParser.WHEN - 64)) | (1 << (JavaParser.WITH - 64)) | (1 << (JavaParser.YIELD - 64)) | (1 << (JavaParser.SEMI - 64)) | (1 << (JavaParser.LT - 64)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 472;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 478;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.STATIC) {
					{
					this.state = 481;
					this.match(JavaParser.STATIC);
					}
				}

				this.state = 484;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 485;
						this.modifier();
						}
						}
					}
					this.state = 490;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 491;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaParser.RULE_memberDeclaration);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 494;
				this.recordDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 495;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 496;
				this.genericMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 497;
				this.fieldDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 498;
				this.constructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 499;
				this.genericConstructorDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 500;
				this.interfaceDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 501;
				this.annotationTypeDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 502;
				this.classDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 503;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.typeTypeOrVoid();
			this.state = 507;
			this.identifier();
			this.state = 508;
			this.formalParameters();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 509;
				this.match(JavaParser.LBRACK);
				this.state = 510;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 516;
				this.match(JavaParser.THROWS);
				this.state = 517;
				this.qualifiedNameList();
				}
			}

			this.state = 520;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaParser.RULE_methodBody);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.block();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.EXPORTS:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.MODULE:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.SHORT:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this.typeType();
				}
				break;
			case JavaParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 527;
				this.match(JavaParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.typeParameters();
			this.state = 531;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.typeParameters();
			this.state = 534;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.identifier();
			this.state = 537;
			this.formalParameters();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 538;
				this.match(JavaParser.THROWS);
				this.state = 539;
				this.qualifiedNameList();
				}
			}

			this.state = 542;
			_localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		let _localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaParser.RULE_compactConstructorDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 544;
					this.modifier();
					}
					}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 550;
			this.identifier();
			this.state = 551;
			_localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.typeType();
			this.state = 554;
			this.variableDeclarators();
			this.state = 555;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 565;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DEFAULT:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.EXPORTS:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.MODULE:
			case JavaParser.NATIVE:
			case JavaParser.NON_SEALED:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PROVIDES:
			case JavaParser.PUBLIC:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TO:
			case JavaParser.TRANSIENT:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.VOID:
			case JavaParser.VOLATILE:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.LT:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 557;
						this.modifier();
						}
						}
					}
					this.state = 562;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 563;
				this.interfaceMemberDeclaration();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 564;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 567;
				this.recordDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 568;
				this.constDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 569;
				this.interfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 570;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 571;
				this.interfaceDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 572;
				this.annotationTypeDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 573;
				this.classDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 574;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.typeType();
			this.state = 578;
			this.constantDeclarator();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 579;
				this.match(JavaParser.COMMA);
				this.state = 580;
				this.constantDeclarator();
				}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 586;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.identifier();
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 589;
				this.match(JavaParser.LBRACK);
				this.state = 590;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 596;
			this.match(JavaParser.ASSIGN);
			this.state = 597;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 605;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 607;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 609;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 610;
				this.match(JavaParser.DEFAULT);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 611;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 612;
				this.match(JavaParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaParser.RULE_genericInterfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.ABSTRACT || _la === JavaParser.DEFAULT || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (JavaParser.PUBLIC - 42)) | (1 << (JavaParser.STATIC - 42)) | (1 << (JavaParser.STRICTFP - 42)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 615;
				this.interfaceMethodModifier();
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 621;
			this.typeParameters();
			this.state = 622;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		let _localctx: InterfaceCommonBodyDeclarationContext = new InterfaceCommonBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaParser.RULE_interfaceCommonBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 624;
					this.annotation();
					}
					}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 630;
			this.typeTypeOrVoid();
			this.state = 631;
			this.identifier();
			this.state = 632;
			this.formalParameters();
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 633;
				this.match(JavaParser.LBRACK);
				this.state = 634;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 640;
				this.match(JavaParser.THROWS);
				this.state = 641;
				this.qualifiedNameList();
				}
			}

			this.state = 644;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.variableDeclarator();
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 647;
					this.match(JavaParser.COMMA);
					this.state = 648;
					this.variableDeclarator();
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.variableDeclaratorId();
			this.state = 657;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 655;
				this.match(JavaParser.ASSIGN);
				this.state = 656;
				this.variableInitializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaParser.RULE_variableDeclaratorId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.identifier();
			this.state = 664;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 660;
					this.match(JavaParser.LBRACK);
					this.state = 661;
					this.match(JavaParser.RBRACK);
					}
					}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaParser.RULE_variableInitializer);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.arrayInitializer();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.EXPORTS:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.MODULE:
			case JavaParser.NEW:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.SWITCH:
			case JavaParser.THIS:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.VOID:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.TEXT_BLOCK:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(JavaParser.LBRACE);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LBRACE - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 672;
				this.variableInitializer();
				this.state = 677;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 673;
						this.match(JavaParser.COMMA);
						this.state = 674;
						this.variableInitializer();
						}
						}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 680;
					this.match(JavaParser.COMMA);
					}
				}

				}
			}

			this.state = 685;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 695;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						this.state = 687;
						this.packageName();
						this.state = 688;
						this.match(JavaParser.DOT);
						this.state = 692;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === JavaParser.AT) {
							{
							{
							this.state = 689;
							this.annotation();
							}
							}
							this.state = 694;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						break;
					}
					this.state = 697;
					this.typeIdentifier();
					this.state = 699;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						this.state = 698;
						this.typeArguments();
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 705;
					this.match(JavaParser.DOT);
					this.state = 709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.AT) {
						{
						{
						this.state = 706;
						this.annotation();
						}
						}
						this.state = 711;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 712;
					this.typeIdentifier();
					this.state = 714;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						this.state = 713;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageName(): PackageNameContext {
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaParser.RULE_packageName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.identifier();
			this.state = 726;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 722;
					this.match(JavaParser.DOT);
					this.state = 723;
					this.identifier();
					}
					}
				}
				this.state = 728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 729;
				this.typeType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT) {
					{
					{
					this.state = 730;
					this.annotation();
					}
					}
					this.state = 735;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 736;
				this.match(JavaParser.QUESTION);
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
					{
					this.state = 737;
					_la = this._input.LA(1);
					if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 738;
					this.typeType();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.qualifiedName();
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 744;
				this.match(JavaParser.COMMA);
				this.state = 745;
				this.qualifiedName();
				}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(JavaParser.LPAREN);
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.PERMITS - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.SHORT - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.WHEN - 35)) | (1 << (JavaParser.WITH - 35)))) !== 0) || _la === JavaParser.YIELD || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 754;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 752;
					this.receiverParameter();
					}
					break;

				case 2:
					{
					this.state = 753;
					this.formalParameter();
					}
					break;
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 756;
					this.match(JavaParser.COMMA);
					this.state = 757;
					this.formalParameterList();
					}
					}
					this.state = 762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 765;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaParser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.typeType();
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 768;
				this.identifier();
				this.state = 769;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 776;
			this.match(JavaParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.formalParameter();
			this.state = 783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 779;
					this.match(JavaParser.COMMA);
					this.state = 780;
					this.formalParameter();
					}
					}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaParser.RULE_formalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 786;
					this.variableModifier();
					}
					}
				}
				this.state = 791;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 792;
			this.typeType();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.AT || _la === JavaParser.ELLIPSIS) {
				{
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT) {
					{
					{
					this.state = 793;
					this.annotation();
					}
					}
					this.state = 798;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 799;
				this.match(JavaParser.ELLIPSIS);
				}
			}

			this.state = 802;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIList(): LambdaLVTIListContext {
		let _localctx: LambdaLVTIListContext = new LambdaLVTIListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaParser.RULE_lambdaLVTIList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.lambdaLVTIParameter();
			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 805;
				this.match(JavaParser.COMMA);
				this.state = 806;
				this.lambdaLVTIParameter();
				}
				}
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIParameter(): LambdaLVTIParameterContext {
		let _localctx: LambdaLVTIParameterContext = new LambdaLVTIParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaParser.RULE_lambdaLVTIParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
				{
				{
				this.state = 812;
				this.variableModifier();
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 818;
			this.match(JavaParser.VAR);
			this.state = 819;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.identifier();
			this.state = 826;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 822;
					this.match(JavaParser.DOT);
					this.state = 823;
					this.identifier();
					}
					}
				}
				this.state = 828;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaParser.RULE_literal);
		try {
			this.state = 836;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 829;
				this.integerLiteral();
				}
				break;
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 830;
				this.floatLiteral();
				}
				break;
			case JavaParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 831;
				this.match(JavaParser.CHAR_LITERAL);
				}
				break;
			case JavaParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 832;
				this.match(JavaParser.STRING_LITERAL);
				}
				break;
			case JavaParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 833;
				this.match(JavaParser.BOOL_LITERAL);
				}
				break;
			case JavaParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 834;
				this.match(JavaParser.NULL_LITERAL);
				}
				break;
			case JavaParser.TEXT_BLOCK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 835;
				this.match(JavaParser.TEXT_BLOCK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (JavaParser.DECIMAL_LITERAL - 68)) | (1 << (JavaParser.HEX_LITERAL - 68)) | (1 << (JavaParser.OCT_LITERAL - 68)) | (1 << (JavaParser.BINARY_LITERAL - 68)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			_la = this._input.LA(1);
			if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		let _localctx: AltAnnotationQualifiedNameContext = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 842;
				this.identifier();
				this.state = 843;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 850;
			this.match(JavaParser.AT);
			this.state = 851;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 853;
			this.match(JavaParser.AT);
			this.state = 854;
			this.qualifiedName();
			}
			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 856;
				this.annotationFieldValues();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationFieldValues(): AnnotationFieldValuesContext {
		let _localctx: AnnotationFieldValuesContext = new AnnotationFieldValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaParser.RULE_annotationFieldValues);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.match(JavaParser.LPAREN);
			this.state = 868;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.annotationFieldValue();
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 861;
					this.match(JavaParser.COMMA);
					this.state = 862;
					this.annotationFieldValue();
					}
					}
					this.state = 867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 870;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationFieldValue(): AnnotationFieldValueContext {
		let _localctx: AnnotationFieldValueContext = new AnnotationFieldValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaParser.RULE_annotationFieldValue);
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				if (!( this.IsNotIdentifierAssign() )) {
					throw this.createFailedPredicateException(" this.IsNotIdentifierAssign() ");
				}
				this.state = 873;
				this.annotationValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 874;
				this.identifier();
				this.state = 875;
				this.match(JavaParser.ASSIGN);
				this.state = 876;
				this.annotationValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationValue(): AnnotationValueContext {
		let _localctx: AnnotationValueContext = new AnnotationValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaParser.RULE_annotationValue);
		let _la: number;
		try {
			let _alt: number;
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 880;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 881;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 882;
				this.match(JavaParser.LBRACE);
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LBRACE - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 883;
					this.annotationValue();
					this.state = 888;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 884;
							this.match(JavaParser.COMMA);
							this.state = 885;
							this.annotationValue();
							}
							}
						}
						this.state = 890;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
					}
					}
				}

				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 893;
					this.match(JavaParser.COMMA);
					}
				}

				this.state = 896;
				this.match(JavaParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaParser.RULE_elementValue);
		try {
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 899;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 901;
				this.elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this.match(JavaParser.LBRACE);
			this.state = 913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LBRACE - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 905;
				this.elementValue();
				this.state = 910;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 906;
						this.match(JavaParser.COMMA);
						this.state = 907;
						this.elementValue();
						}
						}
					}
					this.state = 912;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				}
				}
			}

			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 915;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 918;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(JavaParser.AT);
			this.state = 921;
			this.match(JavaParser.INTERFACE);
			this.state = 922;
			this.identifier();
			this.state = 923;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.match(JavaParser.LBRACE);
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.NATIVE - 32)) | (1 << (JavaParser.NON_SEALED - 32)) | (1 << (JavaParser.OPEN - 32)) | (1 << (JavaParser.OPENS - 32)) | (1 << (JavaParser.PERMITS - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PROVIDES - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RECORD - 32)) | (1 << (JavaParser.REQUIRES - 32)) | (1 << (JavaParser.SEALED - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.TO - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRANSITIVE - 32)) | (1 << (JavaParser.USES - 32)) | (1 << (JavaParser.VAR - 32)) | (1 << (JavaParser.VOLATILE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaParser.WHEN - 64)) | (1 << (JavaParser.WITH - 64)) | (1 << (JavaParser.YIELD - 64)) | (1 << (JavaParser.SEMI - 64)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 926;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 932;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 942;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.EXPORTS:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.MODULE:
			case JavaParser.NATIVE:
			case JavaParser.NON_SEALED:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PROVIDES:
			case JavaParser.PUBLIC:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TO:
			case JavaParser.TRANSIENT:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.VOLATILE:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 937;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 934;
						this.modifier();
						}
						}
					}
					this.state = 939;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 940;
				this.annotationTypeElementRest();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 968;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 944;
				this.typeType();
				this.state = 945;
				this.annotationMethodOrConstantRest();
				this.state = 946;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 948;
				this.classDeclaration();
				this.state = 950;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 949;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 952;
				this.interfaceDeclaration();
				this.state = 954;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 953;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 956;
				this.enumDeclaration();
				this.state = 958;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 957;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 960;
				this.annotationTypeDeclaration();
				this.state = 962;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 961;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 964;
				this.recordDeclaration();
				this.state = 966;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 965;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 972;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 970;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 971;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 974;
			this.identifier();
			this.state = 975;
			this.match(JavaParser.LPAREN);
			this.state = 976;
			this.match(JavaParser.RPAREN);
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DEFAULT) {
				{
				this.state = 977;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this.match(JavaParser.DEFAULT);
			this.state = 983;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaParser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT) {
				{
				{
				this.state = 985;
				this.annotation();
				}
				}
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.OPEN) {
				{
				this.state = 991;
				this.match(JavaParser.OPEN);
				}
			}

			this.state = 994;
			this.match(JavaParser.MODULE);
			this.state = 995;
			this.qualifiedName();
			this.state = 996;
			this.match(JavaParser.LBRACE);
			this.state = 1000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.EXPORTS || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (JavaParser.OPENS - 36)) | (1 << (JavaParser.PROVIDES - 36)) | (1 << (JavaParser.REQUIRES - 36)) | (1 << (JavaParser.USES - 36)))) !== 0)) {
				{
				{
				this.state = 997;
				this.moduleDirective();
				}
				}
				this.state = 1002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1003;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let _localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaParser.RULE_moduleDirective);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1062;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.REQUIRES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1005;
				this.match(JavaParser.REQUIRES);
				this.state = 1009;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1006;
						this.requiresModifier();
						}
						}
					}
					this.state = 1011;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 1012;
				this.qualifiedName();
				this.state = 1013;
				this.match(JavaParser.SEMI);
				}
				break;
			case JavaParser.EXPORTS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1015;
				this.match(JavaParser.EXPORTS);
				this.state = 1016;
				this.qualifiedName();
				this.state = 1026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.TO) {
					{
					this.state = 1017;
					this.match(JavaParser.TO);
					this.state = 1018;
					this.qualifiedName();
					this.state = 1023;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.COMMA) {
						{
						{
						this.state = 1019;
						this.match(JavaParser.COMMA);
						this.state = 1020;
						this.qualifiedName();
						}
						}
						this.state = 1025;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1028;
				this.match(JavaParser.SEMI);
				}
				break;
			case JavaParser.OPENS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1030;
				this.match(JavaParser.OPENS);
				this.state = 1031;
				this.qualifiedName();
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.TO) {
					{
					this.state = 1032;
					this.match(JavaParser.TO);
					this.state = 1033;
					this.qualifiedName();
					this.state = 1038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.COMMA) {
						{
						{
						this.state = 1034;
						this.match(JavaParser.COMMA);
						this.state = 1035;
						this.qualifiedName();
						}
						}
						this.state = 1040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1043;
				this.match(JavaParser.SEMI);
				}
				break;
			case JavaParser.USES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1045;
				this.match(JavaParser.USES);
				this.state = 1046;
				this.qualifiedName();
				this.state = 1047;
				this.match(JavaParser.SEMI);
				}
				break;
			case JavaParser.PROVIDES:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1049;
				this.match(JavaParser.PROVIDES);
				this.state = 1050;
				this.qualifiedName();
				this.state = 1051;
				this.match(JavaParser.WITH);
				this.state = 1052;
				this.qualifiedName();
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 1053;
					this.match(JavaParser.COMMA);
					this.state = 1054;
					this.qualifiedName();
					}
					}
					this.state = 1059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1060;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let _localctx: RequiresModifierContext = new RequiresModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaParser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			_la = this._input.LA(1);
			if (!(_la === JavaParser.STATIC || _la === JavaParser.TRANSITIVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let _localctx: RecordDeclarationContext = new RecordDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaParser.RULE_recordDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this.match(JavaParser.RECORD);
			this.state = 1067;
			this.identifier();
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1068;
				this.typeParameters();
				}
			}

			this.state = 1071;
			this.recordHeader();
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 1072;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 1073;
				this.typeList();
				}
			}

			this.state = 1076;
			this.recordBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordHeader(): RecordHeaderContext {
		let _localctx: RecordHeaderContext = new RecordHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaParser.RULE_recordHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.match(JavaParser.LPAREN);
			this.state = 1080;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.PERMITS - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.SHORT - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.WHEN - 35)) | (1 << (JavaParser.WITH - 35)))) !== 0) || _la === JavaParser.YIELD || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 1079;
				this.recordComponentList();
				}
			}

			this.state = 1082;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponentList(): RecordComponentListContext {
		let _localctx: RecordComponentListContext = new RecordComponentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaParser.RULE_recordComponentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1084;
			this.recordComponent();
			this.state = 1089;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1085;
					this.match(JavaParser.COMMA);
					this.state = 1086;
					this.recordComponent();
					}
					}
				}
				this.state = 1091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			this.state = 1092;
			if (!( this.DoLastRecordComponent() )) {
				throw this.createFailedPredicateException(" this.DoLastRecordComponent() ");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponent(): RecordComponentContext {
		let _localctx: RecordComponentContext = new RecordComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JavaParser.RULE_recordComponent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1094;
					this.annotation();
					}
					}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			}
			this.state = 1100;
			this.typeType();
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.AT || _la === JavaParser.ELLIPSIS) {
				{
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT) {
					{
					{
					this.state = 1101;
					this.annotation();
					}
					}
					this.state = 1106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1107;
				this.match(JavaParser.ELLIPSIS);
				}
			}

			this.state = 1110;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordBody(): RecordBodyContext {
		let _localctx: RecordBodyContext = new RecordBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JavaParser.RULE_recordBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.match(JavaParser.LBRACE);
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.NATIVE - 32)) | (1 << (JavaParser.NON_SEALED - 32)) | (1 << (JavaParser.OPEN - 32)) | (1 << (JavaParser.OPENS - 32)) | (1 << (JavaParser.PERMITS - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PROVIDES - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RECORD - 32)) | (1 << (JavaParser.REQUIRES - 32)) | (1 << (JavaParser.SEALED - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.TO - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRANSITIVE - 32)) | (1 << (JavaParser.USES - 32)) | (1 << (JavaParser.VAR - 32)) | (1 << (JavaParser.VOID - 32)) | (1 << (JavaParser.VOLATILE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JavaParser.WHEN - 64)) | (1 << (JavaParser.WITH - 64)) | (1 << (JavaParser.YIELD - 64)) | (1 << (JavaParser.LBRACE - 64)) | (1 << (JavaParser.SEMI - 64)) | (1 << (JavaParser.LT - 64)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 1115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1113;
					this.classBodyDeclaration();
					}
					break;

				case 2:
					{
					this.state = 1114;
					this.compactConstructorDeclaration();
					}
					break;
				}
				}
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1120;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.match(JavaParser.LBRACE);
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.NON_SEALED - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.WHILE - 65)) | (1 << (JavaParser.WITH - 65)) | (1 << (JavaParser.YIELD - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				{
				this.state = 1123;
				this.blockStatement();
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1129;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JavaParser.RULE_blockStatement);
		try {
			this.state = 1136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1131;
				this.localVariableDeclaration();
				this.state = 1132;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1134;
				this.localTypeDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1135;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, JavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1138;
					this.variableModifier();
					}
					}
				}
				this.state = 1143;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			this.state = 1152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1144;
				this.match(JavaParser.VAR);
				this.state = 1145;
				this.identifier();
				this.state = 1146;
				this.match(JavaParser.ASSIGN);
				this.state = 1147;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 1149;
				this.typeType();
				this.state = 1150;
				this.variableDeclarators();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JavaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JavaParser.RULE_typeIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			_la = this._input.LA(1);
			if (!(_la === JavaParser.EXPORTS || _la === JavaParser.MODULE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.WITH - 35)))) !== 0) || _la === JavaParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JavaParser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JavaParser.NON_SEALED - 34)) | (1 << (JavaParser.PRIVATE - 34)) | (1 << (JavaParser.PROTECTED - 34)) | (1 << (JavaParser.PUBLIC - 34)) | (1 << (JavaParser.SEALED - 34)) | (1 << (JavaParser.STATIC - 34)) | (1 << (JavaParser.STRICTFP - 34)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 1158;
				this.classOrInterfaceModifier();
				}
				}
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CLASS:
				{
				this.state = 1164;
				this.classDeclaration();
				}
				break;
			case JavaParser.INTERFACE:
				{
				this.state = 1165;
				this.interfaceDeclaration();
				}
				break;
			case JavaParser.RECORD:
				{
				this.state = 1166;
				this.recordDeclaration();
				}
				break;
			case JavaParser.ENUM:
				{
				this.state = 1167;
				this.enumDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1170;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1171;
				this.match(JavaParser.ASSERT);
				this.state = 1172;
				this.expression(0);
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COLON) {
					{
					this.state = 1173;
					this.match(JavaParser.COLON);
					this.state = 1174;
					this.expression(0);
					}
				}

				this.state = 1177;
				this.match(JavaParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1179;
				this.match(JavaParser.IF);
				this.state = 1180;
				this.match(JavaParser.LPAREN);
				this.state = 1181;
				this.expression(0);
				this.state = 1182;
				this.match(JavaParser.RPAREN);
				this.state = 1183;
				this.statement();
				this.state = 1186;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1184;
					this.match(JavaParser.ELSE);
					this.state = 1185;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1188;
				this.match(JavaParser.FOR);
				this.state = 1189;
				this.match(JavaParser.LPAREN);
				this.state = 1190;
				this.forControl();
				this.state = 1191;
				this.match(JavaParser.RPAREN);
				this.state = 1192;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1194;
				this.match(JavaParser.WHILE);
				this.state = 1195;
				this.match(JavaParser.LPAREN);
				this.state = 1196;
				this.expression(0);
				this.state = 1197;
				this.match(JavaParser.RPAREN);
				this.state = 1198;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1200;
				this.match(JavaParser.DO);
				this.state = 1201;
				this.statement();
				this.state = 1202;
				this.match(JavaParser.WHILE);
				this.state = 1203;
				this.match(JavaParser.LPAREN);
				this.state = 1204;
				this.expression(0);
				this.state = 1205;
				this.match(JavaParser.RPAREN);
				this.state = 1206;
				this.match(JavaParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1208;
				this.match(JavaParser.TRY);
				this.state = 1209;
				this.block();
				this.state = 1219;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CATCH:
					{
					this.state = 1211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1210;
						this.catchClause();
						}
						}
						this.state = 1213;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaParser.CATCH);
					this.state = 1216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.FINALLY) {
						{
						this.state = 1215;
						this.finallyBlock();
						}
					}

					}
					break;
				case JavaParser.FINALLY:
					{
					this.state = 1218;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1221;
				this.match(JavaParser.TRY);
				this.state = 1222;
				this.resourceSpecification();
				this.state = 1223;
				this.block();
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CATCH) {
					{
					{
					this.state = 1224;
					this.catchClause();
					}
					}
					this.state = 1229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.FINALLY) {
					{
					this.state = 1230;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1233;
				this.match(JavaParser.SWITCH);
				this.state = 1234;
				this.match(JavaParser.LPAREN);
				this.state = 1235;
				this.expression(0);
				this.state = 1236;
				this.match(JavaParser.RPAREN);
				this.state = 1237;
				this.match(JavaParser.LBRACE);
				this.state = 1241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1238;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 1243;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				}
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
					{
					{
					this.state = 1244;
					this.switchLabel();
					}
					}
					this.state = 1249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1250;
				this.match(JavaParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1252;
				this.match(JavaParser.SYNCHRONIZED);
				this.state = 1253;
				this.match(JavaParser.LPAREN);
				this.state = 1254;
				this.expression(0);
				this.state = 1255;
				this.match(JavaParser.RPAREN);
				this.state = 1256;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1258;
				this.match(JavaParser.RETURN);
				this.state = 1260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1259;
					this.expression(0);
					}
				}

				this.state = 1262;
				this.match(JavaParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1263;
				this.match(JavaParser.THROW);
				this.state = 1264;
				this.expression(0);
				this.state = 1265;
				this.match(JavaParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1267;
				this.match(JavaParser.BREAK);
				this.state = 1269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1268;
					this.identifier();
					}
				}

				this.state = 1271;
				this.match(JavaParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1272;
				this.match(JavaParser.CONTINUE);
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (JavaParser.EXPORTS - 17)) | (1 << (JavaParser.MODULE - 17)) | (1 << (JavaParser.OPEN - 17)) | (1 << (JavaParser.OPENS - 17)) | (1 << (JavaParser.PERMITS - 17)) | (1 << (JavaParser.PROVIDES - 17)) | (1 << (JavaParser.RECORD - 17)) | (1 << (JavaParser.REQUIRES - 17)) | (1 << (JavaParser.SEALED - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (JavaParser.TO - 56)) | (1 << (JavaParser.TRANSITIVE - 56)) | (1 << (JavaParser.USES - 56)) | (1 << (JavaParser.VAR - 56)) | (1 << (JavaParser.WHEN - 56)) | (1 << (JavaParser.WITH - 56)) | (1 << (JavaParser.YIELD - 56)))) !== 0) || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1273;
					this.identifier();
					}
				}

				this.state = 1276;
				this.match(JavaParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1277;
				this.match(JavaParser.YIELD);
				this.state = 1278;
				this.expression(0);
				this.state = 1279;
				this.match(JavaParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1281;
				this.match(JavaParser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1282;
				_localctx._statementExpression = this.expression(0);
				this.state = 1283;
				this.match(JavaParser.SEMI);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1285;
				this.switchExpression();
				this.state = 1287;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
				case 1:
					{
					this.state = 1286;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1289;
				_localctx._identifierLabel = this.identifier();
				this.state = 1290;
				this.match(JavaParser.COLON);
				this.state = 1291;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, JavaParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
			this.match(JavaParser.CATCH);
			this.state = 1296;
			this.match(JavaParser.LPAREN);
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
				{
				{
				this.state = 1297;
				this.variableModifier();
				}
				}
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1303;
			this.catchType();
			this.state = 1304;
			this.identifier();
			this.state = 1305;
			this.match(JavaParser.RPAREN);
			this.state = 1306;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			this.qualifiedName();
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITOR) {
				{
				{
				this.state = 1309;
				this.match(JavaParser.BITOR);
				this.state = 1310;
				this.qualifiedName();
				}
				}
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, JavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1316;
			this.match(JavaParser.FINALLY);
			this.state = 1317;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, JavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.match(JavaParser.LPAREN);
			this.state = 1320;
			this.resources();
			this.state = 1322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 1321;
				this.match(JavaParser.SEMI);
				}
			}

			this.state = 1324;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, JavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.resource();
			this.state = 1331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1327;
					this.match(JavaParser.SEMI);
					this.state = 1328;
					this.resource();
					}
					}
				}
				this.state = 1333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, JavaParser.RULE_resource);
		let _la: number;
		try {
			this.state = 1351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
					{
					{
					this.state = 1334;
					this.variableModifier();
					}
					}
					this.state = 1339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1345;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1340;
					this.classOrInterfaceType();
					this.state = 1341;
					this.variableDeclaratorId();
					}
					break;

				case 2:
					{
					this.state = 1343;
					this.match(JavaParser.VAR);
					this.state = 1344;
					this.identifier();
					}
					break;
				}
				this.state = 1347;
				this.match(JavaParser.ASSIGN);
				this.state = 1348;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1350;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1353;
				this.switchLabel();
				this.state = 1354;
				this.match(JavaParser.COLON);
				}
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1360;
				this.blockStatement();
				}
				}
				this.state = 1363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.NON_SEALED - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.WHILE - 65)) | (1 << (JavaParser.WITH - 65)) | (1 << (JavaParser.YIELD - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JavaParser.RULE_switchLabel);
		try {
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1365;
				this.match(JavaParser.CASE);
				this.state = 1371;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
				case 1:
					{
					this.state = 1366;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 1367;
					_localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
					}
					break;

				case 3:
					{
					this.state = 1368;
					this.typeType();
					this.state = 1369;
					_localctx._varName = this.identifier();
					}
					break;
				}
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1373;
				this.match(JavaParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1376;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1377;
					this.forInit();
					}
				}

				this.state = 1380;
				this.match(JavaParser.SEMI);
				this.state = 1382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1381;
					this.expression(0);
					}
				}

				this.state = 1384;
				this.match(JavaParser.SEMI);
				this.state = 1386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1385;
					_localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, JavaParser.RULE_forInit);
		try {
			this.state = 1392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1390;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1391;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, JavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1394;
					this.variableModifier();
					}
					}
				}
				this.state = 1399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			}
			this.state = 1402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1400;
				this.typeType();
				}
				break;

			case 2:
				{
				this.state = 1401;
				this.match(JavaParser.VAR);
				}
				break;
			}
			this.state = 1404;
			this.variableDeclaratorId();
			this.state = 1405;
			this.match(JavaParser.COLON);
			this.state = 1406;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.expression(0);
			this.state = 1413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1409;
				this.match(JavaParser.COMMA);
				this.state = 1410;
				this.expression(0);
				}
				}
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, JavaParser.RULE_methodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.EXPORTS:
			case JavaParser.MODULE:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.IDENTIFIER:
				{
				this.state = 1416;
				this.identifier();
				}
				break;
			case JavaParser.THIS:
				{
				this.state = 1417;
				this.match(JavaParser.THIS);
				}
				break;
			case JavaParser.SUPER:
				{
				this.state = 1418;
				this.match(JavaParser.SUPER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1421;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 198;
		this.enterRecursionRule(_localctx, 198, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1424;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1425;
				this.methodCall();
				}
				break;

			case 3:
				{
				_localctx = new MethodReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1426;
				this.typeType();
				this.state = 1427;
				this.match(JavaParser.COLONCOLON);
				this.state = 1433;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.EXPORTS:
				case JavaParser.MODULE:
				case JavaParser.OPEN:
				case JavaParser.OPENS:
				case JavaParser.PERMITS:
				case JavaParser.PROVIDES:
				case JavaParser.RECORD:
				case JavaParser.REQUIRES:
				case JavaParser.SEALED:
				case JavaParser.TO:
				case JavaParser.TRANSITIVE:
				case JavaParser.USES:
				case JavaParser.VAR:
				case JavaParser.WHEN:
				case JavaParser.WITH:
				case JavaParser.YIELD:
				case JavaParser.LT:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1428;
						this.typeArguments();
						}
					}

					this.state = 1431;
					this.identifier();
					}
					break;
				case JavaParser.NEW:
					{
					this.state = 1432;
					this.match(JavaParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				{
				_localctx = new MethodReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1435;
				this.classType();
				this.state = 1436;
				this.match(JavaParser.COLONCOLON);
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1437;
					this.typeArguments();
					}
				}

				this.state = 1440;
				this.match(JavaParser.NEW);
				}
				break;

			case 5:
				{
				_localctx = new ExpressionSwitchContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1442;
				this.switchExpression();
				}
				break;

			case 6:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1443;
				(_localctx as UnaryOperatorExpressionContext)._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaParser.BANG - 91)) | (1 << (JavaParser.TILDE - 91)) | (1 << (JavaParser.INC - 91)) | (1 << (JavaParser.DEC - 91)) | (1 << (JavaParser.ADD - 91)) | (1 << (JavaParser.SUB - 91)))) !== 0))) {
					(_localctx as UnaryOperatorExpressionContext)._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1444;
				this.expression(17);
				}
				break;

			case 7:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1445;
				this.match(JavaParser.LPAREN);
				this.state = 1449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1446;
						this.annotation();
						}
						}
					}
					this.state = 1451;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				}
				this.state = 1452;
				this.typeType();
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.BITAND) {
					{
					{
					this.state = 1453;
					this.match(JavaParser.BITAND);
					this.state = 1454;
					this.typeType();
					}
					}
					this.state = 1459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1460;
				this.match(JavaParser.RPAREN);
				this.state = 1461;
				this.expression(16);
				}
				break;

			case 8:
				{
				_localctx = new ObjectCreationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1463;
				this.match(JavaParser.NEW);
				this.state = 1464;
				this.creator();
				}
				break;

			case 9:
				{
				_localctx = new ExpressionLambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1465;
				this.lambdaExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1551;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1549;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1468;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1469;
						(_localctx as BinaryOperatorExpressionContext)._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (JavaParser.MUL - 105)) | (1 << (JavaParser.DIV - 105)) | (1 << (JavaParser.MOD - 105)))) !== 0))) {
							(_localctx as BinaryOperatorExpressionContext)._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1470;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1471;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1472;
						(_localctx as BinaryOperatorExpressionContext)._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
							(_localctx as BinaryOperatorExpressionContext)._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1473;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1474;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1482;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
						case 1:
							{
							this.state = 1475;
							this.match(JavaParser.LT);
							this.state = 1476;
							this.match(JavaParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1477;
							this.match(JavaParser.GT);
							this.state = 1478;
							this.match(JavaParser.GT);
							this.state = 1479;
							this.match(JavaParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1480;
							this.match(JavaParser.GT);
							this.state = 1481;
							this.match(JavaParser.GT);
							}
							break;
						}
						this.state = 1484;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1485;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1486;
						(_localctx as BinaryOperatorExpressionContext)._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (JavaParser.GT - 89)) | (1 << (JavaParser.LT - 89)) | (1 << (JavaParser.LE - 89)) | (1 << (JavaParser.GE - 89)))) !== 0))) {
							(_localctx as BinaryOperatorExpressionContext)._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1487;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1488;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1489;
						(_localctx as BinaryOperatorExpressionContext)._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
							(_localctx as BinaryOperatorExpressionContext)._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1490;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1491;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1492;
						(_localctx as BinaryOperatorExpressionContext)._bop = this.match(JavaParser.BITAND);
						this.state = 1493;
						this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1494;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1495;
						(_localctx as BinaryOperatorExpressionContext)._bop = this.match(JavaParser.CARET);
						this.state = 1496;
						this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1497;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1498;
						(_localctx as BinaryOperatorExpressionContext)._bop = this.match(JavaParser.BITOR);
						this.state = 1499;
						this.expression(7);
						}
						break;

					case 9:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1500;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1501;
						(_localctx as BinaryOperatorExpressionContext)._bop = this.match(JavaParser.AND);
						this.state = 1502;
						this.expression(6);
						}
						break;

					case 10:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1503;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1504;
						(_localctx as BinaryOperatorExpressionContext)._bop = this.match(JavaParser.OR);
						this.state = 1505;
						this.expression(5);
						}
						break;

					case 11:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1506;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1507;
						(_localctx as TernaryExpressionContext)._bop = this.match(JavaParser.QUESTION);
						this.state = 1508;
						this.expression(0);
						this.state = 1509;
						this.match(JavaParser.COLON);
						this.state = 1510;
						this.expression(3);
						}
						break;

					case 12:
						{
						_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1512;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1513;
						(_localctx as BinaryOperatorExpressionContext)._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (JavaParser.ASSIGN - 88)) | (1 << (JavaParser.ADD_ASSIGN - 88)) | (1 << (JavaParser.SUB_ASSIGN - 88)) | (1 << (JavaParser.MUL_ASSIGN - 88)) | (1 << (JavaParser.DIV_ASSIGN - 88)) | (1 << (JavaParser.AND_ASSIGN - 88)) | (1 << (JavaParser.OR_ASSIGN - 88)) | (1 << (JavaParser.XOR_ASSIGN - 88)) | (1 << (JavaParser.MOD_ASSIGN - 88)) | (1 << (JavaParser.LSHIFT_ASSIGN - 88)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN)) {
							(_localctx as BinaryOperatorExpressionContext)._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1514;
						this.expression(2);
						}
						break;

					case 13:
						{
						_localctx = new SquareBracketExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1515;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1516;
						this.match(JavaParser.LBRACK);
						this.state = 1517;
						this.expression(0);
						this.state = 1518;
						this.match(JavaParser.RBRACK);
						}
						break;

					case 14:
						{
						_localctx = new MemberReferenceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1520;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1521;
						(_localctx as MemberReferenceExpressionContext)._bop = this.match(JavaParser.DOT);
						this.state = 1533;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
						case 1:
							{
							this.state = 1522;
							this.identifier();
							}
							break;

						case 2:
							{
							this.state = 1523;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1524;
							this.match(JavaParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1525;
							this.match(JavaParser.NEW);
							this.state = 1527;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === JavaParser.LT) {
								{
								this.state = 1526;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1529;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1530;
							this.match(JavaParser.SUPER);
							this.state = 1531;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1532;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;

					case 15:
						{
						_localctx = new MethodReferenceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1535;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1536;
						this.match(JavaParser.COLONCOLON);
						this.state = 1538;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaParser.LT) {
							{
							this.state = 1537;
							this.typeArguments();
							}
						}

						this.state = 1540;
						this.identifier();
						}
						break;

					case 16:
						{
						_localctx = new PostIncrementDecrementOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1541;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1542;
						(_localctx as PostIncrementDecrementOperatorExpressionContext)._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
							(_localctx as PostIncrementDecrementOperatorExpressionContext)._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 17:
						{
						_localctx = new InstanceOfOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1543;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1544;
						(_localctx as InstanceOfOperatorExpressionContext)._bop = this.match(JavaParser.INSTANCEOF);
						this.state = 1547;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
						case 1:
							{
							this.state = 1545;
							this.typeType();
							}
							break;

						case 2:
							{
							this.state = 1546;
							this.pattern();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, JavaParser.RULE_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1554;
						this.variableModifier();
						}
						}
					}
					this.state = 1559;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				}
				this.state = 1560;
				this.typeType();
				this.state = 1564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT) {
					{
					{
					this.state = 1561;
					this.annotation();
					}
					}
					this.state = 1566;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1567;
				this.variableDeclarators();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1569;
				this.typeType();
				this.state = 1570;
				this.match(JavaParser.LPAREN);
				this.state = 1572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.PERMITS - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.SHORT - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.WHEN - 35)) | (1 << (JavaParser.WITH - 35)))) !== 0) || _la === JavaParser.YIELD || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1571;
					this.componentPatternList();
					}
				}

				this.state = 1574;
				this.match(JavaParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPatternList(): ComponentPatternListContext {
		let _localctx: ComponentPatternListContext = new ComponentPatternListContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JavaParser.RULE_componentPatternList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1578;
			this.componentPattern();
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1579;
				this.match(JavaParser.COMMA);
				this.state = 1580;
				this.componentPattern();
				}
				}
				this.state = 1585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPattern(): ComponentPatternContext {
		let _localctx: ComponentPatternContext = new ComponentPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, JavaParser.RULE_componentPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1586;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, JavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1588;
			this.lambdaParameters();
			this.state = 1589;
			this.match(JavaParser.ARROW);
			this.state = 1590;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, JavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1592;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1593;
				this.match(JavaParser.LPAREN);
				this.state = 1595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.PERMITS - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.SHORT - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.WHEN - 35)) | (1 << (JavaParser.WITH - 35)))) !== 0) || _la === JavaParser.YIELD || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1594;
					this.formalParameterList();
					}
				}

				this.state = 1597;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1598;
				this.match(JavaParser.LPAREN);
				this.state = 1599;
				this.identifier();
				this.state = 1604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 1600;
					this.match(JavaParser.COMMA);
					this.state = 1601;
					this.identifier();
					}
					}
					this.state = 1606;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1607;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1609;
				this.match(JavaParser.LPAREN);
				this.state = 1611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.FINAL || _la === JavaParser.VAR || _la === JavaParser.AT) {
					{
					this.state = 1610;
					this.lambdaLVTIList();
					}
				}

				this.state = 1613;
				this.match(JavaParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, JavaParser.RULE_lambdaBody);
		try {
			this.state = 1618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.EXPORTS:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.MODULE:
			case JavaParser.NEW:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.SWITCH:
			case JavaParser.THIS:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.VOID:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.TEXT_BLOCK:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1616;
				this.expression(0);
				}
				break;
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1617;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, JavaParser.RULE_primary);
		try {
			this.state = 1638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1620;
				this.match(JavaParser.LPAREN);
				this.state = 1621;
				this.expression(0);
				this.state = 1622;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1624;
				this.match(JavaParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1625;
				this.match(JavaParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1626;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1627;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1628;
				this.typeTypeOrVoid();
				this.state = 1629;
				this.match(JavaParser.DOT);
				this.state = 1630;
				this.match(JavaParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1632;
				this.nonWildcardTypeArguments();
				this.state = 1636;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.EXPORTS:
				case JavaParser.MODULE:
				case JavaParser.OPEN:
				case JavaParser.OPENS:
				case JavaParser.PERMITS:
				case JavaParser.PROVIDES:
				case JavaParser.RECORD:
				case JavaParser.REQUIRES:
				case JavaParser.SEALED:
				case JavaParser.SUPER:
				case JavaParser.TO:
				case JavaParser.TRANSITIVE:
				case JavaParser.USES:
				case JavaParser.VAR:
				case JavaParser.WHEN:
				case JavaParser.WITH:
				case JavaParser.YIELD:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1633;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case JavaParser.THIS:
					{
					this.state = 1634;
					this.match(JavaParser.THIS);
					this.state = 1635;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let _localctx: SwitchExpressionContext = new SwitchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, JavaParser.RULE_switchExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1640;
			this.match(JavaParser.SWITCH);
			this.state = 1641;
			this.match(JavaParser.LPAREN);
			this.state = 1642;
			this.expression(0);
			this.state = 1643;
			this.match(JavaParser.RPAREN);
			this.state = 1644;
			this.match(JavaParser.LBRACE);
			this.state = 1648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
				{
				{
				this.state = 1645;
				this.switchLabeledRule();
				}
				}
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1651;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabeledRule(): SwitchLabeledRuleContext {
		let _localctx: SwitchLabeledRuleContext = new SwitchLabeledRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, JavaParser.RULE_switchLabeledRule);
		let _la: number;
		try {
			this.state = 1678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1653;
				this.match(JavaParser.CASE);
				this.state = 1671;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1654;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 1655;
					this.match(JavaParser.NULL_LITERAL);
					this.state = 1658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.COMMA) {
						{
						this.state = 1656;
						this.match(JavaParser.COMMA);
						this.state = 1657;
						this.match(JavaParser.DEFAULT);
						}
					}

					}
					break;

				case 3:
					{
					this.state = 1660;
					this.casePattern();
					this.state = 1665;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.COMMA) {
						{
						{
						this.state = 1661;
						this.match(JavaParser.COMMA);
						this.state = 1662;
						this.casePattern();
						}
						}
						this.state = 1667;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1669;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.WHEN) {
						{
						this.state = 1668;
						this.guard();
						}
					}

					}
					break;
				}
				this.state = 1673;
				_la = this._input.LA(1);
				if (!(_la === JavaParser.COLON || _la === JavaParser.ARROW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1674;
				this.switchRuleOutcome();
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.match(JavaParser.DEFAULT);
				this.state = 1676;
				_la = this._input.LA(1);
				if (!(_la === JavaParser.COLON || _la === JavaParser.ARROW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1677;
				this.switchRuleOutcome();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public guard(): GuardContext {
		let _localctx: GuardContext = new GuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, JavaParser.RULE_guard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
			this.match(JavaParser.WHEN);
			this.state = 1681;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public casePattern(): CasePatternContext {
		let _localctx: CasePatternContext = new CasePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, JavaParser.RULE_casePattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1683;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		let _localctx: SwitchRuleOutcomeContext = new SwitchRuleOutcomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, JavaParser.RULE_switchRuleOutcome);
		let _la: number;
		try {
			this.state = 1692;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1685;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.NON_SEALED - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.WHILE - 65)) | (1 << (JavaParser.WITH - 65)) | (1 << (JavaParser.YIELD - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					{
					this.state = 1686;
					this.blockStatement();
					}
					}
					this.state = 1691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, JavaParser.RULE_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1694;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, JavaParser.RULE_creator);
		let _la: number;
		try {
			this.state = 1705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1696;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 1699;
				this.createdName();
				this.state = 1700;
				this.classCreatorRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1702;
				this.createdName();
				this.state = 1703;
				this.arrayCreatorRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, JavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1722;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.EXPORTS:
			case JavaParser.MODULE:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1707;
				this.identifier();
				this.state = 1709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1708;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.DOT) {
					{
					{
					this.state = 1711;
					this.match(JavaParser.DOT);
					this.state = 1712;
					this.identifier();
					this.state = 1714;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1713;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1720;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1721;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1724;
			this.identifier();
			this.state = 1726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1725;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1728;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1730;
					this.match(JavaParser.LBRACK);
					this.state = 1731;
					this.match(JavaParser.RBRACK);
					}
					}
					this.state = 1734;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === JavaParser.LBRACK);
				this.state = 1736;
				this.arrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1741;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1737;
						this.match(JavaParser.LBRACK);
						this.state = 1738;
						this.expression(0);
						this.state = 1739;
						this.match(JavaParser.RBRACK);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1743;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1749;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1745;
						this.match(JavaParser.LBRACK);
						this.state = 1746;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1751;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this.arguments();
			this.state = 1756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 1755;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.nonWildcardTypeArguments();
			this.state = 1759;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, JavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1761;
				this.match(JavaParser.LT);
				this.state = 1762;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1763;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1769;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1766;
				this.match(JavaParser.LT);
				this.state = 1767;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1768;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1771;
			this.match(JavaParser.LT);
			this.state = 1772;
			this.typeList();
			this.state = 1773;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1775;
			this.typeType();
			this.state = 1780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1776;
				this.match(JavaParser.COMMA);
				this.state = 1777;
				this.typeType();
				}
				}
				this.state = 1782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, JavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT) {
				{
				{
				this.state = 1783;
				this.annotation();
				}
				}
				this.state = 1788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.EXPORTS:
			case JavaParser.MODULE:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.IDENTIFIER:
				{
				this.state = 1789;
				this.classOrInterfaceType();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				{
				this.state = 1790;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1803;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1796;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.AT) {
						{
						{
						this.state = 1793;
						this.annotation();
						}
						}
						this.state = 1798;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1799;
					this.match(JavaParser.LBRACK);
					this.state = 1800;
					this.match(JavaParser.RBRACK);
					}
					}
				}
				this.state = 1805;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1808;
			this.match(JavaParser.LT);
			this.state = 1809;
			this.typeArgument();
			this.state = 1814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1810;
				this.match(JavaParser.COMMA);
				this.state = 1811;
				this.typeArgument();
				}
				}
				this.state = 1816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1817;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, JavaParser.RULE_superSuffix);
		let _la: number;
		try {
			this.state = 1828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1819;
				this.arguments();
				}
				break;
			case JavaParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1820;
				this.match(JavaParser.DOT);
				this.state = 1822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1821;
					this.typeArguments();
					}
				}

				this.state = 1824;
				this.identifier();
				this.state = 1826;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1825;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, JavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1835;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1830;
				this.match(JavaParser.SUPER);
				this.state = 1831;
				this.superSuffix();
				}
				break;
			case JavaParser.EXPORTS:
			case JavaParser.MODULE:
			case JavaParser.OPEN:
			case JavaParser.OPENS:
			case JavaParser.PERMITS:
			case JavaParser.PROVIDES:
			case JavaParser.RECORD:
			case JavaParser.REQUIRES:
			case JavaParser.SEALED:
			case JavaParser.TO:
			case JavaParser.TRANSITIVE:
			case JavaParser.USES:
			case JavaParser.VAR:
			case JavaParser.WHEN:
			case JavaParser.WITH:
			case JavaParser.YIELD:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1832;
				this.identifier();
				this.state = 1833;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1837;
			this.match(JavaParser.LPAREN);
			this.state = 1839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.EXPORTS) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.MODULE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.NEW - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.PERMITS - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.SEALED - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHEN - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.WITH - 66)) | (1 << (JavaParser.YIELD - 66)) | (1 << (JavaParser.DECIMAL_LITERAL - 66)) | (1 << (JavaParser.HEX_LITERAL - 66)) | (1 << (JavaParser.OCT_LITERAL - 66)) | (1 << (JavaParser.BINARY_LITERAL - 66)) | (1 << (JavaParser.FLOAT_LITERAL - 66)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 66)) | (1 << (JavaParser.BOOL_LITERAL - 66)) | (1 << (JavaParser.CHAR_LITERAL - 66)) | (1 << (JavaParser.STRING_LITERAL - 66)) | (1 << (JavaParser.TEXT_BLOCK - 66)) | (1 << (JavaParser.NULL_LITERAL - 66)) | (1 << (JavaParser.LPAREN - 66)) | (1 << (JavaParser.LT - 66)) | (1 << (JavaParser.BANG - 66)) | (1 << (JavaParser.TILDE - 66)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.INC - 101)) | (1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 1838;
				this.expressionList();
				}
			}

			this.state = 1841;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 59:
			return this.annotationFieldValue_sempred(_localctx as AnnotationFieldValueContext, predIndex);

		case 76:
			return this.recordComponentList_sempred(_localctx as RecordComponentListContext, predIndex);

		case 99:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private annotationFieldValue_sempred(_localctx: AnnotationFieldValueContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.IsNotIdentifierAssign() ;
		}
		return true;
	}
	private recordComponentList_sempred(_localctx: RecordComponentListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  this.DoLastRecordComponent() ;
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 25);

		case 15:
			return this.precpred(this._ctx, 24);

		case 16:
			return this.precpred(this._ctx, 22);

		case 17:
			return this.precpred(this._ctx, 18);

		case 18:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x83\u0736\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x03\x02\x05\x02\u0106\n\x02\x03\x02\x03\x02\x07\x02\u010A" +
		"\n\x02\f\x02\x0E\x02\u010D\v\x02\x03\x02\x03\x02\x07\x02\u0111\n\x02\f" +
		"\x02\x0E\x02\u0114\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\u011A" +
		"\n\x02\x03\x03\x07\x03\u011D\n\x03\f\x03\x0E\x03\u0120\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x07\x04\u0125\n\x04\f\x04\x0E\x04\u0128\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\u0130\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0135\n\x05\x03\x05\x03\x05\x03\x06\x07\x06\u013A\n\x06" +
		"\f\x06\x0E\x06\u013D\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\u0144\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u014B" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\u0157\n\b\x03\t\x03\t\x05\t\u015B\n\t\x03\n\x03\n\x03\n\x05\n\u0160" +
		"\n\n\x03\n\x03\n\x05\n\u0164\n\n\x03\n\x03\n\x05\n\u0168\n\n\x03\n\x03" +
		"\n\x05\n\u016C\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0174\n\v" +
		"\f\v\x0E\v\u0177\v\v\x03\v\x03\v\x03\f\x07\f\u017C\n\f\f\f\x0E\f\u017F" +
		"\v\f\x03\f\x03\f\x03\f\x07\f\u0184\n\f\f\f\x0E\f\u0187\v\f\x03\f\x05\f" +
		"\u018A\n\f\x03\r\x03\r\x03\r\x07\r\u018F\n\r\f\r\x0E\r\u0192\v\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0198\n\x0E\x03\x0E\x03\x0E\x05\x0E\u019C" +
		"\n\x0E\x03\x0E\x05\x0E\u019F\n\x0E\x03\x0E\x05\x0E\u01A2\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01A9\n\x0F\f\x0F\x0E\x0F\u01AC" +
		"\v\x0F\x03\x10\x07\x10\u01AF\n\x10\f\x10\x0E\x10\u01B2\v\x10\x03\x10\x03" +
		"\x10\x05\x10\u01B6\n\x10\x03\x10\x05\x10\u01B9\n\x10\x03\x11\x03\x11\x07" +
		"\x11\u01BD\n\x11\f\x11\x0E\x11\u01C0\v\x11\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u01C5\n\x12\x03\x12\x03\x12\x05\x12\u01C9\n\x12\x03\x12\x03\x12\x05" +
		"\x12\u01CD\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u01D3\n\x13\f" +
		"\x13\x0E\x13\u01D6\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u01DC" +
		"\n\x14\f\x14\x0E\x14\u01DF\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15" +
		"\u01E5\n\x15\x03\x15\x03\x15\x07\x15\u01E9\n\x15\f\x15\x0E\x15\u01EC\v" +
		"\x15\x03\x15\x05\x15\u01EF\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01FB\n\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0202\n\x17\f\x17\x0E\x17\u0205\v" +
		"\x17\x03\x17\x03\x17\x05\x17\u0209\n\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x05\x18\u020F\n\x18\x03\x19\x03\x19\x05\x19\u0213\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u021F\n\x1C\x03\x1C\x03\x1C\x03\x1D\x07\x1D\u0224\n\x1D\f\x1D\x0E\x1D" +
		"\u0227\v\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x07\x1F\u0231\n\x1F\f\x1F\x0E\x1F\u0234\v\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0238\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0242\n" +
		" \x03!\x03!\x03!\x03!\x07!\u0248\n!\f!\x0E!\u024B\v!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x07\"\u0252\n\"\f\"\x0E\"\u0255\v\"\x03\"\x03\"\x03\"\x03#\x07" +
		"#\u025B\n#\f#\x0E#\u025E\v#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x05" +
		"$\u0268\n$\x03%\x07%\u026B\n%\f%\x0E%\u026E\v%\x03%\x03%\x03%\x03&\x07" +
		"&\u0274\n&\f&\x0E&\u0277\v&\x03&\x03&\x03&\x03&\x03&\x07&\u027E\n&\f&" +
		"\x0E&\u0281\v&\x03&\x03&\x05&\u0285\n&\x03&\x03&\x03\'\x03\'\x03\'\x07" +
		"\'\u028C\n\'\f\'\x0E\'\u028F\v\'\x03(\x03(\x03(\x05(\u0294\n(\x03)\x03" +
		")\x03)\x07)\u0299\n)\f)\x0E)\u029C\v)\x03*\x03*\x05*\u02A0\n*\x03+\x03" +
		"+\x03+\x03+\x07+\u02A6\n+\f+\x0E+\u02A9\v+\x03+\x05+\u02AC\n+\x05+\u02AE" +
		"\n+\x03+\x03+\x03,\x03,\x03,\x07,\u02B5\n,\f,\x0E,\u02B8\v,\x05,\u02BA" +
		"\n,\x03,\x03,\x05,\u02BE\n,\x06,\u02C0\n,\r,\x0E,\u02C1\x03,\x03,\x07" +
		",\u02C6\n,\f,\x0E,\u02C9\v,\x03,\x03,\x05,\u02CD\n,\x07,\u02CF\n,\f,\x0E" +
		",\u02D2\v,\x03-\x03-\x03-\x07-\u02D7\n-\f-\x0E-\u02DA\v-\x03.\x03.\x07" +
		".\u02DE\n.\f.\x0E.\u02E1\v.\x03.\x03.\x03.\x05.\u02E6\n.\x05.\u02E8\n" +
		".\x03/\x03/\x03/\x07/\u02ED\n/\f/\x0E/\u02F0\v/\x030\x030\x030\x050\u02F5" +
		"\n0\x030\x030\x070\u02F9\n0\f0\x0E0\u02FC\v0\x050\u02FE\n0\x030\x030\x03" +
		"1\x031\x031\x031\x071\u0306\n1\f1\x0E1\u0309\v1\x031\x031\x032\x032\x03" +
		"2\x072\u0310\n2\f2\x0E2\u0313\v2\x033\x073\u0316\n3\f3\x0E3\u0319\v3\x03" +
		"3\x033\x073\u031D\n3\f3\x0E3\u0320\v3\x033\x053\u0323\n3\x033\x033\x03" +
		"4\x034\x034\x074\u032A\n4\f4\x0E4\u032D\v4\x035\x075\u0330\n5\f5\x0E5" +
		"\u0333\v5\x035\x035\x035\x036\x036\x036\x076\u033B\n6\f6\x0E6\u033E\v" +
		"6\x037\x037\x037\x037\x037\x037\x037\x057\u0347\n7\x038\x038\x039\x03" +
		"9\x03:\x03:\x03:\x07:\u0350\n:\f:\x0E:\u0353\v:\x03:\x03:\x03:\x03;\x03" +
		";\x03;\x03;\x05;\u035C\n;\x03<\x03<\x03<\x03<\x07<\u0362\n<\f<\x0E<\u0365" +
		"\v<\x05<\u0367\n<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u0371\n" +
		"=\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0379\n>\f>\x0E>\u037C\v>\x05>\u037E" +
		"\n>\x03>\x05>\u0381\n>\x03>\x05>\u0384\n>\x03?\x03?\x03?\x05?\u0389\n" +
		"?\x03@\x03@\x03@\x03@\x07@\u038F\n@\f@\x0E@\u0392\v@\x05@\u0394\n@\x03" +
		"@\x05@\u0397\n@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x07B\u03A2" +
		"\nB\fB\x0EB\u03A5\vB\x03B\x03B\x03C\x07C\u03AA\nC\fC\x0EC\u03AD\vC\x03" +
		"C\x03C\x05C\u03B1\nC\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u03B9\nD\x03D" +
		"\x03D\x05D\u03BD\nD\x03D\x03D\x05D\u03C1\nD\x03D\x03D\x05D\u03C5\nD\x03" +
		"D\x03D\x05D\u03C9\nD\x05D\u03CB\nD\x03E\x03E\x05E\u03CF\nE\x03F\x03F\x03" +
		"F\x03F\x05F\u03D5\nF\x03G\x03G\x03H\x03H\x03H\x03I\x07I\u03DD\nI\fI\x0E" +
		"I\u03E0\vI\x03I\x05I\u03E3\nI\x03I\x03I\x03I\x03I\x07I\u03E9\nI\fI\x0E" +
		"I\u03EC\vI\x03I\x03I\x03J\x03J\x07J\u03F2\nJ\fJ\x0EJ\u03F5\vJ\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u0400\nJ\fJ\x0EJ\u0403\vJ\x05" +
		"J\u0405\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u040F\nJ\fJ\x0E" +
		"J\u0412\vJ\x05J\u0414\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J" +
		"\x03J\x03J\x03J\x07J\u0422\nJ\fJ\x0EJ\u0425\vJ\x03J\x03J\x05J\u0429\n" +
		"J\x03K\x03K\x03L\x03L\x03L\x05L\u0430\nL\x03L\x03L\x03L\x05L\u0435\nL" +
		"\x03L\x03L\x03M\x03M\x05M\u043B\nM\x03M\x03M\x03N\x03N\x03N\x07N\u0442" +
		"\nN\fN\x0EN\u0445\vN\x03N\x03N\x03O\x07O\u044A\nO\fO\x0EO\u044D\vO\x03" +
		"O\x03O\x07O\u0451\nO\fO\x0EO\u0454\vO\x03O\x05O\u0457\nO\x03O\x03O\x03" +
		"P\x03P\x03P\x07P\u045E\nP\fP\x0EP\u0461\vP\x03P\x03P\x03Q\x03Q\x07Q\u0467" +
		"\nQ\fQ\x0EQ\u046A\vQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x05R\u0473\nR" +
		"\x03S\x07S\u0476\nS\fS\x0ES\u0479\vS\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x05S\u0483\nS\x03T\x03T\x03U\x03U\x03V\x07V\u048A\nV\fV\x0EV\u048D" +
		"\vV\x03V\x03V\x03V\x03V\x05V\u0493\nV\x03W\x03W\x03W\x03W\x03W\x05W\u049A" +
		"\nW\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u04A5\nW\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x06W\u04BE\nW\rW\x0EW\u04BF\x03W" +
		"\x05W\u04C3\nW\x03W\x05W\u04C6\nW\x03W\x03W\x03W\x03W\x07W\u04CC\nW\f" +
		"W\x0EW\u04CF\vW\x03W\x05W\u04D2\nW\x03W\x03W\x03W\x03W\x03W\x03W\x07W" +
		"\u04DA\nW\fW\x0EW\u04DD\vW\x03W\x07W\u04E0\nW\fW\x0EW\u04E3\vW\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u04EF\nW\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x05W\u04F8\nW\x03W\x03W\x03W\x05W\u04FD\nW\x03W" +
		"\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u050A\nW\x03W" +
		"\x03W\x03W\x03W\x05W\u0510\nW\x03X\x03X\x03X\x07X\u0515\nX\fX\x0EX\u0518" +
		"\vX\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x07Y\u0522\nY\fY\x0EY\u0525" +
		"\vY\x03Z\x03Z\x03Z\x03[\x03[\x03[\x05[\u052D\n[\x03[\x03[\x03\\\x03\\" +
		"\x03\\\x07\\\u0534\n\\\f\\\x0E\\\u0537\v\\\x03]\x07]\u053A\n]\f]\x0E]" +
		"\u053D\v]\x03]\x03]\x03]\x03]\x03]\x05]\u0544\n]\x03]\x03]\x03]\x03]\x05" +
		"]\u054A\n]\x03^\x03^\x03^\x06^\u054F\n^\r^\x0E^\u0550\x03^\x06^\u0554" +
		"\n^\r^\x0E^\u0555\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u055E\n_\x03_\x05" +
		"_\u0561\n_\x03`\x03`\x05`\u0565\n`\x03`\x03`\x05`\u0569\n`\x03`\x03`\x05" +
		"`\u056D\n`\x05`\u056F\n`\x03a\x03a\x05a\u0573\na\x03b\x07b\u0576\nb\f" +
		"b\x0Eb\u0579\vb\x03b\x03b\x05b\u057D\nb\x03b\x03b\x03b\x03b\x03c\x03c" +
		"\x03c\x07c\u0586\nc\fc\x0Ec\u0589\vc\x03d\x03d\x03d\x05d\u058E\nd\x03" +
		"d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0598\ne\x03e\x03e\x05e\u059C" +
		"\ne\x03e\x03e\x03e\x05e\u05A1\ne\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x07" +
		"e\u05AA\ne\fe\x0Ee\u05AD\ve\x03e\x03e\x03e\x07e\u05B2\ne\fe\x0Ee\u05B5" +
		"\ve\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u05BD\ne\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u05CD\ne\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05" +
		"e\u05FA\ne\x03e\x03e\x03e\x03e\x05e\u0600\ne\x03e\x03e\x03e\x05e\u0605" +
		"\ne\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u060E\ne\x07e\u0610\ne\fe" +
		"\x0Ee\u0613\ve\x03f\x07f\u0616\nf\ff\x0Ef\u0619\vf\x03f\x03f\x07f\u061D" +
		"\nf\ff\x0Ef\u0620\vf\x03f\x03f\x03f\x03f\x03f\x05f\u0627\nf\x03f\x03f" +
		"\x05f\u062B\nf\x03g\x03g\x03g\x07g\u0630\ng\fg\x0Eg\u0633\vg\x03h\x03" +
		"h\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x05j\u063E\nj\x03j\x03j\x03j\x03" +
		"j\x03j\x07j\u0645\nj\fj\x0Ej\u0648\vj\x03j\x03j\x03j\x03j\x05j\u064E\n" +
		"j\x03j\x05j\u0651\nj\x03k\x03k\x05k\u0655\nk\x03l\x03l\x03l\x03l\x03l" +
		"\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u0667\nl" +
		"\x05l\u0669\nl\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u0671\nm\fm\x0Em\u0674" +
		"\vm\x03m\x03m\x03n\x03n\x03n\x03n\x03n\x05n\u067D\nn\x03n\x03n\x03n\x07" +
		"n\u0682\nn\fn\x0En\u0685\vn\x03n\x05n\u0688\nn\x05n\u068A\nn\x03n\x03" +
		"n\x03n\x03n\x03n\x05n\u0691\nn\x03o\x03o\x03o\x03p\x03p\x03q\x03q\x07" +
		"q\u069A\nq\fq\x0Eq\u069D\vq\x05q\u069F\nq\x03r\x03r\x03s\x05s\u06A4\n" +
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u06AC\ns\x03t\x03t\x05t\u06B0\nt" +
		"\x03t\x03t\x03t\x05t\u06B5\nt\x07t\u06B7\nt\ft\x0Et\u06BA\vt\x03t\x05" +
		"t\u06BD\nt\x03u\x03u\x05u\u06C1\nu\x03u\x03u\x03v\x03v\x06v\u06C7\nv\r" +
		"v\x0Ev\u06C8\x03v\x03v\x03v\x03v\x03v\x06v\u06D0\nv\rv\x0Ev\u06D1\x03" +
		"v\x03v\x07v\u06D6\nv\fv\x0Ev\u06D9\vv\x05v\u06DB\nv\x03w\x03w\x05w\u06DF" +
		"\nw\x03x\x03x\x03x\x03y\x03y\x03y\x05y\u06E7\ny\x03z\x03z\x03z\x05z\u06EC" +
		"\nz\x03{\x03{\x03{\x03{\x03|\x03|\x03|\x07|\u06F5\n|\f|\x0E|\u06F8\v|" +
		"\x03}\x07}\u06FB\n}\f}\x0E}\u06FE\v}\x03}\x03}\x05}\u0702\n}\x03}\x07" +
		"}\u0705\n}\f}\x0E}\u0708\v}\x03}\x03}\x07}\u070C\n}\f}\x0E}\u070F\v}\x03" +
		"~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0717\n\x7F\f\x7F\x0E\x7F" +
		"\u071A\v\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u0721\n\x80" +
		"\x03\x80\x03\x80\x05\x80\u0725\n\x80\x05\x80\u0727\n\x80\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x05\x81\u072E\n\x81\x03\x82\x03\x82\x05\x82\u0732" +
		"\n\x82\x03\x82\x03\x82\x03\x82\x02\x02\x03\xC8\x83\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
		"\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02" +
		"\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02" +
		"\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100" +
		"\x02\u0102\x02\x02\x11\x04\x02\x14\x1444\x03\x02FI\x03\x02JK\x04\x022" +
		"2<<\x0F\x02\x13\x13!!%&((++-.00::<<>?BBDE\x83\x83\r\x02\x13\x13!!%&++" +
		"..00::<<>>DD\x83\x83\x04\x02]^gj\x04\x02klpp\x03\x02ij\x04\x02[\\bc\x04" +
		"\x02aadd\x04\x02ZZq{\x03\x02gh\x04\x02``||\n\x02\x05\x05\x07\x07\n\n\x10" +
		"\x10\x17\x17\x1E\x1E  11\x02\u0803\x02\u0119\x03\x02\x02\x02\x04\u011E" +
		"\x03\x02\x02\x02\x06\u0126\x03\x02\x02\x02\b\u012D\x03\x02\x02\x02\n\u013B" +
		"\x03\x02\x02\x02\f\u014A\x03\x02\x02\x02\x0E\u0156\x03\x02\x02\x02\x10" +
		"\u015A\x03\x02\x02\x02\x12\u015C\x03\x02\x02\x02\x14\u016F\x03\x02\x02" +
		"\x02\x16\u017D\x03\x02\x02\x02\x18\u018B\x03\x02\x02\x02\x1A\u0193\x03" +
		"\x02\x02\x02\x1C\u01A5\x03\x02\x02\x02\x1E\u01B0\x03\x02\x02\x02 \u01BA" +
		"\x03\x02\x02\x02\"\u01C1\x03\x02\x02\x02$\u01D0\x03\x02\x02\x02&\u01D9" +
		"\x03\x02\x02\x02(\u01EE\x03\x02\x02\x02*\u01FA\x03\x02\x02\x02,\u01FC" +
		"\x03\x02\x02\x02.\u020E\x03\x02\x02\x020\u0212\x03\x02\x02\x022\u0214" +
		"\x03\x02\x02\x024\u0217\x03\x02\x02\x026\u021A\x03\x02\x02\x028\u0225" +
		"\x03\x02\x02\x02:\u022B\x03\x02\x02\x02<\u0237\x03\x02\x02\x02>\u0241" +
		"\x03\x02\x02\x02@\u0243\x03\x02\x02\x02B\u024E\x03\x02\x02\x02D\u025C" +
		"\x03\x02\x02\x02F\u0267\x03\x02\x02\x02H\u026C\x03\x02\x02\x02J\u0275" +
		"\x03\x02\x02\x02L\u0288\x03\x02\x02\x02N\u0290\x03\x02\x02\x02P\u0295" +
		"\x03\x02\x02\x02R\u029F\x03\x02\x02\x02T\u02A1\x03\x02\x02\x02V\u02BF" +
		"\x03\x02\x02\x02X\u02D3\x03\x02\x02\x02Z\u02E7\x03\x02\x02\x02\\\u02E9" +
		"\x03\x02\x02\x02^\u02F1\x03\x02\x02\x02`\u0301\x03\x02\x02\x02b\u030C" +
		"\x03\x02\x02\x02d\u0317\x03\x02\x02\x02f\u0326\x03\x02\x02\x02h\u0331" +
		"\x03\x02\x02\x02j\u0337\x03\x02\x02\x02l\u0346\x03\x02\x02\x02n\u0348" +
		"\x03\x02\x02\x02p\u034A\x03\x02\x02\x02r\u0351\x03\x02\x02\x02t\u0357" +
		"\x03\x02\x02\x02v\u035D\x03\x02\x02\x02x\u0370\x03\x02\x02\x02z\u0383" +
		"\x03\x02\x02\x02|\u0388\x03\x02\x02\x02~\u038A\x03\x02\x02\x02\x80\u039A" +
		"\x03\x02\x02\x02\x82\u039F\x03\x02\x02\x02\x84\u03B0\x03\x02\x02\x02\x86" +
		"\u03CA\x03\x02\x02\x02\x88\u03CE\x03\x02\x02\x02\x8A\u03D0\x03\x02\x02" +
		"\x02\x8C\u03D6\x03\x02\x02\x02\x8E\u03D8\x03\x02\x02\x02\x90\u03DE\x03" +
		"\x02\x02\x02\x92\u0428\x03\x02\x02\x02\x94\u042A\x03\x02\x02\x02\x96\u042C" +
		"\x03\x02\x02\x02\x98\u0438\x03\x02\x02\x02\x9A\u043E\x03\x02\x02\x02\x9C" +
		"\u044B\x03\x02\x02\x02\x9E\u045A\x03\x02\x02\x02\xA0\u0464\x03\x02\x02" +
		"\x02\xA2\u0472\x03\x02\x02\x02\xA4\u0477\x03\x02\x02\x02\xA6\u0484\x03" +
		"\x02\x02\x02\xA8\u0486\x03\x02\x02\x02\xAA\u048B\x03\x02\x02\x02\xAC\u050F" +
		"\x03\x02\x02\x02\xAE\u0511\x03\x02\x02\x02\xB0\u051E\x03\x02\x02\x02\xB2" +
		"\u0526\x03\x02\x02\x02\xB4\u0529\x03\x02\x02\x02\xB6\u0530\x03\x02\x02" +
		"\x02\xB8\u0549\x03\x02\x02\x02\xBA\u054E\x03\x02\x02\x02\xBC\u0560\x03" +
		"\x02\x02\x02\xBE\u056E\x03\x02\x02\x02\xC0\u0572\x03\x02\x02\x02\xC2\u0577" +
		"\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\xC4\u0582\x03\x02\x02\x02\xC6\u058D\x03\x02\x02\x02\xC8\u05BC" +
		"\x03\x02\x02\x02\xCA\u062A\x03\x02\x02\x02\xCC\u062C\x03\x02\x02\x02\xCE" +
		"\u0634\x03\x02\x02\x02\xD0\u0636\x03\x02\x02\x02\xD2\u0650\x03\x02\x02" +
		"\x02\xD4\u0654\x03\x02\x02\x02\xD6\u0668\x03\x02\x02\x02\xD8\u066A\x03" +
		"\x02\x02\x02\xDA\u0690\x03\x02\x02\x02\xDC\u0692\x03\x02\x02\x02\xDE\u0695" +
		"\x03\x02\x02\x02\xE0\u069E\x03\x02\x02\x02\xE2\u06A0\x03\x02\x02\x02\xE4" +
		"\u06AB\x03\x02\x02\x02\xE6\u06BC\x03\x02\x02\x02\xE8\u06BE\x03\x02\x02" +
		"\x02\xEA\u06DA\x03\x02\x02\x02\xEC\u06DC\x03\x02\x02\x02\xEE\u06E0\x03" +
		"\x02\x02\x02\xF0\u06E6\x03\x02\x02\x02\xF2\u06EB\x03\x02\x02\x02\xF4\u06ED" +
		"\x03\x02\x02\x02\xF6\u06F1\x03\x02\x02\x02\xF8\u06FC\x03\x02\x02\x02\xFA" +
		"\u0710\x03\x02\x02\x02\xFC\u0712\x03\x02\x02\x02\xFE\u0726\x03\x02\x02" +
		"\x02\u0100\u072D\x03\x02\x02\x02\u0102\u072F\x03\x02\x02\x02\u0104\u0106" +
		"\x05\x06\x04\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u010B\x03\x02\x02\x02\u0107\u010A\x05\b\x05\x02\u0108\u010A\x07" +
		"W\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A" +
		"\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u0112\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E" +
		"\u0111\x05\n\x06\x02\u010F\u0111\x07W\x02\x02\u0110\u010E\x03\x02\x02" +
		"\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0115\u011A\x07\x02\x02\x03\u0116\u0117\x05" +
		"\x04\x03\x02\u0117\u0118\x07\x02\x02\x03\u0118\u011A\x03\x02\x02\x02\u0119" +
		"\u0105\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02\u011A\x03\x03\x02\x02" +
		"\x02\u011B\u011D\x05\b\x05\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120" +
		"\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02" +
		"\u011F\u0121\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x05" +
		"\x90I\x02\u0122\x05\x03\x02\x02\x02\u0123\u0125\x05t;\x02\u0124\u0123" +
		"\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0126\x03" +
		"\x02\x02\x02\u0129\u012A\x07\'\x02\x02\u012A\u012B\x05j6\x02\u012B\u012C" +
		"\x07W\x02\x02\u012C\x07\x03\x02\x02\x02\u012D\u012F\x07\x1C\x02\x02\u012E" +
		"\u0130\x072\x02\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02" +
		"\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0134\x05j6\x02\u0132\u0133\x07" +
		"Y\x02\x02\u0133\u0135\x07k\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135" +
		"\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07W\x02\x02" +
		"\u0137\t\x03\x02\x02\x02\u0138\u013A\x05\x0E\b\x02\u0139\u0138\x03\x02" +
		"\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u0143\x03\x02\x02\x02\u013D\u013B\x03\x02" +
		"\x02\x02\u013E\u0144\x05\x12\n\x02\u013F\u0144\x05\x1A\x0E\x02\u0140\u0144" +
		"\x05\"\x12\x02\u0141\u0144\x05\x80A\x02\u0142\u0144\x05\x96L\x02\u0143" +
		"\u013E\x03\x02\x02\x02\u0143\u013F\x03\x02\x02\x02\u0143\u0140\x03\x02" +
		"\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144" +
		"\v\x03\x02\x02\x02\u0145\u014B\x05\x0E\b\x02\u0146\u014B\x07\"\x02\x02" +
		"\u0147\u014B\x076\x02\x02\u0148\u014B\x07;\x02\x02\u0149\u014B\x07A\x02" +
		"\x02\u014A\u0145\x03\x02\x02\x02\u014A\u0146\x03\x02\x02\x02\u014A\u0147" +
		"\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02" +
		"\u014B\r\x03\x02\x02\x02\u014C\u0157\x05t;\x02\u014D\u0157\x07,\x02\x02" +
		"\u014E\u0157\x07*\x02\x02\u014F\u0157\x07)\x02\x02\u0150\u0157\x072\x02" +
		"\x02\u0151\u0157\x07\x03\x02\x02\u0152\u0157\x07\x15\x02\x02\u0153\u0157" +
		"\x073\x02\x02\u0154\u0157\x070\x02\x02\u0155\u0157\x07$\x02\x02\u0156" +
		"\u014C\x03\x02\x02\x02\u0156\u014D\x03\x02\x02\x02\u0156\u014E\x03\x02" +
		"\x02\x02\u0156\u014F\x03\x02\x02\x02\u0156\u0150\x03\x02\x02\x02\u0156" +
		"\u0151\x03\x02\x02\x02\u0156\u0152\x03\x02\x02\x02\u0156\u0153\x03\x02" +
		"\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157" +
		"\x0F\x03\x02\x02\x02\u0158\u015B\x07\x15\x02\x02\u0159\u015B\x05t;\x02" +
		"\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\x11\x03" +
		"\x02\x02\x02\u015C\u015D\x07\v\x02\x02\u015D\u015F\x05\xA6T\x02\u015E" +
		"\u0160\x05\x14\v\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02" +
		"\x02\u0160\u0163\x03\x02\x02\x02\u0161\u0162\x07\x14\x02\x02\u0162\u0164" +
		"\x05\xF8}\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164\u0167\x03\x02\x02\x02\u0165\u0166\x07\x1B\x02\x02\u0166\u0168\x05" +
		"\xF6|\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u016B\x03\x02\x02\x02\u0169\u016A\x07(\x02\x02\u016A\u016C\x05\xF6|\x02" +
		"\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03" +
		"\x02\x02\x02\u016D\u016E\x05$\x13\x02\u016E\x13\x03\x02\x02\x02\u016F" +
		"\u0170\x07\\\x02\x02\u0170\u0175\x05\x16\f\x02\u0171\u0172\x07X\x02\x02" +
		"\u0172\u0174\x05\x16\f\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0177\x03" +
		"\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176" +
		"\u0178\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0179\x07[\x02" +
		"\x02\u0179\x15\x03\x02\x02\x02\u017A\u017C\x05t;\x02\u017B\u017A\x03\x02" +
		"\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017D\x03\x02" +
		"\x02\x02\u0180\u0189\x05\xA6T\x02\u0181\u0185\x07\x14\x02\x02\u0182\u0184" +
		"\x05t;\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018A\x05\x18\r\x02\u0189\u0181" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\x17\x03\x02\x02\x02" +
		"\u018B\u0190\x05\xF8}\x02\u018C\u018D\x07m\x02\x02\u018D\u018F\x05\xF8" +
		"}\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E" +
		"\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\x19\x03\x02\x02\x02" +
		"\u0192\u0190\x03\x02\x02\x02\u0193\u0194\x07\x12\x02\x02\u0194\u0197\x05" +
		"\xA6T\x02\u0195\u0196\x07\x1B\x02\x02\u0196\u0198\x05\xF6|\x02\u0197\u0195" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199\u019B\x07S\x02\x02\u019A\u019C\x05\x1C\x0F\x02\u019B\u019A\x03" +
		"\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D" +
		"\u019F\x07X\x02\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02" +
		"\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u01A2\x05 \x11\x02\u01A1\u01A0" +
		"\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02" +
		"\u01A3\u01A4\x07T\x02\x02\u01A4\x1B\x03\x02\x02\x02\u01A5\u01AA\x05\x1E" +
		"\x10\x02\u01A6\u01A7\x07X\x02\x02\u01A7\u01A9\x05\x1E\x10\x02\u01A8\u01A6" +
		"\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
		"\u01AA\u01AB\x03\x02\x02\x02\u01AB\x1D\x03\x02\x02\x02\u01AC\u01AA\x03" +
		"\x02\x02\x02\u01AD\u01AF\x05t;\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\u01B2" +
		"\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02" +
		"\u01B1\u01B3\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B5\x05" +
		"\xA6T\x02\u01B4\u01B6\x05\u0102\x82\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B9\x05$\x13" +
		"\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\x1F" +
		"\x03\x02\x02\x02\u01BA\u01BE\x07W\x02\x02\u01BB\u01BD\x05(\x15\x02\u01BC" +
		"\u01BB\x03\x02\x02\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02" +
		"\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF!\x03\x02\x02\x02\u01C0\u01BE" +
		"\x03\x02\x02\x02\u01C1\u01C2\x07\x1F\x02\x02\u01C2\u01C4\x05\xA6T\x02" +
		"\u01C3\u01C5\x05\x14\v\x02\u01C4\u01C3\x03\x02\x02\x02\u01C4\u01C5\x03" +
		"\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C7\x07\x14\x02\x02\u01C7" +
		"\u01C9\x05\xF6|\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02" +
		"\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01CB\x07(\x02\x02\u01CB\u01CD" +
		"\x05\xF6|\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02" +
		"\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x05&\x14\x02\u01CF#\x03\x02\x02" +
		"\x02\u01D0\u01D4\x07S\x02\x02\u01D1\u01D3\x05(\x15\x02\u01D2\u01D1\x03" +
		"\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4" +
		"\u01D5\x03\x02\x02\x02\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01D4\x03\x02" +
		"\x02\x02\u01D7\u01D8\x07T\x02\x02\u01D8%\x03\x02\x02\x02\u01D9\u01DD\x07" +
		"S\x02\x02\u01DA\u01DC\x05<\x1F\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DF" +
		"\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02" +
		"\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E1\x07" +
		"T\x02\x02\u01E1\'\x03\x02\x02\x02\u01E2\u01EF\x07W\x02\x02\u01E3\u01E5" +
		"\x072\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01EF\x05\xA0Q\x02\u01E7\u01E9\x05" +
		"\f\x07\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA" +
		"\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02" +
		"\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01EF\x05*\x16\x02\u01EE\u01E2" +
		"\x03\x02\x02\x02\u01EE\u01E4\x03\x02\x02\x02\u01EE\u01EA\x03\x02\x02\x02" +
		"\u01EF)\x03\x02\x02\x02\u01F0\u01FB\x05\x96L\x02\u01F1\u01FB\x05,\x17" +
		"\x02\u01F2\u01FB\x052\x1A\x02\u01F3\u01FB\x05:\x1E\x02\u01F4\u01FB\x05" +
		"6\x1C\x02\u01F5\u01FB\x054\x1B\x02\u01F6\u01FB\x05\"\x12\x02\u01F7\u01FB" +
		"\x05\x80A\x02\u01F8\u01FB\x05\x12\n\x02\u01F9\u01FB\x05\x1A\x0E\x02\u01FA" +
		"\u01F0\x03\x02\x02\x02\u01FA\u01F1\x03\x02\x02\x02\u01FA\u01F2\x03\x02" +
		"\x02\x02\u01FA\u01F3\x03\x02\x02\x02\u01FA\u01F4\x03\x02\x02\x02\u01FA" +
		"\u01F5\x03\x02\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FA\u01F7\x03\x02" +
		"\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB" +
		"+\x03\x02\x02\x02\u01FC\u01FD\x050\x19\x02\u01FD\u01FE\x05\xA6T\x02\u01FE" +
		"\u0203\x05^0\x02\u01FF\u0200\x07U\x02\x02\u0200\u0202\x07V\x02\x02\u0201" +
		"\u01FF\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0208\x03\x02\x02\x02\u0205" +
		"\u0203\x03\x02\x02\x02\u0206\u0207\x079\x02\x02\u0207\u0209\x05\\/\x02" +
		"\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03" +
		"\x02\x02\x02\u020A\u020B\x05.\x18\x02\u020B-\x03\x02\x02\x02\u020C\u020F" +
		"\x05\xA0Q\x02\u020D\u020F\x07W\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E" +
		"\u020D\x03\x02\x02\x02\u020F/\x03\x02\x02\x02\u0210\u0213\x05\xF8}\x02" +
		"\u0211\u0213\x07@\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0211\x03" +
		"\x02\x02\x02\u02131\x03\x02\x02\x02\u0214\u0215\x05\x14\v\x02\u0215\u0216" +
		"\x05,\x17\x02\u02163\x03\x02\x02\x02\u0217\u0218\x05\x14\v\x02\u0218\u0219" +
		"\x056\x1C\x02\u02195\x03\x02\x02\x02\u021A\u021B\x05\xA6T\x02\u021B\u021E" +
		"\x05^0\x02\u021C\u021D\x079\x02\x02\u021D\u021F\x05\\/\x02\u021E\u021C" +
		"\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02" +
		"\u0220\u0221\x05\xA0Q\x02\u02217\x03\x02\x02\x02\u0222\u0224\x05\f\x07" +
		"\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223" +
		"\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03\x02\x02\x02" +
		"\u0227\u0225\x03\x02\x02\x02\u0228\u0229\x05\xA6T\x02\u0229\u022A\x05" +
		"\xA0Q\x02\u022A9\x03\x02\x02\x02\u022B\u022C\x05\xF8}\x02\u022C\u022D" +
		"\x05L\'\x02\u022D\u022E\x07W\x02\x02\u022E;\x03\x02\x02\x02\u022F\u0231" +
		"\x05\f\x07\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02" +
		"\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0235\x03" +
		"\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0238\x05> \x02\u0236\u0238" +
		"\x07W\x02\x02\u0237\u0232\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02" +
		"\u0238=\x03\x02\x02\x02\u0239\u0242\x05\x96L\x02\u023A\u0242\x05@!\x02" +
		"\u023B\u0242\x05D#\x02\u023C\u0242\x05H%\x02\u023D\u0242\x05\"\x12\x02" +
		"\u023E\u0242\x05\x80A\x02\u023F\u0242\x05\x12\n\x02\u0240\u0242\x05\x1A" +
		"\x0E\x02\u0241\u0239\x03\x02\x02\x02\u0241\u023A\x03\x02\x02\x02\u0241" +
		"\u023B\x03\x02\x02\x02\u0241\u023C\x03\x02\x02\x02\u0241\u023D\x03\x02" +
		"\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241" +
		"\u0240\x03\x02\x02\x02\u0242?\x03\x02\x02\x02\u0243\u0244\x05\xF8}\x02" +
		"\u0244\u0249\x05B\"\x02\u0245\u0246\x07X\x02\x02\u0246\u0248\x05B\"\x02" +
		"\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03" +
		"\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B" +
		"\u0249\x03\x02\x02\x02\u024C\u024D\x07W\x02\x02\u024DA\x03\x02\x02\x02" +
		"\u024E\u0253\x05\xA6T\x02\u024F\u0250\x07U\x02\x02\u0250\u0252\x07V\x02" +
		"\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251" +
		"\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02" +
		"\u0255\u0253\x03\x02\x02\x02\u0256\u0257\x07Z\x02\x02\u0257\u0258\x05" +
		"R*\x02\u0258C\x03\x02\x02\x02\u0259\u025B\x05F$\x02\u025A\u0259\x03\x02" +
		"\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C" +
		"\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02" +
		"\x02\x02\u025F\u0260\x05J&\x02\u0260E\x03\x02\x02\x02\u0261\u0268\x05" +
		"t;\x02\u0262\u0268\x07,\x02\x02\u0263\u0268\x07\x03\x02\x02\u0264\u0268" +
		"\x07\x0E\x02\x02\u0265\u0268\x072\x02\x02\u0266\u0268\x073\x02\x02\u0267" +
		"\u0261\x03\x02\x02\x02\u0267\u0262\x03\x02\x02\x02\u0267\u0263\x03\x02" +
		"\x02\x02\u0267\u0264\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267" +
		"\u0266\x03\x02\x02\x02\u0268G\x03\x02\x02\x02\u0269\u026B\x05F$\x02\u026A" +
		"\u0269\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02" +
		"\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E" +
		"\u026C\x03\x02\x02\x02\u026F\u0270\x05\x14\v\x02\u0270\u0271\x05J&\x02" +
		"\u0271I\x03\x02\x02\x02\u0272\u0274\x05t;\x02\u0273\u0272\x03\x02\x02" +
		"\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276" +
		"\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02" +
		"\u0278\u0279\x050\x19\x02\u0279\u027A\x05\xA6T\x02\u027A\u027F\x05^0\x02" +
		"\u027B\u027C\x07U\x02\x02\u027C\u027E\x07V\x02\x02\u027D\u027B\x03\x02" +
		"\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F" +
		"\u0280\x03\x02\x02\x02\u0280\u0284\x03\x02\x02\x02\u0281\u027F\x03\x02" +
		"\x02\x02\u0282\u0283\x079\x02\x02\u0283\u0285\x05\\/\x02\u0284\u0282\x03" +
		"\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286" +
		"\u0287\x05.\x18\x02\u0287K\x03\x02\x02\x02\u0288\u028D\x05N(\x02\u0289" +
		"\u028A\x07X\x02\x02\u028A\u028C\x05N(\x02\u028B\u0289\x03\x02\x02\x02" +
		"\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03" +
		"\x02\x02\x02\u028EM\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290" +
		"\u0293\x05P)\x02\u0291\u0292\x07Z\x02\x02\u0292\u0294\x05R*\x02\u0293" +
		"\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294O\x03\x02\x02" +
		"\x02\u0295\u029A\x05\xA6T\x02\u0296\u0297\x07U\x02\x02\u0297\u0299\x07" +
		"V\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A" +
		"\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029BQ\x03\x02\x02" +
		"\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A0\x05T+\x02\u029E\u02A0\x05" +
		"\xC8e\x02\u029F\u029D\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0" +
		"S\x03\x02\x02\x02\u02A1\u02AD\x07S\x02\x02\u02A2\u02A7\x05R*\x02\u02A3" +
		"\u02A4\x07X\x02\x02\u02A4\u02A6\x05R*\x02\u02A5\u02A3\x03\x02\x02\x02" +
		"\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A8\x03" +
		"\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02AA" +
		"\u02AC\x07X\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02" +
		"\x02\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02A2\x03\x02\x02\x02\u02AD\u02AE" +
		"\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x07T\x02\x02" +
		"\u02B0U\x03\x02\x02\x02\u02B1\u02B2\x05X-\x02\u02B2\u02B6\x07Y\x02\x02" +
		"\u02B3\u02B5\x05t;\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8\x03\x02" +
		"\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02B1\x03\x02" +
		"\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
		"\u02BD\x05\xA8U\x02\u02BC\u02BE\x05\xFC\x7F\x02\u02BD\u02BC\x03\x02\x02" +
		"\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0\x03\x02\x02\x02\u02BF\u02B9" +
		"\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02" +
		"\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02D0\x03\x02\x02\x02\u02C3\u02C7\x07" +
		"Y\x02\x02\u02C4\u02C6\x05t;\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02C9" +
		"\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02" +
		"\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CC\x05" +
		"\xA8U\x02\u02CB\u02CD\x05\xFC\x7F\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC" +
		"\u02CD\x03\x02\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02C3\x03\x02" +
		"\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0" +
		"\u02D1\x03\x02\x02\x02\u02D1W\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02" +
		"\x02\u02D3\u02D8\x05\xA6T\x02\u02D4\u02D5\x07Y\x02\x02\u02D5\u02D7\x05" +
		"\xA6T\x02\u02D6\u02D4\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8" +
		"\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9Y\x03\x02\x02" +
		"\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB\u02E8\x05\xF8}\x02\u02DC\u02DE" +
		"\x05t;\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF" +
		"\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E2\x03\x02" +
		"\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E2\u02E5\x07_\x02\x02\u02E3\u02E4" +
		"\t\x02\x02\x02\u02E4\u02E6\x05\xF8}\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5" +
		"\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02DB\x03\x02" +
		"\x02\x02\u02E7\u02DF\x03\x02\x02\x02\u02E8[\x03\x02\x02\x02\u02E9\u02EE" +
		"\x05j6\x02\u02EA\u02EB\x07X\x02\x02\u02EB\u02ED\x05j6\x02\u02EC\u02EA" +
		"\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02" +
		"\u02EE\u02EF\x03\x02\x02\x02\u02EF]\x03\x02\x02\x02\u02F0\u02EE\x03\x02" +
		"\x02\x02\u02F1\u02FD\x07Q\x02\x02\u02F2\u02F5\x05`1\x02\u02F3\u02F5\x05" +
		"d3\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5\u02FA" +
		"\x03\x02\x02\x02\u02F6\u02F7\x07X\x02\x02\u02F7\u02F9\x05b2\x02\u02F8" +
		"\u02F6\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02\u02FA\u02F8\x03\x02" +
		"\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC" +
		"\u02FA\x03\x02\x02\x02\u02FD\u02F4\x03\x02\x02\x02\u02FD\u02FE\x03\x02" +
		"\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x07R\x02\x02\u0300_\x03" +
		"\x02\x02\x02\u0301\u0307\x05\xF8}\x02\u0302\u0303\x05\xA6T\x02\u0303\u0304" +
		"\x07Y\x02\x02\u0304\u0306\x03\x02\x02\x02\u0305\u0302\x03\x02\x02\x02" +
		"\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02\u0307\u0308\x03" +
		"\x02\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u030A" +
		"\u030B\x077\x02\x02\u030Ba\x03\x02\x02\x02\u030C\u0311\x05d3\x02\u030D" +
		"\u030E\x07X\x02\x02\u030E\u0310\x05d3\x02\u030F\u030D\x03\x02\x02\x02" +
		"\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03" +
		"\x02\x02\x02\u0312c\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314" +
		"\u0316\x05\x10\t\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319\x03\x02\x02" +
		"\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A" +
		"\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u0322\x05\xF8}\x02" +
		"\u031B\u031D\x05t;\x02\u031C\u031B\x03\x02\x02\x02\u031D\u0320\x03\x02" +
		"\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F" +
		"\u0321\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0323\x07\x7F" +
		"\x02\x02\u0322\u031E\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0325\x05P)\x02\u0325e\x03\x02\x02\x02\u0326" +
		"\u032B\x05h5\x02\u0327\u0328\x07X\x02\x02\u0328\u032A\x05h5\x02\u0329" +
		"\u0327\x03\x02\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02" +
		"\x02\x02\u032B\u032C\x03\x02\x02\x02\u032Cg\x03\x02\x02\x02\u032D\u032B" +
		"\x03\x02\x02\x02\u032E\u0330\x05\x10\t\x02\u032F\u032E\x03\x02\x02\x02" +
		"\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03" +
		"\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334" +
		"\u0335\x07?\x02\x02\u0335\u0336\x05\xA6T\x02\u0336i\x03\x02\x02\x02\u0337" +
		"\u033C\x05\xA6T\x02\u0338\u0339\x07Y\x02\x02\u0339\u033B\x05\xA6T\x02" +
		"\u033A\u0338\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03" +
		"\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033Dk\x03\x02\x02\x02\u033E" +
		"\u033C\x03\x02\x02\x02\u033F\u0347\x05n8\x02\u0340\u0347\x05p9\x02\u0341" +
		"\u0347\x07M\x02\x02\u0342\u0347\x07N\x02\x02\u0343\u0347\x07L\x02\x02" +
		"\u0344\u0347\x07P\x02\x02\u0345\u0347\x07O\x02\x02\u0346\u033F\x03\x02" +
		"\x02\x02\u0346\u0340\x03\x02\x02\x02\u0346\u0341\x03\x02\x02\x02\u0346" +
		"\u0342\x03\x02\x02\x02\u0346\u0343\x03\x02\x02\x02\u0346\u0344\x03\x02" +
		"\x02\x02\u0346\u0345\x03\x02\x02\x02\u0347m\x03\x02\x02\x02\u0348\u0349" +
		"\t\x03\x02\x02\u0349o\x03\x02\x02\x02\u034A\u034B\t\x04\x02\x02\u034B" +
		"q\x03\x02\x02\x02\u034C\u034D\x05\xA6T\x02\u034D\u034E\x07Y\x02\x02\u034E" +
		"\u0350\x03\x02\x02\x02\u034F\u034C\x03\x02\x02\x02\u0350\u0353\x03\x02" +
		"\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352" +
		"\u0354\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354\u0355\x07~\x02" +
		"\x02\u0355\u0356\x05\xA6T\x02\u0356s\x03\x02\x02\x02\u0357\u0358\x07~" +
		"\x02\x02\u0358\u0359\x05j6\x02\u0359\u035B\x03\x02\x02\x02\u035A\u035C" +
		"\x05v<\x02\u035B\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C" +
		"u\x03\x02\x02\x02\u035D\u0366\x07Q\x02\x02\u035E\u0363\x05x=\x02\u035F" +
		"\u0360\x07X\x02\x02\u0360\u0362\x05x=\x02\u0361\u035F\x03\x02\x02\x02" +
		"\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03" +
		"\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366" +
		"\u035E\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u0368\x03\x02" +
		"\x02\x02\u0368\u0369\x07R\x02\x02\u0369w\x03\x02\x02\x02\u036A\u036B\x06" +
		"=\x02\x02\u036B\u0371\x05z>\x02\u036C\u036D\x05\xA6T\x02\u036D\u036E\x07" +
		"Z\x02\x02\u036E\u036F\x05z>\x02\u036F\u0371\x03\x02\x02\x02\u0370\u036A" +
		"\x03\x02\x02\x02\u0370\u036C\x03\x02\x02\x02\u0371y\x03\x02\x02\x02\u0372" +
		"\u0384\x05\xC8e\x02\u0373\u0384\x05t;\x02\u0374\u037D\x07S\x02\x02\u0375" +
		"\u037A\x05z>\x02\u0376\u0377\x07X\x02\x02\u0377\u0379\x05z>\x02\u0378" +
		"\u0376\x03\x02\x02\x02\u0379\u037C\x03\x02\x02\x02\u037A\u0378\x03\x02" +
		"\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C" +
		"\u037A\x03\x02\x02\x02\u037D\u0375\x03\x02\x02\x02\u037D\u037E\x03\x02" +
		"\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u0381\x07X\x02\x02\u0380\u037F" +
		"\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02" +
		"\u0382\u0384\x07T\x02\x02\u0383\u0372\x03\x02\x02\x02\u0383\u0373\x03" +
		"\x02\x02\x02\u0383\u0374\x03\x02\x02\x02\u0384{\x03\x02\x02\x02\u0385" +
		"\u0389\x05\xC8e\x02\u0386\u0389\x05t;\x02\u0387\u0389\x05~@\x02\u0388" +
		"\u0385\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0387\x03\x02" +
		"\x02\x02\u0389}\x03\x02\x02\x02\u038A\u0393\x07S\x02\x02\u038B\u0390\x05" +
		"|?\x02\u038C\u038D\x07X\x02\x02\u038D\u038F\x05|?\x02\u038E\u038C\x03" +
		"\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0390" +
		"\u0391\x03\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02" +
		"\x02\x02\u0393\u038B\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
		"\u0396\x03\x02\x02\x02\u0395\u0397\x07X\x02\x02\u0396\u0395\x03\x02\x02" +
		"\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399\x07" +
		"T\x02\x02\u0399\x7F\x03\x02\x02\x02\u039A\u039B\x07~\x02\x02\u039B\u039C" +
		"\x07\x1F\x02\x02\u039C\u039D\x05\xA6T\x02\u039D\u039E\x05\x82B\x02\u039E" +
		"\x81\x03\x02\x02\x02\u039F\u03A3\x07S\x02\x02\u03A0\u03A2\x05\x84C\x02" +
		"\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03" +
		"\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5" +
		"\u03A3\x03\x02\x02\x02\u03A6\u03A7\x07T\x02\x02\u03A7\x83\x03\x02\x02" +
		"\x02\u03A8\u03AA\x05\f\x07\x02\u03A9\u03A8\x03\x02\x02\x02\u03AA\u03AD" +
		"\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02" +
		"\u03AC\u03AE\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AE\u03B1\x05" +
		"\x86D\x02\u03AF\u03B1\x07W\x02\x02\u03B0\u03AB\x03\x02\x02\x02\u03B0\u03AF" +
		"\x03\x02\x02\x02\u03B1\x85\x03\x02\x02\x02\u03B2\u03B3\x05\xF8}\x02\u03B3" +
		"\u03B4\x05\x88E\x02\u03B4\u03B5\x07W\x02\x02\u03B5\u03CB\x03\x02\x02\x02" +
		"\u03B6\u03B8\x05\x12\n\x02\u03B7\u03B9\x07W\x02\x02\u03B8\u03B7\x03\x02" +
		"\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03CB\x03\x02\x02\x02\u03BA" +
		"\u03BC\x05\"\x12\x02\u03BB\u03BD\x07W\x02\x02\u03BC\u03BB\x03\x02\x02" +
		"\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03CB\x03\x02\x02\x02\u03BE\u03C0" +
		"\x05\x1A\x0E\x02\u03BF\u03C1\x07W\x02\x02\u03C0\u03BF\x03\x02\x02\x02" +
		"\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03CB\x03\x02\x02\x02\u03C2\u03C4\x05" +
		"\x80A\x02\u03C3\u03C5\x07W\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4\u03C5" +
		"\x03\x02\x02\x02\u03C5\u03CB\x03\x02\x02\x02\u03C6\u03C8\x05\x96L\x02" +
		"\u03C7\u03C9\x07W\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03" +
		"\x02\x02\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03B2\x03\x02\x02\x02\u03CA" +
		"\u03B6\x03\x02\x02\x02\u03CA\u03BA\x03\x02\x02\x02\u03CA\u03BE\x03\x02" +
		"\x02\x02\u03CA\u03C2\x03\x02\x02\x02\u03CA\u03C6\x03\x02\x02\x02\u03CB" +
		"\x87\x03\x02\x02\x02\u03CC\u03CF\x05\x8AF\x02\u03CD\u03CF\x05\x8CG\x02" +
		"\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CD\x03\x02\x02\x02\u03CF\x89\x03" +
		"\x02\x02\x02\u03D0\u03D1\x05\xA6T\x02\u03D1\u03D2\x07Q\x02\x02\u03D2\u03D4" +
		"\x07R\x02\x02\u03D3\u03D5\x05\x8EH\x02\u03D4\u03D3\x03\x02\x02\x02\u03D4" +
		"\u03D5\x03\x02\x02\x02\u03D5\x8B\x03\x02\x02\x02\u03D6\u03D7\x05L\'\x02" +
		"\u03D7\x8D\x03\x02\x02\x02\u03D8\u03D9\x07\x0E\x02\x02\u03D9\u03DA\x05" +
		"|?\x02\u03DA\x8F\x03\x02\x02\x02\u03DB\u03DD\x05t;\x02\u03DC\u03DB\x03" +
		"\x02\x02\x02\u03DD\u03E0\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE" +
		"\u03DF\x03\x02\x02\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02" +
		"\x02\x02\u03E1\u03E3\x07%\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3" +
		"\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x07!\x02\x02" +
		"\u03E5\u03E6\x05j6\x02\u03E6\u03EA\x07S\x02\x02\u03E7\u03E9\x05\x92J\x02" +
		"\u03E8\u03E7\x03\x02\x02\x02\u03E9\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03" +
		"\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03ED\u03EE\x07T\x02\x02\u03EE\x91\x03\x02\x02" +
		"\x02\u03EF\u03F3\x07.\x02\x02\u03F0\u03F2\x05\x94K\x02\u03F1\u03F0\x03" +
		"\x02\x02\x02\u03F2\u03F5\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3" +
		"\u03F4\x03\x02\x02\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5\u03F3\x03\x02" +
		"\x02\x02\u03F6\u03F7\x05j6\x02\u03F7\u03F8\x07W\x02\x02\u03F8\u0429\x03" +
		"\x02\x02\x02\u03F9\u03FA\x07\x13\x02\x02\u03FA\u0404\x05j6\x02\u03FB\u03FC" +
		"\x07:\x02\x02\u03FC\u0401\x05j6\x02\u03FD\u03FE\x07X\x02\x02\u03FE\u0400" +
		"\x05j6\x02\u03FF\u03FD\x03\x02\x02\x02\u0400\u0403\x03\x02\x02\x02\u0401" +
		"\u03FF\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0405\x03\x02" +
		"\x02\x02\u0403\u0401\x03\x02\x02\x02\u0404\u03FB\x03\x02\x02\x02\u0404" +
		"\u0405\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0407\x07W\x02" +
		"\x02\u0407\u0429\x03\x02\x02\x02\u0408\u0409\x07&\x02\x02\u0409\u0413" +
		"\x05j6\x02\u040A\u040B\x07:\x02\x02\u040B\u0410\x05j6\x02\u040C\u040D" +
		"\x07X\x02\x02\u040D\u040F\x05j6\x02\u040E\u040C\x03\x02\x02\x02\u040F" +
		"\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02" +
		"\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
		"\u040A\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0415\x03\x02" +
		"\x02\x02\u0415\u0416\x07W\x02\x02\u0416\u0429\x03\x02\x02\x02\u0417\u0418" +
		"\x07>\x02\x02\u0418\u0419\x05j6\x02\u0419\u041A\x07W\x02\x02\u041A\u0429" +
		"\x03\x02\x02\x02\u041B\u041C\x07+\x02\x02\u041C\u041D\x05j6\x02\u041D" +
		"\u041E\x07D\x02\x02\u041E\u0423\x05j6\x02\u041F\u0420\x07X\x02\x02\u0420" +
		"\u0422\x05j6\x02\u0421\u041F\x03\x02\x02\x02\u0422\u0425\x03\x02\x02\x02" +
		"\u0423\u0421\x03\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x03" +
		"\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0426\u0427\x07W\x02\x02\u0427" +
		"\u0429\x03\x02\x02\x02\u0428\u03EF\x03\x02\x02\x02\u0428\u03F9\x03\x02" +
		"\x02\x02\u0428\u0408\x03\x02\x02\x02\u0428\u0417\x03\x02\x02\x02\u0428" +
		"\u041B\x03\x02\x02\x02\u0429\x93\x03\x02\x02\x02\u042A\u042B\t\x05\x02" +
		"\x02\u042B\x95\x03\x02\x02\x02\u042C\u042D\x07-\x02\x02\u042D\u042F\x05" +
		"\xA6T\x02\u042E\u0430\x05\x14\v\x02\u042F\u042E\x03\x02\x02\x02\u042F" +
		"\u0430\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0434\x05\x98" +
		"M\x02\u0432\u0433\x07\x1B\x02\x02\u0433\u0435\x05\xF6|\x02\u0434\u0432" +
		"\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02" +
		"\u0436\u0437\x05\x9EP\x02\u0437\x97\x03\x02\x02\x02\u0438\u043A\x07Q\x02" +
		"\x02\u0439\u043B\x05\x9AN\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B" +
		"\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x07R\x02\x02" +
		"\u043D\x99\x03\x02\x02\x02\u043E\u0443\x05\x9CO\x02\u043F\u0440\x07X\x02" +
		"\x02\u0440\u0442\x05\x9CO\x02\u0441\u043F\x03\x02\x02\x02\u0442\u0445" +
		"\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02" +
		"\u0444\u0446\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0446\u0447\x06" +
		"N\x03\x02\u0447\x9B\x03\x02\x02\x02\u0448\u044A\x05t;\x02\u0449\u0448" +
		"\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02" +
		"\u044B\u044C\x03\x02\x02\x02\u044C\u044E\x03\x02\x02\x02\u044D\u044B\x03" +
		"\x02\x02\x02\u044E\u0456\x05\xF8}\x02\u044F\u0451\x05t;\x02\u0450\u044F" +
		"\x03\x02\x02\x02\u0451\u0454\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02" +
		"\u0452\u0453\x03\x02\x02\x02\u0453\u0455\x03\x02\x02\x02\u0454\u0452\x03" +
		"\x02\x02\x02\u0455\u0457\x07\x7F\x02\x02\u0456\u0452\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\x05\xA6" +
		"T\x02\u0459\x9D\x03\x02\x02\x02\u045A\u045F\x07S\x02\x02\u045B\u045E\x05" +
		"(\x15\x02\u045C\u045E\x058\x1D\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045C" +
		"\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02" +
		"\u045F\u0460\x03\x02\x02\x02\u0460\u0462\x03\x02\x02\x02\u0461\u045F\x03" +
		"\x02\x02\x02\u0462\u0463\x07T\x02\x02\u0463\x9F\x03\x02\x02\x02\u0464" +
		"\u0468\x07S\x02\x02\u0465\u0467\x05\xA2R\x02\u0466\u0465\x03\x02\x02\x02" +
		"\u0467\u046A\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0469\x03" +
		"\x02\x02\x02\u0469\u046B\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046B" +
		"\u046C\x07T\x02\x02\u046C\xA1\x03\x02\x02\x02\u046D\u046E\x05\xA4S\x02" +
		"\u046E\u046F\x07W\x02\x02\u046F\u0473\x03\x02\x02\x02\u0470\u0473\x05" +
		"\xAAV\x02\u0471\u0473\x05\xACW\x02\u0472\u046D\x03\x02\x02\x02\u0472\u0470" +
		"\x03\x02\x02\x02\u0472\u0471\x03\x02\x02\x02\u0473\xA3\x03\x02\x02\x02" +
		"\u0474\u0476\x05\x10\t\x02\u0475\u0474\x03\x02\x02\x02\u0476\u0479\x03" +
		"\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478" +
		"\u0482\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u047A\u047B\x07?\x02" +
		"\x02\u047B\u047C\x05\xA6T\x02\u047C\u047D\x07Z\x02\x02\u047D\u047E\x05" +
		"\xC8e\x02\u047E\u0483\x03\x02\x02\x02\u047F\u0480\x05\xF8}\x02\u0480\u0481" +
		"\x05L\'\x02\u0481\u0483\x03\x02\x02\x02\u0482\u047A\x03\x02\x02\x02\u0482" +
		"\u047F\x03\x02\x02\x02\u0483\xA5\x03\x02\x02\x02\u0484\u0485\t\x06\x02" +
		"\x02\u0485\xA7\x03\x02\x02\x02\u0486\u0487\t\x07\x02\x02\u0487\xA9\x03" +
		"\x02\x02\x02\u0488\u048A\x05\x0E\b\x02\u0489\u0488\x03\x02\x02\x02\u048A" +
		"\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02" +
		"\x02\x02\u048C\u0492\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E" +
		"\u0493\x05\x12\n\x02\u048F\u0493\x05\"\x12\x02\u0490\u0493\x05\x96L\x02" +
		"\u0491\u0493\x05\x1A\x0E\x02\u0492\u048E\x03\x02\x02\x02\u0492\u048F\x03" +
		"\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492\u0491\x03\x02\x02\x02\u0493" +
		"\xAB\x03\x02\x02\x02\u0494\u0510\x05\xA0Q\x02\u0495\u0496\x07\x04\x02" +
		"\x02\u0496\u0499\x05\xC8e\x02\u0497\u0498\x07`\x02\x02\u0498\u049A\x05" +
		"\xC8e\x02\u0499\u0497\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
		"\u049B\x03\x02\x02\x02\u049B\u049C\x07W\x02\x02\u049C\u0510\x03\x02\x02" +
		"\x02\u049D\u049E\x07\x1A\x02\x02\u049E\u049F\x07Q\x02\x02\u049F\u04A0" +
		"\x05\xC8e\x02\u04A0\u04A1\x07R\x02\x02\u04A1\u04A4\x05\xACW\x02\u04A2" +
		"\u04A3\x07\x11\x02\x02\u04A3\u04A5\x05\xACW\x02\u04A4\u04A2\x03\x02\x02" +
		"\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u0510\x03\x02\x02\x02\u04A6\u04A7" +
		"\x07\x18\x02\x02\u04A7\u04A8\x07Q\x02\x02\u04A8\u04A9\x05\xBE`\x02\u04A9" +
		"\u04AA\x07R\x02\x02\u04AA\u04AB\x05\xACW\x02\u04AB\u0510\x03\x02\x02\x02" +
		"\u04AC\u04AD\x07C\x02\x02\u04AD\u04AE\x07Q\x02\x02\u04AE\u04AF\x05\xC8" +
		"e\x02\u04AF\u04B0\x07R\x02\x02\u04B0\u04B1\x05\xACW\x02\u04B1\u0510\x03" +
		"\x02\x02\x02\u04B2\u04B3\x07\x0F\x02\x02\u04B3\u04B4\x05\xACW\x02\u04B4" +
		"\u04B5\x07C\x02\x02\u04B5\u04B6\x07Q\x02\x02\u04B6\u04B7\x05\xC8e\x02" +
		"\u04B7\u04B8\x07R\x02\x02\u04B8\u04B9\x07W\x02\x02\u04B9\u0510\x03\x02" +
		"\x02\x02\u04BA\u04BB\x07=\x02\x02\u04BB\u04C5\x05\xA0Q\x02\u04BC\u04BE" +
		"\x05\xAEX\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02" +
		"\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C2\x03" +
		"\x02\x02\x02\u04C1\u04C3\x05\xB2Z\x02\u04C2\u04C1\x03\x02\x02\x02\u04C2" +
		"\u04C3\x03\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C6\x05\xB2" +
		"Z\x02\u04C5\u04BD\x03\x02\x02\x02\u04C5\u04C4\x03\x02\x02\x02\u04C6\u0510" +
		"\x03\x02\x02\x02\u04C7\u04C8\x07=\x02\x02\u04C8\u04C9\x05\xB4[\x02\u04C9" +
		"\u04CD\x05\xA0Q\x02\u04CA\u04CC\x05\xAEX\x02\u04CB\u04CA\x03\x02\x02\x02" +
		"\u04CC\u04CF\x03\x02\x02\x02\u04CD\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03" +
		"\x02\x02\x02\u04CE\u04D1\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04D0" +
		"\u04D2\x05\xB2Z\x02\u04D1\u04D0\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02" +
		"\x02\u04D2\u0510\x03\x02\x02\x02\u04D3\u04D4\x075\x02\x02\u04D4\u04D5" +
		"\x07Q\x02\x02\u04D5\u04D6\x05\xC8e\x02\u04D6\u04D7\x07R\x02\x02\u04D7" +
		"\u04DB\x07S\x02\x02\u04D8\u04DA\x05\xBA^\x02\u04D9\u04D8\x03\x02\x02\x02" +
		"\u04DA\u04DD\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03" +
		"\x02\x02\x02\u04DC\u04E1\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE" +
		"\u04E0\x05\xBC_\x02\u04DF\u04DE\x03\x02\x02\x02\u04E0\u04E3\x03\x02\x02" +
		"\x02\u04E1\u04DF\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04E4" +
		"\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E4\u04E5\x07T\x02\x02" +
		"\u04E5\u0510\x03\x02\x02\x02\u04E6\u04E7\x076\x02\x02\u04E7\u04E8\x07" +
		"Q\x02\x02\u04E8\u04E9\x05\xC8e\x02\u04E9\u04EA\x07R\x02\x02\u04EA\u04EB" +
		"\x05\xA0Q\x02\u04EB\u0510\x03\x02\x02\x02\u04EC\u04EE\x07/\x02\x02\u04ED" +
		"\u04EF\x05\xC8e\x02\u04EE\u04ED\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02" +
		"\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u0510\x07W\x02\x02\u04F1\u04F2" +
		"\x078\x02\x02\u04F2\u04F3\x05\xC8e\x02\u04F3\u04F4\x07W\x02\x02\u04F4" +
		"\u0510\x03\x02\x02\x02\u04F5\u04F7\x07\x06\x02\x02\u04F6\u04F8\x05\xA6" +
		"T\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9" +
		"\x03\x02\x02\x02\u04F9\u0510\x07W\x02\x02\u04FA\u04FC\x07\r\x02\x02\u04FB" +
		"\u04FD\x05\xA6T\x02\u04FC\u04FB\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02" +
		"\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0510\x07W\x02\x02\u04FF\u0500" +
		"\x07E\x02\x02\u0500\u0501\x05\xC8e\x02\u0501\u0502\x07W\x02\x02\u0502" +
		"\u0510\x03\x02\x02\x02\u0503\u0510\x07W\x02\x02\u0504\u0505\x05\xC8e\x02" +
		"\u0505\u0506\x07W\x02\x02\u0506\u0510\x03\x02\x02\x02\u0507\u0509\x05" +
		"\xD8m\x02\u0508\u050A\x07W\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A" +
		"\x03\x02\x02\x02\u050A\u0510\x03\x02\x02\x02\u050B\u050C\x05\xA6T\x02" +
		"\u050C\u050D\x07`\x02\x02\u050D\u050E\x05\xACW\x02\u050E\u0510\x03\x02" +
		"\x02\x02\u050F\u0494\x03\x02\x02\x02\u050F\u0495\x03\x02\x02\x02\u050F" +
		"\u049D\x03\x02\x02\x02\u050F\u04A6\x03\x02\x02\x02\u050F\u04AC\x03\x02" +
		"\x02\x02\u050F\u04B2\x03\x02\x02\x02\u050F\u04BA\x03\x02\x02\x02\u050F" +
		"\u04C7\x03\x02\x02\x02\u050F\u04D3\x03\x02\x02\x02\u050F\u04E6\x03\x02" +
		"\x02\x02\u050F\u04EC\x03\x02\x02\x02\u050F\u04F1\x03\x02\x02\x02\u050F" +
		"\u04F5\x03\x02\x02\x02\u050F\u04FA\x03\x02\x02\x02\u050F\u04FF\x03\x02" +
		"\x02\x02\u050F\u0503\x03\x02\x02\x02\u050F\u0504\x03\x02\x02\x02\u050F" +
		"\u0507\x03\x02\x02\x02\u050F\u050B\x03\x02\x02\x02\u0510\xAD\x03\x02\x02" +
		"\x02\u0511\u0512\x07\t\x02\x02\u0512\u0516\x07Q\x02\x02\u0513\u0515\x05" +
		"\x10\t\x02\u0514\u0513\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516" +
		"\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0519\x03\x02" +
		"\x02\x02\u0518\u0516\x03\x02\x02\x02\u0519\u051A\x05\xB0Y\x02\u051A\u051B" +
		"\x05\xA6T\x02\u051B\u051C\x07R\x02\x02\u051C\u051D\x05\xA0Q\x02\u051D" +
		"\xAF\x03\x02\x02\x02\u051E\u0523\x05j6\x02\u051F\u0520\x07n\x02\x02\u0520" +
		"\u0522\x05j6\x02\u0521\u051F\x03\x02\x02\x02\u0522\u0525\x03\x02\x02\x02" +
		"\u0523\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\xB1\x03" +
		"\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0526\u0527\x07\x16\x02\x02\u0527" +
		"\u0528\x05\xA0Q\x02\u0528\xB3\x03\x02\x02\x02\u0529\u052A\x07Q\x02\x02" +
		"\u052A\u052C\x05\xB6\\\x02\u052B\u052D\x07W\x02\x02\u052C\u052B\x03\x02" +
		"\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E" +
		"\u052F\x07R\x02\x02\u052F\xB5\x03\x02\x02\x02\u0530\u0535\x05\xB8]\x02" +
		"\u0531\u0532\x07W\x02\x02\u0532\u0534\x05\xB8]\x02\u0533\u0531\x03\x02" +
		"\x02\x02\u0534\u0537\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535" +
		"\u0536\x03\x02\x02\x02\u0536\xB7\x03\x02\x02\x02\u0537\u0535\x03\x02\x02" +
		"\x02\u0538\u053A\x05\x10\t\x02\u0539\u0538\x03\x02\x02\x02\u053A\u053D" +
		"\x03\x02\x02\x02\u053B\u0539\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02" +
		"\u053C\u0543\x03\x02\x02\x02\u053D\u053B\x03\x02\x02\x02\u053E\u053F\x05" +
		"\xE2r\x02\u053F\u0540\x05P)\x02\u0540\u0544\x03\x02\x02\x02\u0541\u0542" +
		"\x07?\x02\x02\u0542\u0544\x05\xA6T\x02\u0543\u053E\x03\x02\x02\x02\u0543" +
		"\u0541\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0546\x07Z\x02" +
		"\x02\u0546\u0547\x05\xC8e\x02\u0547\u054A\x03\x02\x02\x02\u0548\u054A" +
		"\x05j6\x02\u0549\u053B\x03\x02\x02\x02\u0549\u0548\x03\x02\x02\x02\u054A" +
		"\xB9\x03\x02\x02\x02\u054B\u054C\x05\xBC_\x02\u054C\u054D\x07`\x02\x02" +
		"\u054D\u054F\x03\x02\x02\x02\u054E\u054B\x03\x02\x02\x02\u054F\u0550\x03" +
		"\x02\x02\x02\u0550\u054E\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551" +
		"\u0553\x03\x02\x02\x02\u0552\u0554\x05\xA2R\x02\u0553\u0552\x03\x02\x02" +
		"\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556" +
		"\x03\x02\x02\x02\u0556\xBB\x03\x02\x02\x02\u0557\u055D\x07\b\x02\x02\u0558" +
		"\u055E\x05\xC8e\x02\u0559\u055E\x07\x83\x02\x02\u055A\u055B\x05\xF8}\x02" +
		"\u055B\u055C\x05\xA6T\x02\u055C\u055E\x03\x02\x02\x02\u055D\u0558\x03" +
		"\x02\x02\x02\u055D\u0559\x03\x02\x02\x02\u055D\u055A\x03\x02\x02\x02\u055E" +
		"\u0561\x03\x02\x02\x02\u055F\u0561\x07\x0E\x02\x02\u0560\u0557\x03\x02" +
		"\x02\x02\u0560\u055F\x03\x02\x02\x02\u0561\xBD\x03\x02\x02\x02\u0562\u056F" +
		"\x05\xC2b\x02\u0563\u0565\x05\xC0a\x02\u0564\u0563\x03\x02\x02\x02\u0564" +
		"\u0565\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0568\x07W\x02" +
		"\x02\u0567\u0569\x05\xC8e\x02\u0568\u0567\x03\x02\x02\x02\u0568\u0569" +
		"\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u056C\x07W\x02\x02" +
		"\u056B\u056D\x05\xC4c\x02\u056C\u056B\x03\x02\x02\x02\u056C\u056D\x03" +
		"\x02\x02\x02\u056D\u056F\x03\x02\x02\x02\u056E\u0562\x03\x02\x02\x02\u056E" +
		"\u0564\x03\x02\x02\x02\u056F\xBF\x03\x02\x02\x02\u0570\u0573\x05\xA4S" +
		"\x02\u0571\u0573\x05\xC4c\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0571" +
		"\x03\x02\x02\x02\u0573\xC1\x03\x02\x02\x02\u0574\u0576\x05\x10\t\x02\u0575" +
		"\u0574\x03\x02\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577\u0575\x03\x02" +
		"\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u057C\x03\x02\x02\x02\u0579" +
		"\u0577\x03\x02\x02\x02\u057A\u057D\x05\xF8}\x02\u057B\u057D\x07?\x02\x02" +
		"\u057C\u057A\x03\x02\x02\x02\u057C\u057B\x03\x02\x02\x02\u057D\u057E\x03" +
		"\x02\x02\x02\u057E\u057F\x05P)\x02\u057F\u0580\x07`\x02\x02\u0580\u0581" +
		"\x05\xC8e\x02\u0581\xC3\x03\x02\x02\x02\u0582\u0587\x05\xC8e\x02\u0583" +
		"\u0584\x07X\x02\x02\u0584\u0586\x05\xC8e\x02\u0585\u0583\x03\x02\x02\x02" +
		"\u0586\u0589\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0588\x03" +
		"\x02\x02\x02\u0588\xC5\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u058A" +
		"\u058E\x05\xA6T\x02\u058B\u058E\x077\x02\x02\u058C\u058E\x074\x02\x02" +
		"\u058D\u058A\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D\u058C\x03" +
		"\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0590\x05\u0102\x82\x02" +
		"\u0590\xC7\x03\x02\x02\x02\u0591\u0592\be\x01\x02\u0592\u05BD\x05\xD6" +
		"l\x02\u0593\u05BD\x05\xC6d\x02\u0594\u0595\x05\xF8}\x02\u0595\u059B\x07" +
		"}\x02\x02\u0596\u0598\x05\xFC\x7F\x02\u0597\u0596\x03\x02\x02\x02\u0597" +
		"\u0598\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599\u059C\x05\xA6" +
		"T\x02\u059A\u059C\x07#\x02\x02\u059B\u0597\x03\x02\x02\x02\u059B\u059A" +
		"\x03\x02\x02\x02\u059C\u05BD\x03\x02\x02\x02\u059D\u059E\x05V,\x02\u059E" +
		"\u05A0\x07}\x02\x02\u059F\u05A1\x05\xFC\x7F\x02\u05A0\u059F\x03\x02\x02" +
		"\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A3" +
		"\x07#\x02\x02\u05A3\u05BD\x03\x02\x02\x02\u05A4\u05BD\x05\xD8m\x02\u05A5" +
		"\u05A6\t\b\x02\x02\u05A6\u05BD\x05\xC8e\x13\u05A7\u05AB\x07Q\x02\x02\u05A8" +
		"\u05AA\x05t;\x02\u05A9\u05A8\x03\x02\x02\x02\u05AA\u05AD\x03\x02\x02\x02" +
		"\u05AB\u05A9\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC\u05AE\x03" +
		"\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AE\u05B3\x05\xF8}\x02\u05AF" +
		"\u05B0\x07m\x02\x02\u05B0\u05B2\x05\xF8}\x02\u05B1\u05AF\x03\x02\x02\x02" +
		"\u05B2\u05B5\x03\x02\x02\x02\u05B3\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03" +
		"\x02\x02\x02\u05B4\u05B6\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B6" +
		"\u05B7\x07R\x02\x02\u05B7\u05B8\x05\xC8e\x12\u05B8\u05BD\x03\x02\x02\x02" +
		"\u05B9\u05BA\x07#\x02\x02\u05BA\u05BD\x05\xE4s\x02\u05BB\u05BD\x05\xD0" +
		"i\x02\u05BC\u0591\x03\x02\x02\x02\u05BC\u0593\x03\x02\x02\x02\u05BC\u0594" +
		"\x03\x02\x02\x02\u05BC\u059D\x03\x02\x02\x02\u05BC\u05A4\x03\x02\x02\x02" +
		"\u05BC\u05A5\x03\x02\x02\x02\u05BC\u05A7\x03\x02\x02\x02\u05BC\u05B9\x03" +
		"\x02\x02\x02\u05BC\u05BB\x03\x02\x02\x02\u05BD\u0611\x03\x02\x02\x02\u05BE" +
		"\u05BF\f\x10\x02\x02\u05BF\u05C0\t\t\x02\x02\u05C0\u0610\x05\xC8e\x11" +
		"\u05C1\u05C2\f\x0F\x02\x02\u05C2\u05C3\t\n\x02\x02\u05C3\u0610\x05\xC8" +
		"e\x10\u05C4\u05CC\f\x0E\x02\x02\u05C5\u05C6\x07\\\x02\x02\u05C6\u05CD" +
		"\x07\\\x02\x02\u05C7\u05C8\x07[\x02\x02\u05C8\u05C9\x07[\x02\x02\u05C9" +
		"\u05CD\x07[\x02\x02\u05CA\u05CB\x07[\x02\x02\u05CB\u05CD\x07[\x02\x02" +
		"\u05CC\u05C5\x03\x02\x02\x02\u05CC\u05C7\x03\x02\x02\x02\u05CC\u05CA\x03" +
		"\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u0610\x05\xC8e\x0F\u05CF" +
		"\u05D0\f\r\x02\x02\u05D0\u05D1\t\v\x02\x02\u05D1\u0610\x05\xC8e\x0E\u05D2" +
		"\u05D3\f\v\x02\x02\u05D3\u05D4\t\f\x02\x02\u05D4\u0610\x05\xC8e\f\u05D5" +
		"\u05D6\f\n\x02\x02\u05D6\u05D7\x07m\x02\x02\u05D7\u0610\x05\xC8e\v\u05D8" +
		"\u05D9\f\t\x02\x02\u05D9\u05DA\x07o\x02\x02\u05DA\u0610\x05\xC8e\n\u05DB" +
		"\u05DC\f\b\x02\x02\u05DC\u05DD\x07n\x02\x02\u05DD\u0610\x05\xC8e\t\u05DE" +
		"\u05DF\f\x07\x02\x02\u05DF\u05E0\x07e\x02\x02\u05E0\u0610\x05\xC8e\b\u05E1" +
		"\u05E2\f\x06\x02\x02\u05E2\u05E3\x07f\x02\x02\u05E3\u0610\x05\xC8e\x07" +
		"\u05E4\u05E5\f\x05\x02\x02\u05E5\u05E6\x07_\x02\x02\u05E6\u05E7\x05\xC8" +
		"e\x02\u05E7\u05E8\x07`\x02\x02\u05E8\u05E9\x05\xC8e\x05\u05E9\u0610\x03" +
		"\x02\x02\x02\u05EA\u05EB\f\x04\x02\x02\u05EB\u05EC\t\r\x02\x02\u05EC\u0610" +
		"\x05\xC8e\x04\u05ED\u05EE\f\x1B\x02\x02\u05EE\u05EF\x07U\x02\x02\u05EF" +
		"\u05F0\x05\xC8e\x02\u05F0\u05F1\x07V\x02\x02\u05F1\u0610\x03\x02\x02\x02" +
		"\u05F2\u05F3\f\x1A\x02\x02\u05F3\u05FF\x07Y\x02\x02\u05F4\u0600\x05\xA6" +
		"T\x02\u05F5\u0600\x05\xC6d\x02\u05F6\u0600\x077\x02\x02\u05F7\u05F9\x07" +
		"#\x02\x02\u05F8\u05FA\x05\xF4{\x02\u05F9\u05F8\x03\x02\x02\x02\u05F9\u05FA" +
		"\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u0600\x05\xE8u\x02" +
		"\u05FC\u05FD\x074\x02\x02\u05FD\u0600\x05\xFE\x80\x02\u05FE\u0600\x05" +
		"\xEEx\x02\u05FF\u05F4\x03\x02\x02\x02\u05FF\u05F5\x03\x02\x02\x02\u05FF" +
		"\u05F6\x03\x02\x02\x02\u05FF\u05F7\x03\x02\x02\x02\u05FF\u05FC\x03\x02" +
		"\x02\x02\u05FF\u05FE\x03\x02\x02\x02\u0600\u0610\x03\x02\x02\x02\u0601" +
		"\u0602\f\x18\x02\x02\u0602\u0604\x07}\x02\x02\u0603\u0605\x05\xFC\x7F" +
		"\x02\u0604\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605\u0606" +
		"\x03\x02\x02\x02\u0606\u0610\x05\xA6T\x02\u0607\u0608\f\x14\x02\x02\u0608" +
		"\u0610\t\x0E\x02\x02\u0609\u060A\f\f\x02\x02\u060A\u060D\x07\x1D\x02\x02" +
		"\u060B\u060E\x05\xF8}\x02\u060C\u060E\x05\xCAf\x02\u060D\u060B\x03\x02" +
		"\x02\x02\u060D\u060C\x03\x02\x02\x02\u060E\u0610\x03\x02\x02\x02\u060F" +
		"\u05BE\x03\x02\x02\x02\u060F\u05C1\x03\x02\x02\x02\u060F\u05C4\x03\x02" +
		"\x02\x02\u060F\u05CF\x03\x02\x02\x02\u060F\u05D2\x03\x02\x02\x02\u060F" +
		"\u05D5\x03\x02\x02\x02\u060F\u05D8\x03\x02\x02\x02\u060F\u05DB\x03\x02" +
		"\x02\x02\u060F\u05DE\x03\x02\x02\x02\u060F\u05E1\x03\x02\x02\x02\u060F" +
		"\u05E4\x03\x02\x02\x02\u060F\u05EA\x03\x02\x02\x02\u060F\u05ED\x03\x02" +
		"\x02\x02\u060F\u05F2\x03\x02\x02\x02\u060F\u0601\x03\x02\x02\x02\u060F" +
		"\u0607\x03\x02\x02\x02\u060F\u0609\x03\x02\x02\x02\u0610\u0613\x03\x02" +
		"\x02\x02\u0611\u060F\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612" +
		"\xC9\x03\x02\x02\x02\u0613\u0611\x03\x02\x02\x02\u0614\u0616\x05\x10\t" +
		"\x02\u0615\u0614\x03\x02\x02\x02\u0616\u0619\x03\x02\x02\x02\u0617\u0615" +
		"\x03\x02\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\u061A\x03\x02\x02\x02" +
		"\u0619\u0617\x03\x02\x02\x02\u061A\u061E\x05\xF8}\x02\u061B\u061D\x05" +
		"t;\x02\u061C\u061B\x03\x02\x02\x02\u061D\u0620\x03\x02\x02\x02\u061E\u061C" +
		"\x03\x02\x02\x02\u061E\u061F\x03\x02\x02\x02\u061F\u0621\x03\x02\x02\x02" +
		"\u0620\u061E\x03\x02\x02\x02\u0621\u0622\x05L\'\x02\u0622\u062B\x03\x02" +
		"\x02\x02\u0623\u0624\x05\xF8}\x02\u0624\u0626\x07Q\x02\x02\u0625\u0627" +
		"\x05\xCCg\x02\u0626\u0625\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02" +
		"\u0627\u0628\x03\x02\x02\x02\u0628\u0629\x07R\x02\x02\u0629\u062B\x03" +
		"\x02\x02\x02\u062A\u0617\x03\x02\x02\x02\u062A\u0623\x03\x02\x02\x02\u062B" +
		"\xCB\x03\x02\x02\x02\u062C\u0631\x05\xCEh\x02\u062D\u062E\x07X\x02\x02" +
		"\u062E\u0630\x05\xCEh\x02\u062F\u062D\x03\x02\x02\x02\u0630\u0633\x03" +
		"\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632" +
		"\xCD\x03\x02\x02\x02\u0633\u0631\x03\x02\x02\x02\u0634\u0635\x05\xCAf" +
		"\x02\u0635\xCF\x03\x02\x02\x02\u0636\u0637\x05\xD2j\x02\u0637\u0638\x07" +
		"|\x02\x02\u0638\u0639\x05\xD4k\x02\u0639\xD1\x03\x02\x02\x02\u063A\u0651" +
		"\x05\xA6T\x02\u063B\u063D\x07Q\x02\x02\u063C\u063E\x05b2\x02\u063D\u063C" +
		"\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u063F\x03\x02\x02\x02" +
		"\u063F\u0651\x07R\x02\x02\u0640\u0641\x07Q\x02\x02\u0641\u0646\x05\xA6" +
		"T\x02\u0642\u0643\x07X\x02\x02\u0643\u0645\x05\xA6T\x02\u0644\u0642\x03" +
		"\x02\x02\x02\u0645\u0648\x03\x02\x02\x02\u0646\u0644";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u0649\x03\x02\x02\x02" +
		"\u0648\u0646\x03\x02\x02\x02\u0649\u064A\x07R\x02\x02\u064A\u0651\x03" +
		"\x02\x02\x02\u064B\u064D\x07Q\x02\x02\u064C\u064E\x05f4\x02\u064D\u064C" +
		"\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02" +
		"\u064F\u0651\x07R\x02\x02\u0650\u063A\x03\x02\x02\x02\u0650\u063B\x03" +
		"\x02\x02\x02\u0650\u0640\x03\x02\x02\x02\u0650\u064B\x03\x02\x02\x02\u0651" +
		"\xD3\x03\x02\x02\x02\u0652\u0655\x05\xC8e\x02\u0653\u0655\x05\xA0Q\x02" +
		"\u0654\u0652\x03\x02\x02\x02\u0654\u0653\x03\x02\x02\x02\u0655\xD5\x03" +
		"\x02\x02\x02\u0656\u0657\x07Q\x02\x02\u0657\u0658\x05\xC8e\x02\u0658\u0659" +
		"\x07R\x02\x02\u0659\u0669\x03\x02\x02\x02\u065A\u0669\x077\x02\x02\u065B" +
		"\u0669\x074\x02\x02\u065C\u0669\x05l7\x02\u065D\u0669\x05\xA6T\x02\u065E" +
		"\u065F\x050\x19\x02\u065F\u0660\x07Y\x02\x02\u0660\u0661\x07\v\x02\x02" +
		"\u0661\u0669\x03\x02\x02\x02\u0662\u0666\x05\xF4{\x02\u0663\u0667\x05" +
		"\u0100\x81\x02\u0664\u0665\x077\x02\x02\u0665\u0667\x05\u0102\x82\x02" +
		"\u0666\u0663\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0667\u0669\x03" +
		"\x02\x02\x02\u0668\u0656\x03\x02\x02\x02\u0668\u065A\x03\x02\x02\x02\u0668" +
		"\u065B\x03\x02\x02\x02\u0668\u065C\x03\x02\x02\x02\u0668\u065D\x03\x02" +
		"\x02\x02\u0668\u065E\x03\x02\x02\x02\u0668\u0662\x03\x02\x02\x02\u0669" +
		"\xD7\x03\x02\x02\x02\u066A\u066B\x075\x02\x02\u066B\u066C\x07Q\x02\x02" +
		"\u066C\u066D\x05\xC8e\x02\u066D\u066E\x07R\x02\x02\u066E\u0672\x07S\x02" +
		"\x02\u066F\u0671\x05\xDAn\x02\u0670\u066F\x03\x02\x02\x02\u0671\u0674" +
		"\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02" +
		"\u0673\u0675\x03\x02\x02\x02\u0674\u0672\x03\x02\x02\x02\u0675\u0676\x07" +
		"T\x02\x02\u0676\xD9\x03\x02\x02\x02\u0677\u0689\x07\b\x02\x02\u0678\u068A" +
		"\x05\xC4c\x02\u0679\u067C\x07P\x02\x02\u067A\u067B\x07X\x02\x02\u067B" +
		"\u067D\x07\x0E\x02\x02\u067C\u067A\x03\x02\x02\x02\u067C\u067D\x03\x02" +
		"\x02\x02\u067D\u068A\x03\x02\x02\x02\u067E\u0683\x05\xDEp\x02\u067F\u0680" +
		"\x07X\x02\x02\u0680\u0682\x05\xDEp\x02\u0681\u067F\x03\x02\x02\x02\u0682" +
		"\u0685\x03\x02\x02\x02\u0683\u0681\x03\x02\x02\x02\u0683\u0684\x03\x02" +
		"\x02\x02\u0684\u0687\x03\x02\x02\x02\u0685\u0683\x03\x02\x02\x02\u0686" +
		"\u0688\x05\xDCo\x02\u0687\u0686\x03\x02\x02\x02\u0687\u0688\x03\x02\x02" +
		"\x02\u0688\u068A\x03\x02\x02\x02\u0689\u0678\x03\x02\x02\x02\u0689\u0679" +
		"\x03\x02\x02\x02\u0689\u067E\x03\x02\x02\x02\u068A\u068B\x03\x02\x02\x02" +
		"\u068B\u068C\t\x0F\x02\x02\u068C\u0691\x05\xE0q\x02\u068D\u068E\x07\x0E" +
		"\x02\x02\u068E\u068F\t\x0F\x02\x02\u068F\u0691\x05\xE0q\x02\u0690\u0677" +
		"\x03\x02\x02\x02\u0690\u068D\x03\x02\x02\x02\u0691\xDB\x03\x02\x02\x02" +
		"\u0692\u0693\x07B\x02\x02\u0693\u0694\x05\xC8e\x02\u0694\xDD\x03\x02\x02" +
		"\x02\u0695\u0696\x05\xCAf\x02\u0696\xDF\x03\x02\x02\x02\u0697\u069F\x05" +
		"\xA0Q\x02\u0698\u069A\x05\xA2R\x02\u0699\u0698\x03\x02\x02\x02\u069A\u069D" +
		"\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02" +
		"\u069C\u069F\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E\u0697\x03" +
		"\x02\x02\x02\u069E\u069B\x03\x02\x02\x02\u069F\xE1\x03\x02\x02\x02\u06A0" +
		"\u06A1\x05V,\x02\u06A1\xE3\x03\x02\x02\x02\u06A2\u06A4\x05\xF4{\x02\u06A3" +
		"\u06A2\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\u06A6\x05\xE6t\x02\u06A6\u06A7\x05\xECw\x02\u06A7\u06AC" +
		"\x03\x02\x02\x02\u06A8\u06A9\x05\xE6t\x02\u06A9\u06AA\x05\xEAv\x02\u06AA" +
		"\u06AC\x03\x02\x02\x02\u06AB\u06A3\x03\x02\x02\x02\u06AB\u06A8\x03\x02" +
		"\x02\x02\u06AC\xE5\x03\x02\x02\x02\u06AD\u06AF\x05\xA6T\x02\u06AE\u06B0" +
		"\x05\xF0y\x02\u06AF\u06AE\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02" +
		"\u06B0\u06B8\x03\x02\x02\x02\u06B1\u06B2\x07Y\x02\x02\u06B2\u06B4\x05" +
		"\xA6T\x02\u06B3\u06B5\x05\xF0y\x02\u06B4\u06B3\x03\x02\x02\x02\u06B4\u06B5" +
		"\x03\x02\x02\x02\u06B5\u06B7\x03\x02\x02\x02\u06B6\u06B1\x03\x02\x02\x02" +
		"\u06B7\u06BA\x03\x02\x02\x02\u06B8\u06B6\x03\x02\x02\x02\u06B8\u06B9\x03" +
		"\x02\x02\x02\u06B9\u06BD\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BB" +
		"\u06BD\x05\xFA~\x02\u06BC\u06AD\x03\x02\x02\x02\u06BC\u06BB\x03\x02\x02" +
		"\x02\u06BD\xE7\x03\x02\x02\x02\u06BE\u06C0\x05\xA6T\x02\u06BF\u06C1\x05" +
		"\xF2z\x02\u06C0\u06BF\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1" +
		"\u06C2\x03\x02\x02\x02\u06C2\u06C3\x05\xECw\x02\u06C3\xE9\x03\x02\x02" +
		"\x02\u06C4\u06C5\x07U\x02\x02\u06C5\u06C7\x07V\x02\x02\u06C6\u06C4\x03" +
		"\x02\x02\x02\u06C7\u06C8\x03\x02\x02\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8" +
		"\u06C9\x03\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06DB\x05T+\x02" +
		"\u06CB\u06CC\x07U\x02\x02\u06CC\u06CD\x05\xC8e\x02\u06CD\u06CE\x07V\x02" +
		"\x02\u06CE\u06D0\x03\x02\x02\x02\u06CF\u06CB\x03\x02\x02\x02\u06D0\u06D1" +
		"\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02" +
		"\u06D2\u06D7\x03\x02\x02\x02\u06D3\u06D4\x07U\x02\x02\u06D4\u06D6\x07" +
		"V\x02\x02\u06D5\u06D3\x03\x02\x02\x02\u06D6\u06D9\x03\x02\x02\x02\u06D7" +
		"\u06D5\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06DB\x03\x02" +
		"\x02\x02\u06D9\u06D7\x03\x02\x02\x02\u06DA\u06C6\x03\x02\x02\x02\u06DA" +
		"\u06CF\x03\x02\x02\x02\u06DB\xEB\x03\x02\x02\x02\u06DC\u06DE\x05\u0102" +
		"\x82\x02\u06DD\u06DF\x05$\x13\x02\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF" +
		"\x03\x02\x02\x02\u06DF\xED\x03\x02\x02\x02\u06E0\u06E1\x05\xF4{\x02\u06E1" +
		"\u06E2\x05\u0100\x81\x02\u06E2\xEF\x03\x02\x02\x02\u06E3\u06E4\x07\\\x02" +
		"\x02\u06E4\u06E7\x07[\x02\x02\u06E5\u06E7\x05\xFC\x7F\x02\u06E6\u06E3" +
		"\x03\x02\x02\x02\u06E6\u06E5\x03\x02\x02\x02\u06E7\xF1\x03\x02\x02\x02" +
		"\u06E8\u06E9\x07\\\x02\x02\u06E9\u06EC\x07[\x02\x02\u06EA\u06EC\x05\xF4" +
		"{\x02\u06EB\u06E8\x03\x02\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EC\xF3" +
		"\x03\x02\x02\x02\u06ED\u06EE\x07\\\x02\x02\u06EE\u06EF\x05\xF6|\x02\u06EF" +
		"\u06F0\x07[\x02\x02\u06F0\xF5\x03\x02\x02\x02\u06F1\u06F6\x05\xF8}\x02" +
		"\u06F2\u06F3\x07X\x02\x02\u06F3\u06F5\x05\xF8}\x02\u06F4\u06F2\x03\x02" +
		"\x02\x02\u06F5\u06F8\x03\x02\x02\x02\u06F6\u06F4\x03\x02\x02\x02\u06F6" +
		"\u06F7\x03\x02\x02\x02\u06F7\xF7\x03\x02\x02\x02\u06F8\u06F6\x03\x02\x02" +
		"\x02\u06F9\u06FB\x05t;\x02\u06FA\u06F9\x03\x02\x02\x02\u06FB\u06FE\x03" +
		"\x02\x02\x02\u06FC\u06FA\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD" +
		"\u0701\x03\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF\u0702\x05\xE2" +
		"r\x02\u0700\u0702\x05\xFA~\x02\u0701\u06FF\x03\x02\x02\x02\u0701\u0700" +
		"\x03\x02\x02\x02\u0702\u070D\x03\x02\x02\x02\u0703\u0705\x05t;\x02\u0704" +
		"\u0703\x03\x02\x02\x02\u0705\u0708\x03\x02\x02\x02\u0706\u0704\x03\x02" +
		"\x02\x02\u0706\u0707\x03\x02\x02\x02\u0707\u0709\x03\x02\x02\x02\u0708" +
		"\u0706\x03\x02\x02\x02\u0709\u070A\x07U\x02\x02\u070A\u070C\x07V\x02\x02" +
		"\u070B\u0706\x03\x02\x02\x02\u070C\u070F\x03\x02\x02\x02\u070D\u070B\x03" +
		"\x02\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\xF9\x03\x02\x02\x02\u070F" +
		"\u070D\x03\x02\x02\x02\u0710\u0711\t\x10\x02\x02\u0711\xFB\x03\x02\x02" +
		"\x02\u0712\u0713\x07\\\x02\x02\u0713\u0718\x05Z.\x02\u0714\u0715\x07X" +
		"\x02\x02\u0715\u0717\x05Z.\x02\u0716\u0714\x03\x02\x02\x02\u0717\u071A" +
		"\x03\x02\x02\x02\u0718\u0716\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02" +
		"\u0719\u071B\x03\x02\x02\x02\u071A\u0718\x03\x02\x02\x02\u071B\u071C\x07" +
		"[\x02\x02\u071C\xFD\x03\x02\x02\x02\u071D\u0727\x05\u0102\x82\x02\u071E" +
		"\u0720\x07Y\x02\x02\u071F\u0721\x05\xFC\x7F\x02\u0720\u071F\x03\x02\x02" +
		"\x02\u0720\u0721\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0724" +
		"\x05\xA6T\x02\u0723\u0725\x05\u0102\x82\x02\u0724\u0723\x03\x02\x02\x02" +
		"\u0724\u0725\x03\x02\x02\x02\u0725\u0727\x03\x02\x02\x02\u0726\u071D\x03" +
		"\x02\x02\x02\u0726\u071E\x03\x02\x02\x02\u0727\xFF\x03\x02\x02\x02\u0728" +
		"\u0729\x074\x02\x02\u0729\u072E\x05\xFE\x80\x02\u072A\u072B\x05\xA6T\x02" +
		"\u072B\u072C\x05\u0102\x82\x02\u072C\u072E\x03\x02\x02\x02\u072D\u0728" +
		"\x03\x02\x02\x02\u072D\u072A\x03\x02\x02\x02\u072E\u0101\x03\x02\x02\x02" +
		"\u072F\u0731\x07Q\x02\x02\u0730\u0732\x05\xC4c\x02\u0731\u0730\x03\x02" +
		"\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732\u0733\x03\x02\x02\x02\u0733" +
		"\u0734\x07R\x02\x02\u0734\u0103\x03\x02\x02\x02\xE9\u0105\u0109\u010B" +
		"\u0110\u0112\u0119\u011E\u0126\u012F\u0134\u013B\u0143\u014A\u0156\u015A" +
		"\u015F\u0163\u0167\u016B\u0175\u017D\u0185\u0189\u0190\u0197\u019B\u019E" +
		"\u01A1\u01AA\u01B0\u01B5\u01B8\u01BE\u01C4\u01C8\u01CC\u01D4\u01DD\u01E4" +
		"\u01EA\u01EE\u01FA\u0203\u0208\u020E\u0212\u021E\u0225\u0232\u0237\u0241" +
		"\u0249\u0253\u025C\u0267\u026C\u0275\u027F\u0284\u028D\u0293\u029A\u029F" +
		"\u02A7\u02AB\u02AD\u02B6\u02B9\u02BD\u02C1\u02C7\u02CC\u02D0\u02D8\u02DF" +
		"\u02E5\u02E7\u02EE\u02F4\u02FA\u02FD\u0307\u0311\u0317\u031E\u0322\u032B" +
		"\u0331\u033C\u0346\u0351\u035B\u0363\u0366\u0370\u037A\u037D\u0380\u0383" +
		"\u0388\u0390\u0393\u0396\u03A3\u03AB\u03B0\u03B8\u03BC\u03C0\u03C4\u03C8" +
		"\u03CA\u03CE\u03D4\u03DE\u03E2\u03EA\u03F3\u0401\u0404\u0410\u0413\u0423" +
		"\u0428\u042F\u0434\u043A\u0443\u044B\u0452\u0456\u045D\u045F\u0468\u0472" +
		"\u0477\u0482\u048B\u0492\u0499\u04A4\u04BF\u04C2\u04C5\u04CD\u04D1\u04DB" +
		"\u04E1\u04EE\u04F7\u04FC\u0509\u050F\u0516\u0523\u052C\u0535\u053B\u0543" +
		"\u0549\u0550\u0555\u055D\u0560\u0564\u0568\u056C\u056E\u0572\u0577\u057C" +
		"\u0587\u058D\u0597\u059B\u05A0\u05AB\u05B3\u05BC\u05CC\u05F9\u05FF\u0604" +
		"\u060D\u060F\u0611\u0617\u061E\u0626\u062A\u0631\u063D\u0646\u064D\u0650" +
		"\u0654\u0666\u0668\u0672\u067C\u0683\u0687\u0689\u0690\u069B\u069E\u06A3" +
		"\u06AB\u06AF\u06B4\u06B8\u06BC\u06C0\u06C8\u06D1\u06D7\u06DA\u06DE\u06E6" +
		"\u06EB\u06F6\u06FC\u0701\u0706\u070D\u0718\u0720\u0724\u0726\u072D\u0731";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaParser._serializedATNSegment0,
			JavaParser._serializedATNSegment1,
			JavaParser._serializedATNSegment2,
			JavaParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
		}

		return JavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.SEMI);
		} else {
			return this.getToken(JavaParser.SEMI, i);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	public modularCompulationUnit(): ModularCompulationUnitContext | undefined {
		return this.tryGetRuleContext(0, ModularCompulationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class ModularCompulationUnitContext extends ParserRuleContext {
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getRuleContext(0, ModuleDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modularCompulationUnit; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterModularCompulationUnit) {
			listener.enterModularCompulationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitModularCompulationUnit) {
			listener.exitModularCompulationUnit(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(JavaParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(JavaParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEALED, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NON_SEALED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(JavaParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext[];
	public typeList(i: number): TypeListContext;
	public typeList(i?: number): TypeListContext | TypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext(i, TypeListContext);
		}
	}
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PERMITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITAND);
		} else {
			return this.getToken(JavaParser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(JavaParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeList(): TypeListContext[];
	public typeList(i: number): TypeListContext;
	public typeList(i?: number): TypeListContext | TypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext(i, TypeListContext);
		}
	}
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PERMITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeTypeOrVoid; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeTypeOrVoid) {
			listener.enterTypeTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeTypeOrVoid) {
			listener.exitTypeTypeOrVoid(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericConstructorDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterGenericConstructorDeclaration) {
			listener.enterGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitGenericConstructorDeclaration) {
			listener.exitGenericConstructorDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
}


export class CompactConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_compactConstructorDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCompactConstructorDeclaration) {
			listener.enterCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCompactConstructorDeclaration) {
			listener.exitCompactConstructorDeclaration(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceBodyDeclaration) {
			listener.enterInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceBodyDeclaration) {
			listener.exitInterfaceBodyDeclaration(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(JavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodModifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterGenericInterfaceMethodDeclaration) {
			listener.enterGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitGenericInterfaceMethodDeclaration) {
			listener.exitGenericInterfaceMethodDeclaration(this);
		}
	}
}


export class InterfaceCommonBodyDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceCommonBodyDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceCommonBodyDeclaration) {
			listener.enterInterfaceCommonBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceCommonBodyDeclaration) {
			listener.exitInterfaceCommonBodyDeclaration(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	public packageName(): PackageNameContext[];
	public packageName(i: number): PackageNameContext;
	public packageName(i?: number): PackageNameContext | PackageNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageNameContext);
		} else {
			return this.getRuleContext(i, PackageNameContext);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_packageName; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPackageName) {
			listener.enterPackageName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPackageName) {
			listener.exitPackageName(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(JavaParser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public formalParameter(): FormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	public formalParameterList(): FormalParameterListContext[];
	public formalParameterList(i: number): FormalParameterListContext;
	public formalParameterList(i?: number): FormalParameterListContext | FormalParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterListContext);
		} else {
			return this.getRuleContext(i, FormalParameterListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(JavaParser.THIS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_receiverParameter; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterReceiverParameter) {
			listener.enterReceiverParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitReceiverParameter) {
			listener.exitReceiverParameter(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ELLIPSIS, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
}


export class LambdaLVTIListContext extends ParserRuleContext {
	public lambdaLVTIParameter(): LambdaLVTIParameterContext[];
	public lambdaLVTIParameter(i: number): LambdaLVTIParameterContext;
	public lambdaLVTIParameter(i?: number): LambdaLVTIParameterContext | LambdaLVTIParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaLVTIParameterContext);
		} else {
			return this.getRuleContext(i, LambdaLVTIParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaLVTIList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLambdaLVTIList) {
			listener.enterLambdaLVTIList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLambdaLVTIList) {
			listener.exitLambdaLVTIList(this);
		}
	}
}


export class LambdaLVTIParameterContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(JavaParser.VAR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaLVTIParameter; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLambdaLVTIParameter) {
			listener.enterLambdaLVTIParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLambdaLVTIParameter) {
			listener.exitLambdaLVTIParameter(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
	public TEXT_BLOCK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TEXT_BLOCK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_literal; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
}


export class AltAnnotationQualifiedNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(JavaParser.AT, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_altAnnotationQualifiedName; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAltAnnotationQualifiedName) {
			listener.enterAltAnnotationQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAltAnnotationQualifiedName) {
			listener.exitAltAnnotationQualifiedName(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public annotationFieldValues(): AnnotationFieldValuesContext | undefined {
		return this.tryGetRuleContext(0, AnnotationFieldValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotation; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
}


export class AnnotationFieldValuesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public annotationFieldValue(): AnnotationFieldValueContext[];
	public annotationFieldValue(i: number): AnnotationFieldValueContext;
	public annotationFieldValue(i?: number): AnnotationFieldValueContext | AnnotationFieldValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationFieldValueContext);
		} else {
			return this.getRuleContext(i, AnnotationFieldValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationFieldValues; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationFieldValues) {
			listener.enterAnnotationFieldValues(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationFieldValues) {
			listener.exitAnnotationFieldValues(this);
		}
	}
}


export class AnnotationFieldValueContext extends ParserRuleContext {
	public annotationValue(): AnnotationValueContext {
		return this.getRuleContext(0, AnnotationValueContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationFieldValue; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationFieldValue) {
			listener.enterAnnotationFieldValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationFieldValue) {
			listener.exitAnnotationFieldValue(this);
		}
	}
}


export class AnnotationValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RBRACE, 0); }
	public annotationValue(): AnnotationValueContext[];
	public annotationValue(i: number): AnnotationValueContext;
	public annotationValue(i?: number): AnnotationValueContext | AnnotationValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationValueContext);
		} else {
			return this.getRuleContext(i, AnnotationValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationValue; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationValue) {
			listener.enterAnnotationValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationValue) {
			listener.exitAnnotationValue(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(JavaParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationTypeElementRest) {
			listener.enterAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationTypeElementRest) {
			listener.exitAnnotationTypeElementRest(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) {
			listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) {
			listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationMethodRest) {
			listener.enterAnnotationMethodRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationMethodRest) {
			listener.exitAnnotationMethodRest(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationConstantRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAnnotationConstantRest) {
			listener.enterAnnotationConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAnnotationConstantRest) {
			listener.exitAnnotationConstantRest(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(JavaParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(JavaParser.MODULE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPEN, 0); }
	public moduleDirective(): ModuleDirectiveContext[];
	public moduleDirective(i: number): ModuleDirectiveContext;
	public moduleDirective(i?: number): ModuleDirectiveContext | ModuleDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDirectiveContext);
		} else {
			return this.getRuleContext(i, ModuleDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_moduleDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.REQUIRES, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public requiresModifier(): RequiresModifierContext[];
	public requiresModifier(i: number): RequiresModifierContext;
	public requiresModifier(i?: number): RequiresModifierContext | RequiresModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiresModifierContext);
		} else {
			return this.getRuleContext(i, RequiresModifierContext);
		}
	}
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXPORTS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TO, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPENS, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.USES, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROVIDES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_moduleDirective; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterModuleDirective) {
			listener.enterModuleDirective(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitModuleDirective) {
			listener.exitModuleDirective(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_requiresModifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRequiresModifier) {
			listener.enterRequiresModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRequiresModifier) {
			listener.exitRequiresModifier(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	public RECORD(): TerminalNode { return this.getToken(JavaParser.RECORD, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public recordHeader(): RecordHeaderContext {
		return this.getRuleContext(0, RecordHeaderContext);
	}
	public recordBody(): RecordBodyContext {
		return this.getRuleContext(0, RecordBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_recordDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRecordDeclaration) {
			listener.enterRecordDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRecordDeclaration) {
			listener.exitRecordDeclaration(this);
		}
	}
}


export class RecordHeaderContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public recordComponentList(): RecordComponentListContext | undefined {
		return this.tryGetRuleContext(0, RecordComponentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_recordHeader; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRecordHeader) {
			listener.enterRecordHeader(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRecordHeader) {
			listener.exitRecordHeader(this);
		}
	}
}


export class RecordComponentListContext extends ParserRuleContext {
	public recordComponent(): RecordComponentContext[];
	public recordComponent(i: number): RecordComponentContext;
	public recordComponent(i?: number): RecordComponentContext | RecordComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordComponentContext);
		} else {
			return this.getRuleContext(i, RecordComponentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_recordComponentList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRecordComponentList) {
			listener.enterRecordComponentList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRecordComponentList) {
			listener.exitRecordComponentList(this);
		}
	}
}


export class RecordComponentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_recordComponent; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRecordComponent) {
			listener.enterRecordComponent(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRecordComponent) {
			listener.exitRecordComponent(this);
		}
	}
}


export class RecordBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext[];
	public compactConstructorDeclaration(i: number): CompactConstructorDeclarationContext;
	public compactConstructorDeclaration(i?: number): CompactConstructorDeclarationContext | CompactConstructorDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompactConstructorDeclarationContext);
		} else {
			return this.getRuleContext(i, CompactConstructorDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_recordBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterRecordBody) {
			listener.enterRecordBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitRecordBody) {
			listener.exitRecordBody(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VAR, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MODULE, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPEN, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.REQUIRES, 0); }
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXPORTS, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPENS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TO, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.USES, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROVIDES, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WHEN, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WITH, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.YIELD, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEALED, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RECORD, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_identifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MODULE, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPEN, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.REQUIRES, 0); }
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXPORTS, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OPENS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TO, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.USES, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROVIDES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WITH, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEALED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localTypeDeclaration; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLocalTypeDeclaration) {
			listener.enterLocalTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLocalTypeDeclaration) {
			listener.exitLocalTypeDeclaration(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel!: BlockContext;
	public _statementExpression!: ExpressionContext;
	public _identifierLabel!: IdentifierContext;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COLON, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IF, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FOR, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CONTINUE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.YIELD, 0); }
	public switchExpression(): SwitchExpressionContext | undefined {
		return this.tryGetRuleContext(0, SwitchExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(JavaParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITOR);
		} else {
			return this.getToken(JavaParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catchType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(JavaParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resourceSpecification; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.SEMI);
		} else {
			return this.getToken(JavaParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resources; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VAR, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resource; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COLON);
		} else {
			return this.getToken(JavaParser.COLON, i);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression!: ExpressionContext;
	public _enumConstantName!: Token;
	public _varName!: IdentifierContext;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CASE, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate!: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.SEMI);
		} else {
			return this.getToken(JavaParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forControl; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forInit; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(JavaParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VAR, 0); }
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}
export class SquareBracketExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(JavaParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(JavaParser.RBRACK, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSquareBracketExpression) {
			listener.enterSquareBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSquareBracketExpression) {
			listener.exitSquareBracketExpression(this);
		}
	}
}
export class MemberReferenceExpressionContext extends ExpressionContext {
	public _bop!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(JavaParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMemberReferenceExpression) {
			listener.enterMemberReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMemberReferenceExpression) {
			listener.exitMemberReferenceExpression(this);
		}
	}
}
export class MethodCallExpressionContext extends ExpressionContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodCallExpression) {
			listener.enterMethodCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodCallExpression) {
			listener.exitMethodCallExpression(this);
		}
	}
}
export class MethodReferenceExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(JavaParser.COLONCOLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NEW, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodReferenceExpression) {
			listener.enterMethodReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodReferenceExpression) {
			listener.exitMethodReferenceExpression(this);
		}
	}
}
export class ExpressionSwitchContext extends ExpressionContext {
	public switchExpression(): SwitchExpressionContext {
		return this.getRuleContext(0, SwitchExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExpressionSwitch) {
			listener.enterExpressionSwitch(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExpressionSwitch) {
			listener.exitExpressionSwitch(this);
		}
	}
}
export class PostIncrementDecrementOperatorExpressionContext extends ExpressionContext {
	public _postfix!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPostIncrementDecrementOperatorExpression) {
			listener.enterPostIncrementDecrementOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPostIncrementDecrementOperatorExpression) {
			listener.exitPostIncrementDecrementOperatorExpression(this);
		}
	}
}
export class UnaryOperatorExpressionContext extends ExpressionContext {
	public _prefix!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEC, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BANG, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterUnaryOperatorExpression) {
			listener.enterUnaryOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitUnaryOperatorExpression) {
			listener.exitUnaryOperatorExpression(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITAND);
		} else {
			return this.getToken(JavaParser.BITAND, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
}
export class ObjectCreationExpressionContext extends ExpressionContext {
	public NEW(): TerminalNode { return this.getToken(JavaParser.NEW, 0); }
	public creator(): CreatorContext {
		return this.getRuleContext(0, CreatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterObjectCreationExpression) {
			listener.enterObjectCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitObjectCreationExpression) {
			listener.exitObjectCreationExpression(this);
		}
	}
}
export class BinaryOperatorExpressionContext extends ExpressionContext {
	public _bop!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MOD, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUB, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LT);
		} else {
			return this.getToken(JavaParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.GT);
		} else {
			return this.getToken(JavaParser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GE, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NOTEQUAL, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BITAND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OR, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MOD_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBinaryOperatorExpression) {
			listener.enterBinaryOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBinaryOperatorExpression) {
			listener.exitBinaryOperatorExpression(this);
		}
	}
}
export class InstanceOfOperatorExpressionContext extends ExpressionContext {
	public _bop!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(JavaParser.INSTANCEOF, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInstanceOfOperatorExpression) {
			listener.enterInstanceOfOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInstanceOfOperatorExpression) {
			listener.exitInstanceOfOperatorExpression(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _bop!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(JavaParser.COLON, 0); }
	public QUESTION(): TerminalNode { return this.getToken(JavaParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
}
export class ExpressionLambdaContext extends ExpressionContext {
	public lambdaExpression(): LambdaExpressionContext {
		return this.getRuleContext(0, LambdaExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExpressionLambda) {
			listener.enterExpressionLambda(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExpressionLambda) {
			listener.exitExpressionLambda(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public componentPatternList(): ComponentPatternListContext | undefined {
		return this.tryGetRuleContext(0, ComponentPatternListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_pattern; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
}


export class ComponentPatternListContext extends ParserRuleContext {
	public componentPattern(): ComponentPatternContext[];
	public componentPattern(i: number): ComponentPatternContext;
	public componentPattern(i?: number): ComponentPatternContext | ComponentPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPatternContext);
		} else {
			return this.getRuleContext(i, ComponentPatternContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_componentPatternList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterComponentPatternList) {
			listener.enterComponentPatternList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitComponentPatternList) {
			listener.exitComponentPatternList(this);
		}
	}
}


export class ComponentPatternContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_componentPattern; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterComponentPattern) {
			listener.enterComponentPattern(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitComponentPattern) {
			listener.exitComponentPattern(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(JavaParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	public lambdaLVTIList(): LambdaLVTIListContext | undefined {
		return this.tryGetRuleContext(0, LambdaLVTIListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primary; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(JavaParser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public switchLabeledRule(): SwitchLabeledRuleContext[];
	public switchLabeledRule(i: number): SwitchLabeledRuleContext;
	public switchLabeledRule(i?: number): SwitchLabeledRuleContext | SwitchLabeledRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabeledRuleContext);
		} else {
			return this.getRuleContext(i, SwitchLabeledRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchExpression; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}
}


export class SwitchLabeledRuleContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CASE, 0); }
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		return this.getRuleContext(0, SwitchRuleOutcomeContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ARROW, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COLON, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
	public casePattern(): CasePatternContext[];
	public casePattern(i: number): CasePatternContext;
	public casePattern(i?: number): CasePatternContext | CasePatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CasePatternContext);
		} else {
			return this.getRuleContext(i, CasePatternContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	public guard(): GuardContext | undefined {
		return this.tryGetRuleContext(0, GuardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchLabeledRule; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSwitchLabeledRule) {
			listener.enterSwitchLabeledRule(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSwitchLabeledRule) {
			listener.exitSwitchLabeledRule(this);
		}
	}
}


export class GuardContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(JavaParser.WHEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_guard; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterGuard) {
			listener.enterGuard(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitGuard) {
			listener.exitGuard(this);
		}
	}
}


export class CasePatternContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_casePattern; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCasePattern) {
			listener.enterCasePattern(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCasePattern) {
			listener.exitCasePattern(this);
		}
	}
}


export class SwitchRuleOutcomeContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchRuleOutcome; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSwitchRuleOutcome) {
			listener.enterSwitchRuleOutcome(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSwitchRuleOutcome) {
			listener.exitSwitchRuleOutcome(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_creator; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_createdName; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_innerCreator; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInnerCreator) {
			listener.enterInnerCreator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInnerCreator) {
			listener.exitInnerCreator(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocation; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExplicitGenericInvocation) {
			listener.enterExplicitGenericInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExplicitGenericInvocation) {
			listener.exitExplicitGenericInvocation(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
			listener.enterNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
			listener.exitNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeList; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_superSuffix; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterSuperSuffix) {
			listener.enterSuperSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitSuperSuffix) {
			listener.exitSuperSuffix(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) {
			listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) {
			listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arguments; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


