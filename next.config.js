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
          "/blog/chromes-manifest-v3-push-signals-changing-of-the-guard",
        permanent: false,
      },
      {
        source: "/blog/manifest-v3-debacle-signals-a-changing-of-the-guard",
        destination:
          "/blog/chromes-manifest-v3-push-signals-changing-of-the-guard",
        permanent: false,
      },
    ];
  },
};
