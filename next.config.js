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
          "https://www.amazon.com/Building-Browser-Extensions-Create-Firefox/dp/148428724X/?maas=maas_adg_DD6BEC882C2389AFF44D0C6394CF29E8_afap_abs&ref_=aa_maas&tag=maas",
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
