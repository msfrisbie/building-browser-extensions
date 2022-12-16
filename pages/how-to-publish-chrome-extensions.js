import Header from "@components/Header";
import Landing from "@components/Landing";

export default function HowToPublishChromeExtensions() {
  return (
    <>
      <Header
        title="How to publish Chrome extensions | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/how-to-publish-chrome-extensions"
        description="The best way to learn how to publish Chrome extensions with React"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build and publish Chrome extensions with React
        </h1>
        <Landing />
      </div>
    </>
  );
}
