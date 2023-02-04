import Image from "next/image";
import React from "react";
import plasmo from "../public/plasmo.png";
import Book from "./Book";
import DemoExtension from "./DemoExtension";

export default function Landing(props) {
  return (
    <>
      {/* <div className="flex flex-col items-stretch pt-6 md:pt-12 text-center"> */}
      <div className="flex flex-col items-stretch gap-16 w-full">
        <div className="flex flex-col justify-center min-h-screen">
          <Book></Book>
        </div>

        {/* <div className="text-3xl">
          <h1>
            The <span className="underline text-orange-500">ultimate</span>
            <br></br>Chrome&nbsp;extension&nbsp;book
          </h1>
        </div> */}

        {/* <div className="flex flex-col items-center p-6 md:p-12 bg-blue-100 text-center">
          <div className="text-xl text-gray-700 flex flex-col gap-8 max-w-lg">
            <div>
            </div>
            <div>
              {" "}
              Learn how to use Manifest v3, React, and Plasmo to build
              cross-browser extensions.
            </div>
          </div>
        </div> */}

        <div className="w-full text-lg">
          <div className="flex flex-col items-center text-start p-6 md:p-12 font-light">
            <div className="flex flex-col gap-16 max-w-xl">
              <div>Why </div>
              <ul className="list-disc flex flex-col gap-4">
                <li>
                  On average,{" "}
                  <span className="font-semibold text-blue-500">
                    40% of internet users in the United States use an adblocker
                  </span>{" "}
                  on any device; overwhelmingly, these adblockers take the form
                  of browser extensions.{" "}
                </li>
                <li>
                  The tech company Honey, whose primary product is a browser
                  extension, was{" "}
                  <span className="font-semibold text-orange-500">
                    acquired by PayPal in 2020 for $4 billion
                  </span>
                  .{" "}
                </li>
                <li>
                  As of 2021, there were 1.8 million apps in Apple's App Store;{" "}
                  <span className="font-semibold text-blue-500">
                    the Chrome Web Store has 180,000 extensions
                  </span>
                  .
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>

        <div className="plasmo">
          <div className="flex flex-col items-center p-6 md:p-12">
            <div className="flex flex-col items-center max-w-2xl gap-8 text-center">
              <div className="w-48">
                <Image
                  src={plasmo}
                  alt="Plasmo"
                  objectFit="contain"
                  placeholder="blur"
                />
              </div>

              <h2 className="font-extrabold text-violet-12 text-2xl md:text-4xl">
                The easiest way to{" "}
                <span className="text-violet-500">Build</span>,{" "}
                <span className="text-violet-500">Test</span>, and{" "}
                <span className="text-violet-500">Ship</span>
                <br /> browser extensions
              </h2>

              <a
                className="text-2xl font-medium no-underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://plasmo.com"
              >
                <button
                  className="px-8 py-2 text-white bg-violet-700 hover:bg-violet-500 rounded-md"
                  style={{ transition: "background-color 0.3s ease-in-out" }}
                >
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="w-full text-lg">
        <div className="flex flex-col items-center text-start p-6 md:p-12 font-light">
          <div className="flex flex-col gap-6 max-w-xl">
            <a
              href="#introduction"
              id="introduction"
              className="text-center text-4xl font-thin pb-8 no-underline"
            >
              Introduction
            </a>
            <p>
              <span className="italic">
                Building Browser Extensions: Create Modern Extensions for
                Chrome, Safari, Firefox, and Edge
              </span>{" "}
              covers all the knowledge you will need to write cross-browser
              extensions with modern tools. Browser extensions are given access
              to extremely powerful APIs. I believe most developers are blind to
              that power and are unaware of just how much it is within their
              reach. This book is designed to enlighten web developers and
              illuminate the true potential of the browser extension software
              platform.
            </p>
            <p>
              The transition to manifest v3 is upon us, and already it is
              causing problems. If you are confused about what manifest v3 is,
              what are its implications, and how best to navigate the ongoing
              transition, this book is for you. I dedicated an entire chapter to
              the manifest v2/v3 transition.
            </p>
            <p>
              The lingua franca of web development is React, and this book gives
              special attention to the best ways in which you can write a
              browser extension in React. It also covers all the supplemental
              tools you’ll need along the way, such as Webpack, Parcel, and
              Plasmo.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 w-full text-lg">
        <div className="flex flex-col items-center text-start p-6 md:p-12 font-light">
          <div className="flex flex-col gap-16 max-w-xl">
            <a
              href="#toc"
              id="toc"
              className="text-center text-4xl font-thin pb-8 no-underline"
            >
              Table of Contents
            </a>
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
          </div>
        </div>
      </div>

      <DemoExtension></DemoExtension>
    </>
  );
}
