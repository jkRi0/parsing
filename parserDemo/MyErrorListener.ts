import { ConsoleErrorListener } from "antlr4ts/ConsoleErrorListener";

export class MyErrorListener extends ConsoleErrorListener {
    syntaxError(recognizer: any, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: any) {
        console.error(`line ${line}, col ${charPositionInLine}: ${msg}`);
    }
}
