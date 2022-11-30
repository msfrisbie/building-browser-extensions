import { AMAZON_KINDLE_URL } from "consts";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import bookCover from "../public/bbx_cover.png";

export default function Book() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 md:gap-12 max-w-lg p-8 text-center">
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
        <Button
          href={AMAZON_KINDLE_URL}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            backgroundColor: "rgb(249 115 22)",
            borderColor: "rgb(249 115 22)",
          }}
        >
          GET IT NOW
        </Button>{" "}
        <div className="text-xl">
          The complete reference for building modern browser extensions in
          Chrome, Firefox, Edge, and Safari.
        </div>
      </div>
    </div>
  );
}
