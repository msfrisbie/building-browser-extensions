import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNavbar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="bg-gray-900"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
            <h1
              className="text-xl font-normal mb-0 mr-8"
              style={{ color: "#fec322" }}
            >
              Building Browser Extensions
            </h1>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-full justify-end sm:gap-8 ttt-purple-text-force">
              <Nav.Link
                href="https://www.amazon.com/dp/148428724X"
                target="_blank"
              >
                BOOK
              </Nav.Link>
              <Nav.Link
                href="https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf"
                target="_blank"
              >
                DEMO&nbsp;EXTENSION
              </Nav.Link>
              <Nav.Link href="/blog">BLOG</Nav.Link>
              <Nav.Link href="https://mattfriz.com" target="_blank">
                AUTHOR
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* spacer for navbar at top */}
      <div className="p-8"></div>
    </>
  );
}
