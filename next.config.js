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
        source: "/plasmo",
        destination:
          "https://www.amazon.com/Building-Browser-Extensions-Create-Firefox-ebook/dp/B0BN578YT5?maas=maas_adg_AECE9B779D87C877C40E4C14AE7D3493_afap_abs&ref_=aa_maas&tag=maas",
        permanent: false,
      },
      // {
      //   source: "/blog",
      //   destination:
      //     "/blog/chromes-manifest-v3-push-signals-changing-of-the-guard",
      //   permanent: false,
      // },
      {
        source: "/blog/manifest-v3-debacle-signals-a-changing-of-the-guard",
        destination:
          "/blog/chromes-manifest-v3-push-signals-changing-of-the-guard",
        permanent: false,
      },
    ];
  },
};
