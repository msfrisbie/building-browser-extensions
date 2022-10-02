import Header from "@components/Header";

export default function BlogPost() {
  return (
    <>
      <Header
        title="Manifest V3 Debacle Signals a Changing of the Guard | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com/blog/manifest-v3-debacle-signals-a-changing-of-the-guard"
        description="Manifest V3 is hostile both to extension developers
        and browser users, and this shared adversity may prove to be
        consequential."
      ></Header>
      <div className="flex flex-col items-center p-16">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <div className="text-4xl">
            Manifest V3 Debacle Signals a Changing of the Guard
          </div>
          <div className="text-sm text-gray-500">10/3/2022</div>
          <hr></hr>
          <div>
            Following the initial manifest V3{" "}
            <a href="https://blog.chromium.org/2018/10/trustworthy-chrome-extensions-by-default.html">
              announcement
            </a>{" "}
            in 2018, it did not take long for browser extension developers to
            figure out that manifest V3 makes browser extensions less useful,
            less powerful, and harder to build.{" "}
          </div>
          <ul className="list-disc flex flex-col gap-4">
            <li>
              The blocking WebRequest API, which{" "}
              <a href="https://adguard.com/en/blog/how-ad-blocking-is-done.html">
                all V2 ad blockers use
              </a>
              , is swapped out for an inferior DeclarativeNetRequest API.
            </li>
            <li>
              Background pages, which allowed V2 extensions to control a
              headless webpage that could persist indefinitely, are replaced by
              background service workers that{" "}
              <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1152255">
                do not support persistent scripts
              </a>
              .{" "}
            </li>
            <li>
              V3 extensions lose the ability to execute remote code: no inline
              scripts, scripts loaded from remote URLs, or userscripts. (
              <a href="https://github.com/Tampermonkey/tampermonkey/issues/644">
                Userscript extensions may still be saved.
              </a>
              )
            </li>
          </ul>
          <div>
            Chrome is well-positioned to steer the entire browser extension
            community towards its vision for manifest V3. Chromium browsers
            (Chrome, Edge, Opera) make up{" "}
            <a href="https://gs.statcounter.com/browser-market-share/desktop/worldwide/2022">
              over 80%
            </a>{" "}
            of worldwide desktop internet traffic, and with{" "}
            <a href="https://www.debugbear.com/blog/counting-chrome-extensions">
              180,000 extensions
            </a>{" "}
            the Chrome Web Store is by far the largest extension marketplace.{" "}
          </div>
          <div>
            Manifest V3's chaotic rollout left the extension developer community
            with a bad{" "}
            <a href="https://twitter.com/gorhill/status/1134127701583904770">
              taste
            </a>{" "}
            <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1152255">
              in
            </a>{" "}
            <a href="https://groups.google.com/a/chromium.org/g/chromium-extensions/c/xQmZLc8cu6Q">
              its
            </a>{" "}
            <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1135492">
              mouth
            </a>
            , and some manifest V2 extensions are incompatible with manifest V3.
            Nearly half of desktop browser users have ad blockers installed, and
            ad-averse users will surely be quick to realize an ad blocker isn't
            doing its job. With Mozilla's recent{" "}
            <a href="https://www.ghacks.net/2022/09/24/mozilla-reaffirms-that-firefox-will-continue-to-support-current-content-blockers/">
              announcement
            </a>{" "}
            that it will continue to support the blocking WebRequest API,
            aggrieved developers and users now have an obvious refuge.{" "}
          </div>
          <div>
            Meanwhile, the mobile extension landscape is shifting. In 2020,
            Apple <a href="https://support.apple.com/en-us/HT212788">added</a>{" "}
            support for browser extensions in iOS Safari. Though developers may
            balk at publishing browser extensions in the App Store, Apple is
            advancing browser extensions by bringing them to the most popular
            mobile browser. Chrome for Android does not support browser
            extensions, and there is no indication it ever will.{" "}
          </div>
          <div>
            Chrome remains the hegemon of the browser world, and it is difficult
            to imagine it being unseated. Internet Explorer once enjoyed a
            similar dominant market share, and the speed of the exodus was
            shockingly quick. Manifest V3 is hostile both to extension
            developers and browser users, and this shared adversity may prove to
            be consequential.
          </div>
        </div>
      </div>
    </>
  );
}
