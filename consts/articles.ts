interface IArticle {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
}

export const articles: IArticle[] = [
  {
    title: "Chrome's Manifest V3 Push Signals Changing of the Guard",
    subtitle:
      "The updated version is hostile to extension developers and users, and this shared adversity may prove to be a powerful catalyst.",
    slug: "chromes-manifest-v3-push-signals-changing-of-the-guard",
    date: '10/2/2022'
  },
];
