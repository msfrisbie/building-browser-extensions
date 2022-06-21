import Script from "next/script";
import Header from "./Header";

export default function Boilerplate({ children }) {
  return (
    <>
      <Header
        title="Building Browser Extensions | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com"
        description="Matt Frisbie | Software Engineer, Bestselling Author"
      ></Header>

      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-0ETS0H9HMM"}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0ETS0H9HMM', {
          page_path: window.location.pathname,
          });
      `}
      </Script>

      {children}

      <footer className="flex flex-col items-center justify-center p-8 text-sm text-gray-300">
        Copyright Matt Frisbie 2022
      </footer>
    </>
  );
}
