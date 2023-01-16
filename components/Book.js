import { AMAZON_PAPERBACK_URL } from "consts";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import bookCover from "../public/bbx_cover.png";
import reviews from "../public/reviews.png";

export default function Book() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 md:gap-12 max-w-lg px-8 text-center">
        <div>
          <a
            className="book-container"
            target="_blank"
            rel="noreferrer noopener"
            href={AMAZON_PAPERBACK_URL}
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
          <div className="w-full">
            <Image
              style={{ zIndex: "-1" }}
              src={reviews}
              alt="☆☆☆☆☆"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
        <Button
          href={AMAZON_PAPERBACK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="drop-shadow-lg opacity-100 hover:opacity-75 hover:drop-shadow-xl"
          size="lg"
          style={{
            backgroundColor: "rgb(48 201 65)",
            borderColor: "rgb(48 201 65)",
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
