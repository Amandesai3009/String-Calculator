<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>String Calculator - README</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f9f9f9; color: #333; padding: 2rem; max-width: 900px; margin: auto; }
    h1, h2, h3 { color: #2c3e50; }
    pre { background: #ecf0f1; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    code { background: #ecf0f1; padding: 2px 4px; border-radius: 4px; }
    ul { line-height: 1.6; }
    .badge { display: inline-block; margin-right: 0.5rem; background: #3498db; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; }
  </style>
</head>
<body>
  <h1>📘 String Calculator (JavaScript)</h1>
  <p>A JavaScript-based string calculator that parses expressions using custom delimiters, inline operator handling, and skips numbers greater than 1000.</p>
  <p><strong>📄 Read the PDF in the <code>Documents</code> folder</strong> to understand the detailed test case requirements.</p>

  <h2>✨ Features</h2>
  <ul>
    <li><strong>Custom Delimiters</strong>: Support for delimiters of any length using syntax like <code>//[***]\n1***2***3</code>.</li>
    <li><strong>Multiple Delimiters</strong>: Handle multiple custom delimiters like <code>//[*][%]\n1*2%3</code>.</li>
    <li><strong>Multi-Char Delimiters</strong>: Delimiters longer than one character (e.g., <code>//[**][%%]</code>) are supported.</li>
    <li><strong>Ignore Large Numbers</strong>: Numbers greater than 1000 are ignored.</li>
    <li><strong>Negative Number Handling</strong>: Throws an error for negative numbers and lists them.</li>
    <li><strong>Function Call Tracking</strong>: Tracks how many times <code>add()</code> is called via <code>getCalledCount()</code>.</li>
  </ul>

  <h2>🛠️ Technologies</h2>
  <span class="badge">JavaScript</span>
  <span class="badge">Node.js</span>
  <span class="badge">Jest</span>

  <h2>▶️ Usage</h2>
  <p>To run the calculator and test cases:</p>
  <pre><code>npm install
npm test</code></pre>

  <h3>Sample Inputs</h3>
  <ul>
    <li><code>""</code> → returns 0</li>
    <li><code>"1,2,3"</code> → returns 6</li>
    <li><code>"//[***]\n1***2***3"</code> → returns 6</li>
    <li><code>"//[*][%]\n1*2%3"</code> → returns 6</li>
    <li><code>"
