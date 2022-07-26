import Script from "next/script";
import Header from "./Header";
import Navbar from "./CustomNavbar";

export default function Boilerplate({ children }) {
  return (
    <>
      <Header
        title="Building Browser Extensions | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com"
        description="The complete reference for building modern browser extensions in Chrome, Firefox, Edge, and Safari."
      ></Header>

      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-9CLE9BDYKQ"}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9CLE9BDYKQ', {
          page_path: window.location.pathname,
          });
      `}
      </Script>

      <Navbar></Navbar>

      {children}

      <footer className="flex flex-col items-center justify-center p-8 text-sm text-gray-300">
        Copyright Matt Frisbie 2022
      </footer>
    </>
  );
}
