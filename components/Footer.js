import { AMAZON_PAPERBACK_URL } from "consts";

export default function Footer() {
  return (
    <>
      <footer
        className={
          "flex flex-col items-center justify-center p-8 text-sm text-gray-300 flex flex-col gap-4"
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2 text-xs">
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/example-chrome-extension"
          >
            Example Chrome Extension
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/table-of-contents"
          >
            Table of Contents
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href={AMAZON_PAPERBACK_URL}
          >
            Get the book
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="https://mattfriz.com"
          >
            About the author
          </a>
          <div className="md:col-span-2">
            <hr />
          </div>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog/manifest-v3-debacle-signals-a-changing-of-the-guard"
          >
            Chrome's Manifest V3 Push Signals Changing of the Guard
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog/cambrian-explosion-of-chatgpt-browser-extensions"
          >
            The Cambrian Explosion of ChatGPT Extensions
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog/ten-things-every-chrome-extension-needs"
          >
            10 Things Every Chrome Extension Needs
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog/what-is-manifest-v3"
          >
            What is Manifest v3?
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/blog/why-are-browser-extensions-important"
          >
            Why are Browser Extensions Important?
          </a>
          <div className="md:col-span-2">
            <hr />
          </div>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/build-chrome-extensions"
          >
            Learn how to build Chrome extensions
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/react-chrome-extensions"
          >
            How to build Chrome extensions with React
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/manifest-v3"
          >
            How to build manifest v3 extensions
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/create-your-own-chrome-extension"
          >
            Create your own Chrome extension
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-tutorial"
          >
            Chrome extension tutorial
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-examples"
          >
            Chrome extension examples
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-tutorial-2022"
          >
            Chrome extension tutorial 2022
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-tutorial-2023"
          >
            Chrome extension tutorial 2023
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-manifest-v2-to-v3"
          >
            Migrate Chrome extension from manifest v2 to v3
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/build-chrome-extension-with-react"
          >
            Build a Chrome extension with React
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-book"
          >
            Chrome extension book
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/chrome-extension-development-book"
          >
            Chrome extension development book
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/how-to-build-chrome-extensions"
          >
            How to build Chrome extensions
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/how-to-build-a-chrome-extension"
          >
            How to build a Chrome extension
          </a>
          <a
            className="text-gray-300 no-underline hover:text-gray-500"
            href="/how-to-publish-chrome-extensions"
          >
            How to publish Chrome extensions
          </a>
        </div>

        <span>Copyright Matt Frisbie 2023</span>
      </footer>
    </>
  );
}
