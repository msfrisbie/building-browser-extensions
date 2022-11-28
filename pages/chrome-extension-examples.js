import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ChromeExtensionExamples() {
  return (
    <>
      <Header
        title="Chrome extension examples | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/chrome-extension-examples"
        description="The best way to learn how to build Chrome extensions by example"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build Chrome extensions by example
        </h1>
        <Landing />
      </div>
    </>
  );
}
