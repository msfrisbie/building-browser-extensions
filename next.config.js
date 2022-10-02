module.exports = {
  async redirects() {
    return [
      {
        source: "/b2x",
        destination:
          "https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf",
        permanent: false,
      },
      {
        source: "/blog",
        destination:
          "/blog/manifest-v3-debacle-signals-a-changing-of-the-guard",
        permanent: false,
      },
    ];
  },
};
