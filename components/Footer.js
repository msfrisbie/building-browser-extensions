export default function Footer() {
  return (
    <>
      <footer
        className={
          "flex flex-col items-center justify-center p-8 text-sm text-gray-300 flex flex-col gap-4"
        }
      >
        <span>Copyright Matt Frisbie 2022</span>

        <div className="flex flex-col items-center justify-center gap-2 text-xs">
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
        </div>
      </footer>
    </>
  );
}
