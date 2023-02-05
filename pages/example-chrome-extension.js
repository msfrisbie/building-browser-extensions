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

      <div className="pt-32">
        <DemoExtension h1={true}></DemoExtension>
      </div>
    </>
  );
}
