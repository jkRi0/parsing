// Core ANTLR import
import antlr4 from 'antlr4';

// Try both default and named exports (covers both ANTLR 4.9–4.13 versions)
import * as JavaLexerModule from '../antlr/JavaLexer.js';
import * as JavaParserModule from '../antlr/JavaParser.js';

// Extract the right exports regardless of format
const JavaLexer: any =
  (JavaLexerModule as any).default || (JavaLexerModule as any).JavaLexer;
const JavaParser: any =
  (JavaParserModule as any).default || (JavaParserModule as any).JavaParser;

// Custom error listener to capture syntax errors
class CollectingErrorListener extends (antlr4 as any).error.ErrorListener {
  public errors: Array<{ line: number; column: number; msg: string }> = [];

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string
  ) {
    this.errors.push({ line, column, msg });
  }
}

// Main parse function
export function parseJavaCode(source: string) {
  try {
    // Step 1: Create input stream
    const chars = new antlr4.InputStream(source);

    // Step 2: Initialize lexer
    const lexer = new JavaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Step 3: Initialize parser
    const parser = new JavaParser(tokens);
    parser.buildParseTrees = true;

    // Step 4: Add custom error listener
    const errorListener = new CollectingErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // Step 5: Parse starting from the root rule (`compilationUnit`)
    const tree = parser.compilationUnit();

    // Step 6: Optional readable tree string
    const treeStr = tree?.toStringTree(parser.ruleNames) ?? '';

    return {
      success: errorListener.errors.length === 0,
      errors: errorListener.errors,
      tree,
      treeStr,
    };
  } catch (err: any) {
    return {
      success: false,
      errors: [{ line: 0, column: 0, msg: err?.message ?? 'Unknown error' }],
      tree: null,
      treeStr: '',
    };
  }
}
