import Book from "@components/Book";
import Header from "@components/Header";

export default function BlogPost() {
  return (
    <>
      <Header
        title="What is Manifest V3? | Matt Frisbie"
        url="https://www.buildingbrowserextensions.com/blog/what-is-manifest-v3"
        description="Understand the implications of this seismic shift in how
        browser extensions are built."
      ></Header>
      <div className="flex flex-col items-center p-6 py-24 md:py-32">
        <div className="flex flex-col gap-8 font-light max-w-lg text-lg">
          <h1 className="text-4xl">What is Manifest V3?</h1>
          <div className="text-xl">
            Understand the implications of this seismic shift in how browser
            extensions are built.
          </div>
          <div className="text-sm text-gray-500">12/16/2022</div>
          <hr></hr>

          <p>
            Browser extension manifest v3 is a new version of the manifest file
            that specifies the properties and behaviors of a browser extension.
            It is currently in development and is expected to be released in the
            near future.
          </p>
          <p>
            One of the major changes in manifest v3 is the introduction of a new
            permission model. In previous versions of the manifest, extensions
            were granted broad access to web pages and could make network
            requests to any domain. This has led to security and privacy
            concerns, as extensions could potentially gather sensitive user data
            or interfere with the operation of web pages. In manifest v3,
            extensions will be required to request specific permissions in order
            to access certain features or resources. This will allow users to
            make more informed decisions about the extensions they install and
            will help to reduce the potential for abuse.
          </p>
          <p>
            The new permission model in manifest v3 is designed to be more
            granular and flexible than the previous model. Extensions can
            request access to specific APIs, resources, or web pages, and users
            can choose to grant or deny these requests. For example, an
            extension that wants to access a user's browsing history might
            request the "history" permission, while an extension that wants to
            modify the content of web pages might request the "tabs" permission.
          </p>
          <p>
            In addition to requesting specific permissions, extensions will also
            be required to specify their intended use of those permissions in
            the manifest. This will help users to understand why an extension is
            requesting certain permissions and will allow them to make more
            informed decisions about whether to install the extension.
          </p>
          <p>
            Another significant change in manifest v3 is the introduction of a
            new declarativeNetRequest API. This API allows extensions to block
            or modify network requests based on rules that are defined in the
            manifest. This will give extensions more control over the web
            browsing experience, but it also introduces new security and privacy
            concerns. To address these concerns, the declarativeNetRequest API
            will be subject to strict performance and security limits, and
            extensions that use it will be required to undergo a thorough review
            process before they can be published.
          </p>
          <p>
            In addition to the declarativeNetRequest API, manifest v3 also
            introduces a number of other new APIs and features that will allow
            extensions to interact with the web in more powerful and flexible
            ways. For example, the extension service worker API will allow
            extensions to run code in the background, even when the extension's
            popup or options page is not open. This will enable extensions to
            perform tasks such as syncing data or sending notifications, even
            when the browser is not in use.
          </p>
          <p>
            Another important aspect of manifest v3 is the restriction on the
            execution of third party code. In previous versions of the manifest,
            extensions could include third party libraries or frameworks in
            their codebase, which could potentially introduce security
            vulnerabilities. In manifest v3, extensions will not be allowed to
            execute third party code, with a few exceptions for well-established
            and widely-used libraries. This will help to reduce the risk of
            security vulnerabilities and will ensure that extensions are more
            transparent and easy to review.
          </p>
          <p>
            Overall, manifest v3 represents a significant improvement over
            previous versions of the manifest, with a focus on security,
            privacy, and user control. It introduces a number of new features
            and APIs that will allow extensions to interact with the web in more
            powerful and flexible ways, while also addressing some of the
            security and privacy concerns that have arisen with previous
            versions of the manifest. As such, it is an important step forward
            for the browser extension ecosystem and will likely have a
            significant impact on the development and deployment of extensions
            in the future.
          </p>

          <hr></hr>
        </div>
      </div>

      <Book h2={true}></Book>
    </>
  );
}
