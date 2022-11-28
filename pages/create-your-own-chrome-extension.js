import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ManifestV3() {
  return (
    <>
      <Header
        title="Create your own Chrome extension | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/create-your-own-chrome-extension"
        description="The best way to learn how to create your own Chrome extensions"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to create your own Chrome extensions
        </h1>
        <Landing />
      </div>
    </>
  );
}
