import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import Image from "next/image";
import mockCover from "../public/mock-cover-2.webp";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <Image
          src={mockCover}
          alt="Building Browser Extensions by Matt Frisbie"
          priority
          layout="fill"
          objectFit="contain"
          // blurDataURL="data:..." automatically provided
          placeholder="blur"
        />
      </main>

      <Footer />
    </div>
  );
}
