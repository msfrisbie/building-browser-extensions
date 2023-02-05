import Book from "@components/Book";
import DemoExtension from "@components/DemoExtension";
import Header from "@components/Header";

export default function ExampleChromeExtension(props) {
  return (
    <>
      <Header
        title="Example Chrome Extension | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/example-chrome-extension"
        description="Open source browser extension with dozens of browsable demos. Zero
        NPM packages, one click install, 100% HTML/JS/CSS."
      ></Header>

      <div className="pt-24 flex flex-col items-stretch gap-4 md:gap-24">
        <DemoExtension h1={true}></DemoExtension>
        <Book h2={true}></Book>
      </div>
    </>
  );
}
