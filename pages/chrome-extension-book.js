import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ChromeExtensionBook() {
  return (
    <>
      <Header
        title="The ultimate Chrome extension book | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/chrome-extension-book"
        description="The best book for learning how to build Chrome extensions"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> book for
          learning <br></br>how to build Chrome extensions
        </h1>
        <Landing />
      </div>
    </>
  );
}
