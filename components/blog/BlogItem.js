import Link from "next/link";
import React from "react";
import { H1, H2, H3, P } from "../../components/Typography";

function BlogItem({ title, paragraph, reversed }) {
  return (
    <Link
      href="#"
      // href="/blogs/[id]"
      // as={`/blogs/${title}`}
      className={`flex ${reversed ? "flex-row-reverse" : ""} 
      w-full mb-8 rounded-lg shadow overflow-hidden cursor-pointer
      border border-white hover:border-blue-400`}
    >
      <div className=" w-1/2 bg-blue-200"></div>
      <div className=" w-1/2 px-6 py-8 md:px-10 md:py-16 bg-white">
        <H2 text={title} />
        <div className="w-10 border-2 border-blue-200 mt-2"></div>
        <P text={paragraph} />
      </div>
    </Link>
  );
}

export default BlogItem;
