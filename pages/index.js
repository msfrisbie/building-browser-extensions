import Landing from "@components/Landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-6 md:pt-12 text-center">
        <div className="text-3xl text-gray-700">
          <h1>
            The <span className="underline text-orange-500">ultimate</span>
            <br></br>Chrome&nbsp;extension&nbsp;book
          </h1>
        </div>
      </div>
      <Landing />
    </>
  );
}
