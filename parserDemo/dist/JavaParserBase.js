import { Parser } from "antlr4ts/Parser";
export class JavaParserBase extends Parser {
    constructor(input) {
        super(input);
    }
    /**
     * @deprecated Use `antlr4ts.Parser.isNotIdentifier` instead.
     */
    isNotIdentifierAssign(token) {
        return this.isNotIdentifier(token);
    }
    /**
     * @deprecated Use `antlr4ts.Parser.doLastRecordComponent` instead.
     */
    doLastRecordComponent() {
        return this.doLastRecordComponent(); // Placeholder, actual implementation might vary
    }
}
