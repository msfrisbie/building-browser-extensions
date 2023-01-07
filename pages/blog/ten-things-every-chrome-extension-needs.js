import Book from "@components/Book";
import Header from "@components/Header";
import Image from "next/image";
import { Card } from "react-bootstrap";
import Gist from "react-gist";
import popup from "../../public/popup.png";
import seo from "../../public/seo.png";
import url from "../../public/url.png";

export default function BlogPost() {
  const slug = "ten-things-every-chrome-extension-needs";
  const title = "10 Things Every Chrome Extension Needs";
  const subtitle =
    "Just getting started with building a Chrome extension? Make sure you've got these covered.";

  return (
    <>
      <Header
        title={title + " | Matt Frisbie"}
        url={"https://www.buildingbrowserextensions.com/blog/" + slug}
        description={subtitle}
      ></Header>
      <div className="flex flex-col items-center p-6 md:p-16">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <div className="text-4xl">{title}</div>
          <div className="text-xl text-gray-800">{subtitle}</div>
          <div className="text-sm text-gray-500">1/7/2023</div>
          <hr></hr>
          <div className="text-xl font-bold text-gray-700">
            1. An SEO-friendly name
          </div>

          <Gist id="747f14414bf2091613482d39a651c275" />

          <div>
            The extension name is a terrific opportunity for search engine
            optimization. Your extension's listing on the Chrome Web Store will
            rank very high if it contains the exact search phrase. The ranking{" "}
            <i>within</i> the Chrome Web Store itself will also greatly depend
            on keyword matches.
          </div>

          <Card>
            <Image
              src={seo}
              alt="ChatGPT Assistant SEO"
              priority
              className="card-img"
            ></Image>
            <Card.Body>
              <div className="text-xs italic text-gray-500">
                The "ChatGPT Assistant" extension ranks #1 for that exact
                search, even though there are a significant number of apps and
                GitHub repositories with similar names.
              </div>
            </Card.Body>
          </Card>

          <div className="text-xl font-bold text-gray-700">
            2. An efficient description
          </div>
          <div>
            This is your change to describe in one sentence what the extension
            has to offer. It is also a secondary opportunity to include
            additional search keywords.
          </div>

          <Gist id="66892a5b0804f200245e23350952ed4e" />

          <Card>
            <Image
              src={url}
              alt="Chrome Extension search results with description"
              className="card-img"
            ></Image>
            <Card.Body>
              <div className="text-xs italic text-gray-500">
                The extension description appears as the subtitle in Chrome Web
                Store search results.
              </div>
            </Card.Body>
          </Card>
          <div className="text-xl font-bold text-gray-700">
            3. A post-install action
          </div>
          <div>
            Right after a user installs your extension, what then? They need to
            be told what to do next. This is a perfect opportunity to kick them
            over to an extension-rendered page. There, you have a full
            extension-controlled webpage to welcome them, give instructions, and
            prompt for a signup or login.
          </div>
          <div>
            The simplest way to accomplish this is to create an options page.
            Often, the options page will be used as a full single page
            application, allowing for routing. You can programmatically direct
            the user over to the options page after an INSTALL event:
          </div>

          <Gist id="e649eda9508aa5ffde9c01a99276ab98" />

          <div className="text-xl font-bold text-gray-700">
            4. An uninstall URL
          </div>
          <div>
            After a user uninstalls your extension, that's it - your extension
            has no ability to send analytics events. However, you can direct
            them to a URL of your choice. The best use of this URL is to allow
            them to reach out or provide feedback. An easy way to take advantage
            of this is to link to Google Forms and collect anonymous feedback.
          </div>

          <Gist id="b69b50ae1210320facc9b397b8d53e3a" />

          <div className="text-xl font-bold text-gray-700">5. A popup page</div>
          <div>
            Your extension gets a button in the browser toolbar no matter what,
            so you might as well make it do something. Users are accustomed to
            interacting with these extension toolbar buttons, so this is a good
            fallback location for placing instructions in case the user doesn't
            understand how the extension is supposed to work.
          </div>

          <Gist id="3cabd7c1a0e550813e6d740c412081a1" />
          <Card>
            <Image
              src={popup}
              alt="Chrome Extension popup"
              className="card-img"
            ></Image>
            <Card.Body>
              <div className="text-xs italic text-gray-500">
                Clicking the extension's toolbar button opens the popup page.
              </div>
            </Card.Body>
          </Card>

          <div className="text-xl font-bold text-gray-700">
            6. A snazzy icon
          </div>
          <div>
            Sounds obvious, but a good icon makes all the difference. Chrome Web
            Store search results and the toobar button both greatly benefit from
            a great icon that looks good large and small. 16x16, 48x48, 64x64,
            and 128x128 are all you need.
          </div>

          <Gist id="9f5771a4b5536433eaaa43c10701c985" />

          <div className="text-xl font-bold text-gray-700">
            7. Screenshots and promo videos
          </div>
          <div>
            A handful of high-quality screenshots and a short YouTube promo
            video are an easy way to give the user an idea of what your
            extension does. A Chrome Web Store listing looks barren without
            them.
          </div>
          <div>
            Screenshots should not be cluttered, and text within them should be
            large and easy to read. A subtitle overlay describing what a
            screenshot is showing is often helpful.
          </div>
          <div className="text-xl font-bold text-gray-700">
            8. A dedicated URL
          </div>
          <div>
            Acquiring a URL for your extension is a cheap and easy way to
            improve its appearance. Most URLs are less than $10/year, and you
            can have it redirect to a GitHub repository or some other makeshift
            homepage.
          </div>
          <Card>
            <Image
              src={url}
              alt="Chrome Extension search results with URL"
              className="card-img"
            ></Image>
            <Card.Body>
              <div className="text-xs italic text-gray-500">
                Adding a URL for your extension greatly enhances the appearance
                of the search result.
              </div>
            </Card.Body>
          </Card>
          <div className="text-xl font-bold text-gray-700">9. Analytics</div>
          <div>
            How are you supposed to know what happens after a user installs your
            extension? Analytics tools!
          </div>
          <div>
            Sending analytics from a content script is a bad option. The host
            page's content security policy may block the scripts or outgoing
            requests, or adblockers might kill them. Analytics events will need
            to be dispatched from either a controlled extension page (popup,
            options, devtools) or the background script. One important
            advantage:{" "}
            <span className="font-bold">
              Adblockers cannot block analytics requests sent from extension
              pages or background scripts!
            </span>{" "}
            This means your extension analytics will have close to 100%
            accuracy.
          </div>
          <div>
            Google Analytics and Amplitude are two good solutions, although they
            require some manual setup. Remember: in manifest v3, you cannot load
            remote scripts - they must be included with your extension!
          </div>
          <div>
            <ul className="list-disc">
              <li>
                <a href="https://analytics.google.com" target="_blank">
                  Google Analytics
                </a>
              </li>
              <li>
                <a href="https://amplitude.com/" target="_blank">
                  Amplitude
                </a>
              </li>
            </ul>
          </div>
          <div>
            Note: refer to the{" "}
            <a
              href="https://github.com/msfrisbie/demo-browser-extension"
              target="_blank"
            >
              Example Chrome Extension
            </a>{" "}
            for a full demo of setting up Google Analytics.
          </div>
          <div className="text-xl font-bold text-gray-700">
            10. A support email
          </div>
          <div>
            No extension is perfect, and users will want a way to get in touch
            with you. Set up a free Gmail account for your extension, and
            include it both in the extension's listing as well as somewhere in
            the extension itself, such as the footer of the popup.
          </div>
          <hr></hr>
        </div>
      </div>

      <Book></Book>
    </>
  );
}
