import Image from "next/image";
import mockCover from "../public/mock-cover-2.webp";

export default function Home() {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-12">
          <a
            className="pt-8 book-container"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={`book three-d`}>
              <Image
                src={mockCover}
                alt="Building Browser Extensions by Matt Frisbie"
                priority
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
          </a>

          <h1 className="text-center text-4xl">Building Browser Extensions</h1>

          <div className="max-w-md px-8 text-xl text-gray-700 text-center">
            The complete reference for building modern browser extensions in
            Chrome, Firefox, Edge, and Safari.
          </div>

          <div className="text-xl text-gray-400 text-center">
            Available Fall 2022
          </div>
        </div>
      </div>
    </>
  );
}
