import BlogPostCards from "@components/BlogPostCards";
import Header from "@components/Header";

// <ol
// <ol class="list-decimal"

// <div class="flex items-center relative text-gray-200 bg-gray-800
// <div style="display:none" class="flex items-center relative text-gray-200 bg-gray-800

// Replace code blocks with <pre><code>"copy code"</code></pre>
// Escape HTML
// Format code blocks

export default function Blog() {
  return (
    <>
      <Header
        title="Blog | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/blog"
        description=""
      ></Header>

      <BlogPostCards></BlogPostCards>
    </>
  );
}
