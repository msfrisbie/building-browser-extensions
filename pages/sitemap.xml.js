const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>https://www.buildingbrowserextensions.com</loc>
      </url>
      <url>
          <loc>https://www.buildingbrowserextensions.com/blog</loc>
      </url>
      <url>
          <loc>https://www.buildingbrowserextensions.com/blog/chromes-manifest-v3-push-signals-changing-of-the-guard</loc>
      </url>
  </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
