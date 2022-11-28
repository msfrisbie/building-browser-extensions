import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ChromeExtensionTutorial2023() {
  return (
    <>
      <Header
        title="Chrome extension tutorial 2023 | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/chrome-extension-tutorial-2023"
        description="The best way to learn how to build Chrome extensions in 2023"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build Chrome extensions in 2023
        </h1>
        <Landing />
      </div>
    </>
  );
}
