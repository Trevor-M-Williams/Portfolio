import React from "react";

function Section({ children, background }) {
  let bg = background ? background : "bg-white";
  return <section className={`w-full ${bg} px-8`}>{children}</section>;
}

export default Section;
