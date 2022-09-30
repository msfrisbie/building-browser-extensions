import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import promo1 from "../public/promo1.png";
import promo2 from "../public/promo2.png";
import promo3 from "../public/promo3.png";
import promo4 from "../public/promo4.png";
import promo5 from "../public/promo5.png";

export default function DemoExtension() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 md:gap-12 max-w-lg p-8 text-center">
        <div className="mt-24 md:mt-0 place-self-center shadow-lg">
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
        </div>
        <h1 className="text-3xl bg-white text-blue-500 rounded p-4 w-full border border-blue-500">
          Browser Extension<br></br>Explorer
        </h1>
        <Button
          href="https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf"
          target="_blank"
          rel="noreferrer noopener"
        >
          INSTALL
        </Button>{" "}
        <div className="text-xl text-gray-700 flex flex-col gap-8">
          <div>
            Open source browser extension with dozens of browsable demos. Zero
            NPM packages, one click install, 100% HTML/JS/CSS.
          </div>
        </div>
      </div>
    </div>
  );
}
