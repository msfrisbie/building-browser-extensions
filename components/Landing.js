import Image from "next/image";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import bookCover from "../public/bbx_cover.png";
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
        className="flex flex-col items-center text-center p-6 md:p-12 font-light"
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
                src={bookCover}
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
          {/* <div className="md:order-1 text-gray-400">Available Fall 2022</div> */}
          <Button
            href="https://www.amazon.com/Building-Browser-Extensions-Create-Firefox/dp/148428724X"
            target="_blank"
            rel="noreferrer noopener"
            className="md:order-1 w-full"
            style={{
              backgroundColor: "rgb(249 115 22)",
              borderColor: "rgb(249 115 22)",
            }}
          >
            PRE-ORDER NOW
          </Button>{" "}
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
        <div className="text-start max-w-xl flex flex-col gap-4">
          <Card className="mt-12 p-8 text-white opacity-75" bg="primary">
            <h2 id="toc" className="text-center text-3xl font-light pb-8">
              Table of Contents
            </h2>
            <div className="flex flex-col gap-8 font-light">
              <div>
                <span className="font-bold">
                  Chapter 1: What Are Browser Extensions?
                </span>{" "}
                covers the history of software extensions and plugins, starting
                with the UNIVAC Series 90 mainframe.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 2: Fundamental Elements of Browser Extensions
                </span>{" "}
                is an introductory chapter that outlines the core pieces of
                browser extensions and how they work together.
              </div>
              <div>
                {" "}
                <span className="font-bold">
                  Chapter 3: Browser Extension Crash Course
                </span>{" "}
                walks you through a quick and dirty tutorial of how to build and
                run a browser extension.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 4: Browser Extension Architecture
                </span>{" "}
                covers in a more detailed way how an extension is actually built
                with manifest files, HTML, JS, and CSS.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 5: The Extension Manifest
                </span>{" "}
                cover in detail the manifest.json file, which is the primary
                file that describes the extensions' file layout, defines its
                permissions and behavior, and describes how it should appear in
                the browser.
              </div>
              <div>
                <span className="font-bold">
                  {" "}
                  Chapter 6: Understanding the Implications of Manifest v3
                </span>{" "}
                covers the ongoing transition from manifest v2 to manifest v3.
                This chapter is of critical importance in the next 18 months as
                browser vendors decide how to handle adblockers.
              </div>
              <div>
                <span className="font-bold">Chapter 7: Background Scripts</span>{" "}
                covers in detail the background script, which is the most
                important piece of the browser extension. It describes what they
                are capable of doing, as well as all the different ways they can
                be used for different types of browser extensions.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 8: Popup and Options Pages
                </span>{" "}
                covers the basic UI elements of browser extensions, the popup
                and options pages.
              </div>
              <div>
                <span className="font-bold">Chapter 9: Content Scripts</span>{" "}
                describes how extensions can insert code and styling into the
                actual page. It covers the myriad of ways in which this can be
                leveraged to completely customize any web browsing experience,
                as well as all the tricky pitfalls that users should be aware
                of.
              </div>
              <div>
                {" "}
                <span className="font-bold">
                  Chapter 10: Devtools Pages
                </span>{" "}
                covers how you can use the Devtools API to add a custom user
                interface into your browser's developer tools window.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 11: Extension and Browser APIs
                </span>{" "}
                is a reference chapter that goes through all the different APIs
                that browser extensions can use to change how the browser
                behaves.
              </div>
              <div>
                <span className="font-bold">Chapter 12: Permissions</span> is a
                reference chapter that goes through all the different
                permissions that a browser extension can request. This is a
                sister chapter to Extension and Browser APIs, since using many
                APIs requires permissions for that API.
              </div>
              <div>
                <span className="font-bold">Chapter 13: Networking</span> covers
                all the different aspects of how chrome extensions can use and
                modify the browser's network capabilities. This chapter also
                covers OAuth implementations, as well as the important
                differences between webRequest and declarativeNetRequest.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 14: Extension Development and Deployment
                </span>{" "}
                covers how to take code files and use them in the browser, both
                locally and in production. It also covers how release cycles and
                updates work in app stores.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 15: Cross-Browser Extensions
                </span>{" "}
                covers the various idiosyncrasies between different browsers, as
                well as ways to have a single codebase be shared between
                multiple browsers. It also covers Safari extension development
                for macOS and iOS.
              </div>
              <div>
                <span className="font-bold">
                  Chapter 16: Tooling and Frameworks
                </span>{" "}
                covers all the ways that programmers can avoid developing
                browser extensions from scratch. This includes how it folds into
                existing frameworks, and also various open source tools that are
                useful for building browser extensions.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
