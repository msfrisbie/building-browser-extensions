import Link from "next/link";
import { Button, Card } from "react-bootstrap";

export default function BlogPostCards() {
  return (
    <>
      <div className="flex flex-col items-center p-6 md:p-16">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <Link href="/blog/manifest-v3-debacle-signals-a-changing-of-the-guard">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                Chrome's Manifest V3 Push Signals Changing of the Guard
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  The updated version is hostile to extension developers and
                  users, and this shared adversity may prove to be a powerful
                  catalyst.
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>

          <Link href="/blog/cambrian-explosion-of-chatgpt-browser-extensions">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                The Cambrian Explosion of ChatGPT Extensions
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  Browser extensions and large language models just might be the
                  perfect match.
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>

          <Link href="/blog/ten-things-every-chrome-extension-needs">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                10 Things Every Chrome Extension Needs
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  Just getting started with building a browser extension? Make
                  sure you've got these covered.
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>

          <Link href="/blog/what-is-manifest-v3">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                What is Manifest v3?
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  Understand the implications of this seismic shift in how
                  browser extensions are built.
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>

          <Link href="/blog/react-chrome-extension-tutorial">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                React Chrome Extension Tutorial
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  Learn how to build a simple Chrome extension using React
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>

          <Link href="/blog/why-are-browser-extensions-important">
            <Card className="cursor-pointer">
              <Card.Header className="text-xl font-normal roboto-condensed">
                Why are Browser Extensions Important?
              </Card.Header>
              <Card.Body className="flex flex-col gap-4">
                <div>
                  {" "}
                  These special pieces of software are sneaky powerhouses.
                </div>
                <div className="flex flex-row justify-center">
                  <Button variant="warning">READ</Button>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
