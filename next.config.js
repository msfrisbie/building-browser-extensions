module.exports = {
  async redirects() {
    return [
      {
        source: "/b2x",
        destination:
          "https://chrome.google.com/webstore/detail/browser-extension-explore/jnofdoejfipgalklopidpdeofjebihcf",
        permanent: false,
      },
    ];
  },
};
