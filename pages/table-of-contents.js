import Book from "@components/Book";
import Header from "@components/Header";
import TableOfContents from "@components/TableOfContents";

export default function TableOfContentsPage() {
  return (
    <>
      <Header
        title="Table of Contents | Building Browser Extensions"
        url="https://www.buildingbrowserextensions.com/table-of-contents"
        description="The ultimate tutorial for building modern browser extensions in Chrome, Firefox, Edge, and Safari."
      ></Header>

      <div className="pt-24 flex flex-col items-stretch gap-4 md:gap-24">
        <TableOfContents h1={true}></TableOfContents>
        <Book h2={true}></Book>
      </div>
    </>
  );
}
