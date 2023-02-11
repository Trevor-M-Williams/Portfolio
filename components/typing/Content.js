import React, { useRef, useEffect } from "react";

function Content(props) {
  return (
    <div className="h-full p-6">
      {Array.from(props.prompt).map((char, i) => {
        const bgColors = ["bg-red-300", "bg-green-300"];
        let bgColor = bgColors[props.correct[i]] || " bg-white";
        return (
          <span
            key={i}
            className={`text-3xl leading-[3rem] mr-[0.125rem] ${bgColor}`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default Content;
