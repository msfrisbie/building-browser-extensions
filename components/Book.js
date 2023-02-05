import { AMAZON_PAPERBACK_URL } from "consts";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import bookCover from "../public/bbx_cover.png";
import reviews from "../public/reviews.png";

export default function Book(props) {
  let header = (
    <h1 className="text-3xl md:text-6xl text-gray-700 text-center max-w-xl mb-0">
      The <span className=" text-orange-500">ultimate</span> <br></br>
      Chrome extension tutorial
    </h1>
  );

  if (props.h2) {
    header = (
      <h2 className="text-3xl md:text-6xl text-gray-700 text-center max-w-xl mb-0">
        The <span className=" text-orange-500">ultimate</span> <br></br>
        Chrome extension tutorial
      </h2>
    );
  }

  return (
    <div className="md:py-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center px-4 md:px-8 py-12 text-center">
        <div>
          <a
            className="book-container scale-50 -my-24 md:scale-95"
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

          {/* Margin/padding here is a hack since 
          responsive negative margins doesnt seem to work */}
          <div className="max-w-xs md:max-w-md -mt-32 md:pt-24">
            <Image
              style={{ zIndex: "-1" }}
              src={reviews}
              alt="☆☆☆☆☆"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <div className="flex flex-col items-center">{header}</div>

          <div className="text-md md:text-2xl text-gray-500 max-w-xl">
            Building Browser Extensions show you how to build modern Chrome
            extensions in 2023 with in-depth examples and detailed tutorials.
          </div>

          <Button
            href={AMAZON_PAPERBACK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="drop-shadow-lg opacity-100 hover:opacity-75 hover:drop-shadow-xl md:mt-4"
            size="lg"
            style={{
              backgroundColor: "rgb(48 201 65)",
              borderColor: "rgb(48 201 65)",
            }}
          >
            GET IT NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
