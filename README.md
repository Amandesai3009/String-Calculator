<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
  <h1>📘 String Calculator (JavaScript)</h1>
  <p>A JavaScript-based string calculator that parses expressions using custom delimiters, inline operator handling, and skips numbers greater than 1000.</p>
  <p><strong>📄 Read the PDF to understand the detailed test case requirements.</p>

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
    <li><code>"2,1001"</code> → returns 2</li>
    <li><code>"1,-2,3"</code> → throws "Negative numbers not allowed: -2"</li>
  </ul>

  <h2>🧪 Running Tests</h2>
  <pre><code>npm test</code></pre>
  <p>Uses Jest to run all tests in <code>test/stringcalculator.test.js</code>.</p>

  <h2>📁 Project Structure</h2>
  <pre><code>.
├── src/
│   └── stringcalculator.js       # Main calculator logic
├── test/
│   └── stringcalculator.test.js  # Test cases using Jest
├── Documents/
│   └── String_Calculator_TestCases.pdf
├── package.json
├── README.html                   # This file
</code></pre>

  <h2>📌 Author & Submission Info</h2>
  <ul>
    <li><strong>Company:</strong> Incubyte</li>
    <li><strong>Language:</strong> JavaScript (Node.js)</li>
    <li><strong>Approach:</strong> TDD (Test-Driven Development)</li>
  </ul>

  <p>✅ All features implemented & tested as per requirements.</p>
</body>
</html>
