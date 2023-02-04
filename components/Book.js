import { AMAZON_PAPERBACK_URL } from "consts";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import bookCover from "../public/bbx_cover.png";
import reviews from "../public/reviews.png";

export default function Book() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-12 items-center px-8 text-center">
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

          <div className="max-w-xs" style={{ marginTop: "-1rem" }}>
            <Image
              style={{ zIndex: "-1" }}
              src={reviews}
              alt="☆☆☆☆☆"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center pt-12">
            <h1 className="text-6xl text-gray-700 text-center">
              The <span className=" text-orange-500">ultimate</span> <br></br>
              Chrome extension tutorial
            </h1>
          </div>

          <div className="text-2xl text-gray-500">
            Learn how to build modern Chrome extensions in 2023 <br></br>with
            in-depth examples and detailed tutorials.
          </div>

          <Button
            href={AMAZON_PAPERBACK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="drop-shadow-lg opacity-100 hover:opacity-75 hover:drop-shadow-xl mt-4"
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
