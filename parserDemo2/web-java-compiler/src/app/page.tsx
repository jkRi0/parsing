'use client';
import React, { useState } from 'react';
import { parseJavaCode } from '../lib/parseJava';

export default function Page() {
  const [code, setCode] = useState(
    `public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}`
  );
  const [output, setOutput] = useState('');

  const onParse = () => {
    try {
      const result = parseJavaCode(code);
      if (result.errors && result.errors.length > 0) {
        setOutput('❌ Errors:\n' + JSON.stringify(result.errors, null, 2));
      } else {
        setOutput(result.treeStr || '✅ No parse tree produced.');
      }
    } catch (err) {
      setOutput('🚨 Exception: ' + String(err));
    }
  };

  return (
    <main className="page">
      <div className="container">
        <h1>ANTLR Java Parser Playground</h1>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={onParse}>Parse</button>

        <pre className="output">
          {output || '🕒 Output will appear here after parsing.'}
        </pre>

        <footer>Built with ANTLR4 & Next.js</footer>
      </div>

      <style jsx>{`
        .page {
          background-color: #0a0a0a;
          color: #f5f5f5;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 16px;
          font-family: 'Consolas', 'Courier New', monospace;
        }

        .container {
          max-width: 800px;
          width: 100%;
        }

        h1 {
          text-align: center;
          color: #f5c94c;
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        textarea {
          width: 100%;
          height: 220px;
          background: #111;
          color: #eee;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px;
          font-size: 14px;
          resize: vertical;
          outline: none;
          transition: border 0.2s ease;
        }

        textarea:focus {
          border-color: #f5c94c;
        }

        button {
          display: block;
          margin: 16px auto;
          padding: 10px 24px;
          background: #f5c94c;
          color: #000;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        button:hover {
          background: #ffd84f;
        }

        .output {
          background: #111;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px;
          white-space: pre-wrap;
          font-size: 14px;
          color: #8aff8a;
          overflow-x: auto;
        }

        footer {
          text-align: center;
          margin-top: 30px;
          font-size: 0.8rem;
          color: #666;
        }
      `}</style>
    </main>
  );
}
