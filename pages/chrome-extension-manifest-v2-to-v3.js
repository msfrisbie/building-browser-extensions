import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ChromeExtensionTutorial2023() {
  return (
    <>
      <Header
        title="Migrate Chrome extension from manifest v2 to v3 | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/chrome-extension-manifest-v2-to-v3"
        description="The best way to learn how to migrate Chrome extensions from manifest v2 to manifest v3"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to how to migrate Chrome extensions<br></br> from
          manifest v2 to manifest v3
        </h1>
        <Landing />
      </div>
    </>
  );
}
