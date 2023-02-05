import TableOfContents from "@components/TableOfContents";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
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

        <div className="w-full text-lg pb-16">
          <div className="flex flex-col items-center text-start font-light">
            <div className="flex flex-col gap-16 max-w-xl">
              <div className="flex flex-col items-center pt-12">
                <h2 className="text-3xl text-gray-700 text-center max-w-xl">
                  Chrome extensions are{" "}
                  <span className=" text-orange-500">everywhere</span>.
                </h2>
              </div>

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
      </div>

      <div className="flex flex-col items-center py-16">
        <div className="flex flex-col items-stretch max-w-md gap-4">
          <Button
            variant="outline-primary"
            href="/blog/manifest-v3-debacle-signals-a-changing-of-the-guard"
          >
            Chrome's Manifest V3 Push Signals Changing of the Guard
          </Button>
          <Button
            variant="outline-primary"
            href="/blog/cambrian-explosion-of-chatgpt-browser-extensions"
          >
            The Cambrian Explosion of ChatGPT Extensions
          </Button>
          <Button
            variant="outline-primary"
            href="/blog/ten-things-every-chrome-extension-needs"
          >
            10 Things Every Chrome Extension Needs
          </Button>
          <Button variant="outline-primary" href="/blog/what-is-manifest-v3">
            What is Manifest v3?
          </Button>
          <Button
            variant="outline-primary"
            href="/blog/why-are-browser-extensions-important"
          >
            Why are Browser Extensions Important?
          </Button>
        </div>
      </div>

      {/* </div> */}

      {/* <div className="w-full text-lg">
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
      </div> */}

      <div className="bg-blue-100 w-full text-lg">
        <TableOfContents></TableOfContents>
      </div>

      <div className="pt-16">
        <DemoExtension></DemoExtension>
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
              The easiest way to <span className="text-violet-500">Build</span>,{" "}
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
    </>
  );
}
