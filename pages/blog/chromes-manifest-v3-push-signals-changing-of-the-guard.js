import Book from "@components/Book";
import Header from "@components/Header";

export default function BlogPost() {
  return (
    <>
      <Header
        title="Chrome's Manifest V3 Push Signals Changing of the Guard | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com/blog/manifest-v3-debacle-signals-a-changing-of-the-guard"
        description=" The updated version is hostile to extension developers and users,
        and this shared adversity may prove to be a powerful catalyst."
      ></Header>

      <div className="flex flex-col items-center p-6 py-24 md:py-32">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <h1 className="text-4xl">
            Chrome's Manifest V3 Push Signals Changing of the Guard
          </h1>
          <div className="text-xl">
            The updated version is hostile to extension developers and users,
            and this shared adversity may prove to be a powerful catalyst.
          </div>
          <div className="text-sm text-gray-500">10/2/2022</div>
          <hr></hr>
          <div>
            Following the initial manifest V3{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://blog.chromium.org/2018/10/trustworthy-chrome-extensions-by-default.html"
            >
              announcement
            </a>{" "}
            in 2018, browser extension developers did not take long to figure
            out that manifest V3 makes browser extensions less useful, less
            powerful, and harder to build.{" "}
          </div>
          <ul className="list-disc flex flex-col gap-4">
            <li>
              The blocking WebRequest API, which{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://adguard.com/en/blog/how-ad-blocking-is-done.html"
              >
                all V2 ad blockers use
              </a>
              , is swapped out for an inferior DeclarativeNetRequest API.
            </li>
            <li>
              V2 background pages — headless webpages that could persist
              indefinitely — are replaced by service workers that{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://bugs.chromium.org/p/chromium/issues/detail?id=1152255"
              >
                cannot persist indefinitely
              </a>{" "}
              without{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://stackoverflow.com/questions/66618136/persistent-service-worker-in-chrome-extension/66618269#66618269"
              >
                ugly hacks
              </a>
              .{" "}
            </li>
            <li>
              V3 extensions lose the ability to execute remote code: no inline
              scripts, scripts loaded from remote URLs, or userscripts. (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Tampermonkey/tampermonkey/issues/644"
              >
                Userscript extensions may still be saved.
              </a>
              )
            </li>
          </ul>
          <div>
            Chrome is well-positioned to steer browser extensions toward its
            vision for manifest V3. Chromium browsers (Chrome, Edge, Opera) make
            up{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://gs.statcounter.com/browser-market-share/desktop/worldwide/2022"
            >
              over 80%
            </a>{" "}
            of worldwide desktop internet traffic, and with{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.debugbear.com/blog/counting-chrome-extensions"
            >
              180,000 extensions
            </a>{" "}
            the Chrome Web Store is by far the largest extension marketplace.{" "}
          </div>
          <div>
            Manifest V3's chaotic rollout left the extension developer community
            with a bad{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/gorhill/status/1134127701583904770"
            >
              taste
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://bugs.chromium.org/p/chromium/issues/detail?id=1152255"
            >
              in
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://groups.google.com/a/chromium.org/g/chromium-extensions/c/xQmZLc8cu6Q"
            >
              its
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://bugs.chromium.org/p/chromium/issues/detail?id=1135492"
            >
              mouth
            </a>
            . Advertising-averse users will be quick to notice the diminshed
            efficacy of ad blockers. With Mozilla's recent{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/"
            >
              announcement
            </a>{" "}
            that it will continue to support the blocking WebRequest API,
            aggrieved developers and users now have an obvious refuge.{" "}
          </div>
          <div>
            Meanwhile, the mobile extension landscape is shifting. In 2020,
            Apple{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://support.apple.com/en-us/HT212788"
            >
              added support
            </a>{" "}
            for browser extensions in iOS Safari. Though developers may balk at
            publishing browser extensions in the App Store, Apple is advancing
            browser extensions by bringing them to the most popular mobile
            browser. Chrome for Android does not support browser extensions, and
            there is no indication it ever will.{" "}
          </div>
          <div>
            Chrome remains the hegemon of the browser world, so it is difficult
            to imagine it being unseated. Internet Explorer once enjoyed a
            similar dominant market share, but the speed of the exodus was
            shockingly quick.
          </div>
          <hr></hr>
        </div>
      </div>

      <Book h2={true}></Book>
    </>
  );
}
