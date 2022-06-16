import Footer from "@components/Footer";
import Head from "next/head";
import Image from "next/image";
import mockCover from "../public/mock-cover-2.webp";

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Building Browser Extensions - Matt Frisbie</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <main> */}
        {/* <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}

        <div className="flex flex-col gap-12">
          <a
            className="book-container"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={`book three-d`}>
              <Image
                src={mockCover}
                alt="Building Browser Extensions by Matt Frisbie"
                priority
                layout="fill"
                objectFit="contain"
                // blurDataURL="data:..." automatically provided
                placeholder="blur"
              />
            </div>
          </a>

          <div className="max-w-md px-8 text-2xl text-gray-800 text-center">
            The complete reference for building modern browser extensions in
            Chrome, Firefox, Edge, and Safari.
          </div>

          <div className="text-xl text-gray-400 text-center">
            Available Fall 2022
          </div>
        </div>
        {/* </main> */}
      </div>

      <Footer />
    </>
  );
}
