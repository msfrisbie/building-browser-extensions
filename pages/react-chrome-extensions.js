import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ReactChromeExtensions() {
  return (
    <>
      <Header
        title="How to build Chrome extensions with React | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/react-chrome-extensions"
        description="The best way to learn how to build Chrome extensions with React, OAuth, and manifest v3"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build Chrome extensions<br></br> with React,
          OAuth, and manifest v3
        </h1>
        <Landing />
      </div>
    </>
  );
}
