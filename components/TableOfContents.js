import React from "react";

export default function TableOfContents(props) {
  let header = (
    <h2 className="text-3xl text-blue-500 px-4 w-full text-center">
      Table of Contents
    </h2>
  );

  if (props.h1) {
    header = (
      <h1 className="text-3xl text-blue-500 px-4 w-full text-center">
        Table of Contents
      </h1>
    );
  }

  return (
    <div className="flex flex-col items-center text-start p-6 md:p-12 font-light">
      <div className="flex flex-col gap-16 max-w-xl">
        {header}
        <div className="flex flex-col gap-8 font-light">
          <div>
            <span className="font-bold">
              Chapter 1: What Are Browser Extensions?
            </span>{" "}
            covers the history of software extensions and plugins, starting with
            the UNIVAC Series 90 mainframe.
          </div>
          <div>
            <span className="font-bold">
              Chapter 2: Fundamental Elements of Browser Extensions
            </span>{" "}
            is an introductory chapter that outlines the core pieces of browser
            extensions and how they work together.
          </div>
          <div>
            {" "}
            <span className="font-bold">
              Chapter 3: Browser Extension Crash Course
            </span>{" "}
            walks you through a quick and dirty tutorial of how to build and run
            a browser extension.
          </div>
          <div>
            <span className="font-bold">
              Chapter 4: Browser Extension Architecture
            </span>{" "}
            covers in a more detailed way how an extension is actually built
            with manifest files, HTML, JS, and CSS.
          </div>
          <div>
            <span className="font-bold">Chapter 5: The Extension Manifest</span>{" "}
            cover in detail the manifest.json file, which is the primary file
            that describes the extensions' file layout, defines its permissions
            and behavior, and describes how it should appear in the browser.
          </div>
          <div>
            <span className="font-bold">
              {" "}
              Chapter 6: Understanding the Implications of Manifest v3
            </span>{" "}
            covers the ongoing transition from manifest v2 to manifest v3. This
            chapter is of critical importance in the next 18 months as browser
            vendors decide how to handle adblockers.
          </div>
          <div>
            <span className="font-bold">Chapter 7: Background Scripts</span>{" "}
            covers in detail the background script, which is the most important
            piece of the browser extension. It describes what they are capable
            of doing, as well as all the different ways they can be used for
            different types of browser extensions.
          </div>
          <div>
            <span className="font-bold">
              Chapter 8: Popup and Options Pages
            </span>{" "}
            covers the basic UI elements of browser extensions, the popup and
            options pages.
          </div>
          <div>
            <span className="font-bold">Chapter 9: Content Scripts</span>{" "}
            describes how extensions can insert code and styling into the actual
            page. It covers the myriad of ways in which this can be leveraged to
            completely customize any web browsing experience, as well as all the
            tricky pitfalls that users should be aware of.
          </div>
          <div>
            {" "}
            <span className="font-bold">Chapter 10: Devtools Pages</span> covers
            how you can use the Devtools API to add a custom user interface into
            your browser's developer tools window.
          </div>
          <div>
            <span className="font-bold">
              Chapter 11: Extension and Browser APIs
            </span>{" "}
            is a reference chapter that goes through all the different APIs that
            browser extensions can use to change how the browser behaves.
          </div>
          <div>
            <span className="font-bold">Chapter 12: Permissions</span> is a
            reference chapter that goes through all the different permissions
            that a browser extension can request. This is a sister chapter to
            Extension and Browser APIs, since using many APIs requires
            permissions for that API.
          </div>
          <div>
            <span className="font-bold">Chapter 13: Networking</span> covers all
            the different aspects of how chrome extensions can use and modify
            the browser's network capabilities. This chapter also covers OAuth
            implementations, as well as the important differences between
            webRequest and declarativeNetRequest.
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
            well as ways to have a single codebase be shared between multiple
            browsers. It also covers Safari extension development for macOS and
            iOS.
          </div>
          <div>
            <span className="font-bold">
              Chapter 16: Tooling and Frameworks
            </span>{" "}
            covers all the ways that programmers can avoid developing browser
            extensions from scratch. This includes how it folds into existing
            frameworks, and also various open source tools that are useful for
            building browser extensions.
          </div>
        </div>
      </div>
    </div>
  );
}
