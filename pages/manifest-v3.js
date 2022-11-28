import Header from "@components/Header";
import Landing from "@components/Landing";

export default function ManifestV3() {
  return (
    <>
      <Header
        title="How to build manifest v3 extensions | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/manifest-v3"
        description="The best way to learn how to build extensions with manifest v3"
      ></Header>

      <div className="flex flex-col items-center pt-12">
        <h1 className="text-center text-gray-700">
          The <span className="underline text-orange-500">best</span> way to
          learn <br></br>how to build extensions with manifest v3
        </h1>
        <Landing />
      </div>
    </>
  );
}
