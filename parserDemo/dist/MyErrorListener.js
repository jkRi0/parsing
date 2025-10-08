import { ConsoleErrorListener } from "antlr4ts/ConsoleErrorListener";
export class MyErrorListener extends ConsoleErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error(`line ${line}, col ${charPositionInLine}: ${msg}`);
    }
}
