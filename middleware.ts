import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { articles } from "./consts/articles";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith("/blog")) {
    const slug = url.searchParams.get("slug");

    if (slug) {
      const article = articles.find((x) => x.slug === slug);

      console.log(slug);
      console.log(article);

      if (!article) {
        url.pathname = `/blog/${articles[0].slug}`;
        return NextResponse.redirect(url);
      }
    }
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/blog*",
// };
