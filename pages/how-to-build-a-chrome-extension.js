import Header from "@components/Header";
import Landing from "@components/Landing";

export default function HowToBuildAChromeExtension() {
  return (
    <>
      <Header
        title="How to build a Chrome extension | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/how-to-build-a-chrome-extension"
        description="The best way to learn how to build a Chrome extension with React"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build a Chrome extension with React
        </h1>
        <Landing />
      </div>
    </>
  );
}
