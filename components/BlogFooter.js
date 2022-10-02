import Image from "next/image";
import bookCover from "../public/bbx_cover.png";

export default function BlogFooter() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center max-w-lg gap-8 text-center p-12">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.amazon.com/Building-Browser-Extensions-Create-Firefox/dp/148428724X"
          >
            <Image
              src={bookCover}
              alt="Building Browser Extensions by Matt Frisbie"
              objectFit="contain"
              className="shadow-2xl"
              height="600"
            />
          </a>
          <div className="text-xl text-gray-800">
            The complete reference for building modern browser extensions in
            Chrome, Firefox, Edge, and Safari.
          </div>
        </div>
      </div>
    </>
  );
}
