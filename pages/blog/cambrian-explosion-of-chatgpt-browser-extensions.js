import Book from "@components/Book";
import Header from "@components/Header";
import Image from "next/image";
import cws from "../../public/cws.png";
import prompt from "../../public/prompt.png";

export default function BlogPost() {
  const slug = "cambrian-explosion-of-chatgpt-browser-extensions";
  const title = "The Cambrian Explosion of ChatGPT Browser Extensions";
  const subtitle =
    "A perfect pairing with browser extensions and OpenAI's permissive stance enabled a gold rush, and it feels like we've only just begun.";

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
          <div className="text-xl">{subtitle}</div>
          <div className="text-sm text-gray-500">1/5/2023</div>
          <hr></hr>

          <p>
            One month ago, there were zero results for "ChatGPT" on the Chrome
            Web Store. This morning, there were nearly 250, and I expect this
            number to triple in the coming month. This explosion of growth
            underscores the sheer utility of ChatGPT, and we have only just
            begun to explore its myriad applications as a layer on top of web
            browsers.
          </p>

          <a
            href="https://chrome.google.com/webstore/search/chatgpt"
            target="_blank"
            className="no-underline"
          >
            <Image
              src={cws}
              alt="Chrome Web Store ChatGPT search results"
              objectFit="contain"
              placeholder="blur"
            />
            <p className="text-center italic text-gray-400">
              Chrome Web Store ChatGPT search results
            </p>
          </a>

          <p>
            ChatGPT is a variant of the GPT (Generative Pre-training
            Transformer) language model that has been fine-tuned for the task of
            conversation generation. It is designed to generate human-like
            responses to prompts given to it, and can be used for tasks such as
            chatbots and language translation. Large language models, such as
            GPT and ChatGPT, are neural network models that have been trained on
            very large datasets in order to learn the statistical patterns of
            language. They are able to generate coherent and natural-sounding
            text, and have a wide range of applications in natural language
            processing tasks.
          </p>

          <a
            href="https://chat.openai.com/chat"
            target="_blank"
            className="no-underline"
          >
            <Image
              src={prompt}
              alt="ChatGPT prompt"
              objectFit="contain"
              placeholder="blur"
            />
            <p className="text-center italic text-gray-400">
              ChatGPT generating the previous paragraph
            </p>
          </a>

          <p>
            ChatGPT's meteoric ascent can be attributed to a handful of factors:
          </p>

          <ol className="list-disc">
            <li>
              A profound leap in sophistication from GPT3, <i>especially</i> the
              ability to understand very large input prompts
            </li>
            <li>Free to use</li>
            <li>
              A simple textual I/O interface - allowing for easy sharing,
              replication, and modification of LLM prompts
            </li>
            <li>Allowing for unofficial API development and embedding</li>
          </ol>

          <p className="text-2xl text-thin text-gray-400 italic">
            OpenAI is brazenly encouraging developers to hack on the ChatGPT
            platform in order to unlock its full potential.
          </p>

          <p>
            Unofficial API implementations such as{" "}
            <a
              target="blank"
              href="https://github.com/transitive-bullshit/chatgpt-api"
            >
              npm's chatgpt-api
            </a>{" "}
            or{" "}
            <a href="https://github.com/acheong08/ChatGPT">pip's revChatGPT</a>{" "}
            enabled thousands of developers to experiment with this amazing and
            novel tool. Furthermore, ChatGPT be embedded inside an iframe,
            allowing for browser extensions to place their chat interface
            directly inside the extension.
          </p>

          <p>
            <span className="font-bold">
              This was not by accident: OpenAI did not have to allow these
              things.
            </span>{" "}
            It would have been trivial to lock down their API and add an
            X-Frame-Options header to choke off these unsactioned uses. Since
            launch, they have taken steps to regulate the automated use of the
            unofficial API, but it very clear that OpenAI is brazenly
            encouraging developers to hack on the ChatGPT platform in order to
            unlock its full potential.
          </p>

          <p>
            Browser extensions have found a particularly nice pairing with
            ChatGPT. The{" "}
            <a
              href="https://developer.chrome.com/docs/extensions/reference/"
              target="_blank"
            >
              WebExtensions API
            </a>{" "}
            includes an array of tools for marshalling text in an out of web
            pages, and OpenAI's permissive API allows for extensions to spoof
            the authenticated session and dispatch prompts directly to ChatGPT.
            This leads to an interesting new pattern where desktop ChatGPT users
            now always have a ChatGPT tab open, but multiple pieces of software
            are using that tab as a mouthpiece.
          </p>

          <p>
            In the month since launch, ChatGPT has been used to build extensions
            for adding widgets on search engines, analyzing and writing emails,
            composing code and browser scripts, scraping and extracting
            formatted data from pages, summarizing articles, and composing posts
            for Twitter and LinkedIn. It's difficult to ignore the fact that
            Microsoft's{" "}
            <a href="https://www.theinformation.com/articles/microsoft-and-openai-working-on-chatgpt-powered-bing-in-challenge-to-google">
              recent announcement
            </a>{" "}
            that it will incorporate ChatGPT into Bing directly mirrors the most
            widely installed ChatGPT Chrome extension{" "}
            <a href="https://chatgpt4google.com/">ChatGPT for Google</a>.
          </p>

          <p>
            Though browser extensions have never been able to gain the
            domininace enjoyed by mobile apps, they still enjoy a healthy
            ecosystem: the Chrome Web Store feaures 180,000 extensions (compared
            to the Apple App Store's 1.8M). Over the past decade, mobile devices
            subsumed a large chunk of desktop traffic and users, yet the mobile
            form factor cannot hope to compete with the desktop format as a tool
            for everyday work and text composition - a domain where browser
            extensions and ChatGPT shine.
          </p>

          <hr></hr>

          <p>
            Matt Frisbie is the creator of{" "}
            <a href="https://chatgptassistant.com" target="_blank">
              {" "}
              ChatGPT Assistant
            </a>
          </p>

          <hr></hr>
        </div>
      </div>

      <Book></Book>
    </>
  );
}
