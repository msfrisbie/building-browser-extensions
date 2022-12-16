import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ChromeExtensionDevelopmentBook() {
  return (
    <>
      <Header
        title="The ultimate Chrome extension development book | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/chrome-extension-development-book"
        description="The ultimate book for learning how to build Chrome extensions"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">ultimate</span> guide
          for learning <br></br>how to build Chrome extensions
        </h1>
        <Landing />
      </div>
    </>
  );
}
