import Book from "@components/Book";
import Header from "@components/Header";

export default function BlogPost() {
  return (
    <>
      <Header
        title="React Chrome extension tutorial | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com/blog/what-is-manifest-v3"
        description="Learn how to build a simple Chrome extension using React"
      ></Header>
      <div className="flex flex-col items-center p-6 md:p-16">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <div className="text-4xl">React Chrome Extension Tutorial</div>
          <div className="text-xl">
            Learn how to build a simple Chrome extension using React
          </div>
          <div className="text-sm text-gray-500">12/16/2022</div>
          <hr></hr>

          <div
            dangerouslySetInnerHTML={{
              __html: `
<ol class="list-decimal">
<li>
  <p>
    First, make sure you have Node.js and npm (Node Package Manager)
    installed on your computer. If you don't have these already, you can
    download and install them from the official website (<a
      href="https://nodejs.org/"
      target="_new"
      >https://nodejs.org/</a
    >).
  </p>
</li>
<li>
  <p>
    Next, create a new directory for your extension and navigate to it in
    your terminal.
  </p>
</li>
<li>
  <p>
    In the terminal, run the following command to create a new React app:
  </p>
</li>
</ol>
<pre><code>npx create-react-app my-extension</code></pre>
<ol class="list-decimal" start="4">
<li>
  This will create a new React app in a directory called "my-extension".
  Navigate to this directory:
</li>
</ol>
<pre><code>cd my-extension</code></pre>
<ol class="list-decimal" start="5">
<li>
  Now, you need to create a file called "manifest.json" in the root of your
  extension directory. This file will contain metadata about your extension,
  including its name, description, and permissions. Here is an example
  manifest file that you can use as a starting point:
</li>
</ol>
<pre><code>{
  "manifest_version": 3,
  "name": "My Extension",
  "description": "A simple Chrome extension",
  "version": "1.0",
  "permissions": [
    "activeTab"
  ],
  "action": {
    "default_title": "My Extension",
    "default_popup": "index.html"
  }
}</code></pre>
<ol class="list-decimal" start="6">
<li>
  Next, you need to modify your React app to work as a Chrome extension. In
  the "public" directory, create a new file called "index.html". This file
  will be the main HTML file for your extension's popup window. Here is an
  example of what this file might look like:
</li>
</ol>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<ol class="list-decimal" start="7">
<li>
  Now, open "src/index.js" and modify it to render your React app into the
  "root" div in your extension's popup window. Here is an example of what
  this file might look like:
</li>
</ol>
<pre><code>import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
  document.getElementById('root')
);</code></pre>
<ol class="list-decimal" start="8">
<li>
  Next, you need to build your React app for production. In the terminal,
  run the following command:
</li>
</ol>
<pre><code>npm run build</code></pre>
<p>
This will create a "build" directory with the compiled version of your app.
</p>
<ol class="list-decimal" start="9">
<li>
  Finally, you need to load your extension into Chrome. In Chrome, open the
  "Extensions" page (chrome://extensions/). Enable "Developer mode" by
  clicking the toggle in the top right corner. Then, click the "Load
  unpacked" button and select the "build" directory of your extension.
</li>
</ol>
<p>
Your extension should now be installed and working in Chrome! You can test
it by clicking the extension's icon in the browser toolbar.
</p>

`,
            }}
          />

          <hr></hr>
        </div>
      </div>

      <Book></Book>
    </>
  );
}
