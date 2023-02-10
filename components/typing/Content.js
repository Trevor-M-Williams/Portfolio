import React, { useRef, useEffect } from "react";

function Content(props) {
  return (
    <div className="h-full p-6">
      {Array.from(props.prompt).map((char, i) => {
        const bgColors = ["bg-red-300", "bg-green-300"];
        let bgColor = bgColors[props.correct[i]] || " bg-white";
        return (
          <span key={i} className={`text-xl mr-px ${bgColor}`}>
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default Content;
