import Header from "@components/Header";
import Landing from "@components/Landing";

export default function BuildChromeExtensions() {
  return (
    <>
      <Header
        title="Learn how to build Chrome extensions | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/build-chrome-extensions"
        description="The best way to learn how to build Chrome extensions"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build Chrome extensions
        </h1>
        <Landing />
      </div>
    </>
  );
}
