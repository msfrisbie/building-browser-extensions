import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import mockCover from "../public/mock-cover-2.webp";
import promo1 from "../public/promo1.png";
import promo2 from "../public/promo2.png";
import promo3 from "../public/promo3.png";
import promo4 from "../public/promo4.png";
import promo5 from "../public/promo5.png";

export default function Landing() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="flex flex-col items-center text-center p-6 md:p-12"
      >
        <div className="py-16 flex flex-col gap-16 max-w-xl">
          <h1 className="text-3xl text-gray-700">
            <span className="text-blue-700 ">Everything you need </span>
            to build browser extensions.
          </h1>

          <h2>
            Dive right in with{" "}
            <span className="text-green-600">comprehensive&nbsp;examples</span>,{" "}
            <span className="text-orange-600">open&nbsp;source&nbsp;tools</span>
            , <span className="text-teal-500">modern&nbsp;frameworks</span>, and{" "}
            <span className="text-purple-600">cutting-edge&nbsp;platforms</span>
            .
          </h2>
        </div>

        <div className="grid xs:grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-12 max-w-4xl">
          <a
            className="md:order-1 book-container"
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
          <div className="mt-24 md:mt-0 order-2 md:order-1 place-self-center shadow-lg">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={2500}
              variant="dark"
            >
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={promo1}
                  alt="Browser Extension Explorer - Extension environment details, tab and window dashboard"
                  priority
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={promo2}
                  alt="Browser Extension Explorer - Modify extension toolbar icon button, context menu"
                  priority
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={promo3}
                  alt="Browser Extension Explorer - Extension messaging demo"
                  priority
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={promo4}
                  alt="Browser Extension Explorer - Devtools Traffic Monitor"
                  priority
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={promo5}
                  alt="Browser Extension Explorer - Declarative net request"
                  priority
                />
              </Carousel.Item>
            </Carousel>
            {/* <a
              href="https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
              src={browserExtensionExplorer}
              alt="Browser Extension Explorer"
              priority
            />
            </a> */}
          </div>
          <h1 className="md:order-1 text-3xl text-orange-500 rounded p-4 w-full border border-orange-500">
            Building&nbsp;Browser<br></br>Extensions
          </h1>
          <h1 className="order-2 md:order-1 text-3xl bg-white text-blue-500 rounded p-4 w-full border border-blue-500">
            Browser Extension<br></br>Explorer
          </h1>
          <div className="md:order-1 text-gray-400">Available Fall 2022</div>
          {/* <a
            href="https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf"
            target="_blank"
            rel="noreferrer noopener"
            className="order-2 md:order-1 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            INSTALL
          </a> */}
          <Button
            href="https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf"
            target="_blank"
            rel="noreferrer noopener"
            className="order-2 md:order-1 w-full"
          >
            INSTALL
          </Button>{" "}
          <div className="md:order-1 text-xl text-gray-700 flex flex-col gap-8">
            <div>
              The complete reference for building modern browser extensions in
              Chrome, Firefox, Edge, and Safari.
            </div>
          </div>
          <div className="order-2 md:order-1 text-xl text-gray-700 flex flex-col gap-8">
            <div>
              Open source browser extension with dozens of browsable demos. Zero
              NPM packages, one click install, 100% HTML/JS/CSS.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
