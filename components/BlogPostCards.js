import Book from "@components/Book";

export default function BlogPostCards() {
  const posts = [
    {
      title: `Chrome's Manifest V3 Push Signals Changing of the Guard`,
      description: `The updated version is hostile to extension developers and users, and this shared adversity may prove to be a powerful catalyst.`,
      href: `/blog/manifest-v3-debacle-signals-a-changing-of-the-guard`,
      date: `10/2/2022`,
    },
    {
      title: `The Cambrian Explosion of ChatGPT Extensions`,
      description: `Browser extensions and large language models just might be the perfect match.`,
      href: `/blog/cambrian-explosion-of-chatgpt-browser-extensions`,
      date: `1/5/2023`,
    },
    {
      title: `10 Things Every Chrome Extension Needs`,
      description: `Just getting started with building a browser extension? Make sure you've got these covered.`,
      href: `/blog/ten-things-every-chrome-extension-needs`,
      date: `1/7/2023`,
    },
    {
      title: `What is Manifest v3?`,
      description: `Understand the implications of this seismic shift in how browser extensions are built.`,
      href: `/blog/what-is-manifest-v3`,
      date: `12/16/2022`,
    },
    {
      title: `Why are Browser Extensions Important?`,
      description: `These special pieces of software are sneaky powerhouses.`,
      href: `/blog/why-are-browser-extensions-important`,
      date: `12/16/2022`,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center py-24 md:py-36 px-6">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <h1 className="font-light pb-2 w-full text-center border-b border-gray-400 text-gray-400">
            Blog
          </h1>

          {/* <iframe src="https://mattfrisbie.substack.com/"></iframe> */}

          {posts.map((postData) => (
            <>
              <a
                href={postData.href}
                className="flex flex-col gap-2 no-underline text-gray-700 hover:text-gray-700 hover:bg-blue-100 hover:cursor-pointer p-4"
              >
                <div className="text-xs text-gray-400">{postData.date}</div>
                <div className="text-xl font-medium text-yellow-400">
                  {postData.title}
                </div>
                <div className="text-sm">{postData.description}</div>
              </a>
            </>
          ))}
        </div>

        <div className="py-16">
          <Book h2={true}></Book>
        </div>
      </div>
    </>
  );
}
