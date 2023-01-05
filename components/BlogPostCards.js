import Link from "next/link";
import { Button, Card } from "react-bootstrap";

export default function BlogPostCards() {
  return (
    <>
      <div className="flex flex-col items-center p-6 md:p-16">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <Link href="/blog/manifest-v3-debacle-signals-a-changing-of-the-guard">
            <Card bg="dark" className="cursor-pointer opacity-75 text-white">
              <Card.Header className="text-xl font-normal roboto-condensed">
                Chrome's Manifest V3 Push Signals Changing of the Guard
              </Card.Header>
              <Card.Body>
                The updated version is hostile to extension developers and
                users, and this shared adversity may prove to be a powerful
                catalyst.
              </Card.Body>
              <Card.Footer className="flex flex-row justify-center">
                <Button variant="warning">READ</Button>
              </Card.Footer>
            </Card>
          </Link>

          <Link href="/blog/cambrian-explosion-of-chatgpt-browser-extensions">
            <Card bg="dark" className="cursor-pointer opacity-75 text-white">
              <Card.Header className="text-xl font-normal roboto-condensed">
                The Cambrian Explosion of ChatGPT Extensions
              </Card.Header>
              <Card.Body>
                Browser extensions and large language models just might be the
                perfect match.
              </Card.Body>
              <Card.Footer className="flex flex-row justify-center">
                <Button variant="warning">READ</Button>
              </Card.Footer>
            </Card>
          </Link>

          <Link href="/blog/what-is-manifest-v3">
            <Card bg="dark" className="cursor-pointer opacity-75 text-white">
              <Card.Header className="text-xl font-normal roboto-condensed">
                What is Manifest v3?
              </Card.Header>
              <Card.Body>
                Understand the implications of this seismic shift in how browser
                extensions are built.
              </Card.Body>
              <Card.Footer className="flex flex-row justify-center">
                <Button variant="warning">READ</Button>
              </Card.Footer>
            </Card>
          </Link>

          <Link href="/blog/react-chrome-extension-tutorial">
            <Card bg="dark" className="cursor-pointer opacity-75 text-white">
              <Card.Header className="text-xl font-normal roboto-condensed">
                React Chrome Extension Tutorial
              </Card.Header>
              <Card.Body>
                Learn how to build a simple Chrome extension using React
              </Card.Body>
              <Card.Footer className="flex flex-row justify-center">
                <Button variant="warning">READ</Button>
              </Card.Footer>
            </Card>
          </Link>

          <Link href="/blog/why-are-browser-extensions-important">
            <Card bg="dark" className="cursor-pointer opacity-75 text-white">
              <Card.Header className="text-xl font-normal roboto-condensed">
                Why are Browser Extensions Important?
              </Card.Header>
              <Card.Body>
                These special pieces of software are sneaky powerhouses.
              </Card.Body>
              <Card.Footer className="flex flex-row justify-center">
                <Button variant="warning">READ</Button>
              </Card.Footer>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
