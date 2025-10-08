# HTML Java Syntax Checker (Client-Side)

This project provides a simple HTML-based interface for **client-side Java syntax validation** using ANTLR4. 

## Important Limitations for Vercel Deployment:

**This application DOES NOT compile or execute Java code.** Due to the nature of Vercel's serverless environment (which primarily supports JavaScript, Python, Go, and Ruby runtimes) and the absence of a pre-installed Java Development Kit (JDK), direct Java compilation and execution are not possible within this deployment model. 

Therefore, the "Check Syntax" button on the frontend only performs a client-side syntax check of the Java code using ANTLR-generated JavaScript parsers. It will identify syntax errors but will not produce executable Java bytecode or run the code.

## How it Works:

1.  **Frontend (`index.html`, `style.css`):**
    *   `index.html`: Provides the user interface with a textarea for Java code input and a display area for syntax check results.
    *   `style.css`: Basic styling for the application.
2.  **Client-Side ANTLR Parsing:**
    *   The `JavaLexer.g4` and `JavaParser.g4` grammars are used to generate TypeScript parsers (`src/JavaLexer.ts`, `src/JavaParser.ts`, etc.) using `antlr4ts`.
    *   These TypeScript files are then compiled to JavaScript (`dist/src/JavaLexer.js`, `dist/src/JavaParser.js`, etc.) using `tsc`.
    *   The `index.html` directly loads these generated JavaScript parser files and the ANTLR4 runtime.
    *   When the "Check Syntax" button is clicked, the JavaScript code in `index.html` uses the ANTLR parser to analyze the input Java code. Any syntax errors are reported directly in the browser.
3.  **Backend (`api/compile.js` - Placeholder):**
    *   The `api/compile.js` file is included for Vercel deployment purposes, but it serves as a placeholder. It returns a message indicating that Java compilation and execution are not supported.

## Project Setup (Local Development):

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Generate ANTLR parsers (if grammars change):**
    ```bash
    npx antlr4ts JavaLexer.g4 JavaParser.g4 -o src
    ```
4.  **Compile TypeScript to JavaScript (if TypeScript files change or are regenerated):**
    ```bash
    npx tsc
    ```
5.  **Open `index.html` in your browser** to use the syntax checker locally.

## Deployment to Vercel:

This project can be deployed to Vercel by pushing it to a GitHub repository and linking it to your Vercel account. Vercel will automatically detect the frontend assets and the serverless function. Remember, only client-side syntax validation will be available.
