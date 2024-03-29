import Script from "next/script";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Boilerplate({ children }) {
  return (
    <>
      <Header
        title="The ultimate Chrome extension tutorial | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com"
        description="The ultimate tutorial for building modern browser extensions in Chrome, Firefox, Edge, and Safari."
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

      <CustomNavbar></CustomNavbar>

      {children}

      <Footer></Footer>
    </>
  );
}
