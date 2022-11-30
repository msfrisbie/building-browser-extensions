import { AMAZON_KINDLE_URL } from "consts";
import Image from "next/image";
import bookCover from "../public/bbx_cover.png";

export default function BlogFooter() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center max-w-lg gap-8 text-center p-6 md:p-12">
          <a
            className="book-container"
            target="_blank"
            rel="noreferrer noopener"
            href={AMAZON_KINDLE_URL}
          >
            <div className={`book three-d`}>
              <Image
                src={bookCover}
                alt="Building Browser Extensions by Matt Frisbie"
                priority
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
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
