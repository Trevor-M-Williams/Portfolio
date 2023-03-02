import { useEffect, useRef, useState } from "react";

function Level({ children, index, level }) {
  const [bg, setBg] = useState("bg-white");

  const panel_1 = useRef(null);
  const panel_2 = useRef(null);
  const content = useRef(null);
  const levelRef = useRef(null);

  function fadeLevelOut() {
    content.current.classList.add("opacity-0");
    setTimeout(() => {
      fadePanels();
    }, 0);
    setTimeout(() => {
      slidePanels();
    }, 500);
    setTimeout(() => {
      hideLevel();
    }, 2500);
  }

  function fadeLevelIn() {
    levelRef.current.classList.remove("hidden");
    setTimeout(() => {
      content.current.classList.remove("opacity-0");
    }, 2500);
  }

  function fadePanels() {
    setBg("bg-zinc-300");
  }

  function hideLevel() {
    content.current.classList.add("opacity-0");
    levelRef.current.classList.add("hidden");
  }

  function slidePanels() {
    panel_1.current.classList.add("-translate-x-full");
    panel_2.current.classList.add("translate-x-full");
  }

  useEffect(() => {
    if (index > level) {
      hideLevel();
      return;
    }
    if (level === index) {
      fadeLevelIn();
      return;
    }
    if (index < level) {
      fadeLevelOut();
      return;
    }
  }, [level]);

  return (
    <div
      ref={levelRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div
        ref={panel_1}
        className={`absolute h-full w-1/2 left-0 [transition:transform_2s_ease-in-out,background_500ms] ${bg}`}
      ></div>
      <div
        ref={panel_2}
        className={`absolute h-full w-1/2 right-0 [transition:transform_2s_ease-in-out,background_500ms] ${bg}`}
      ></div>
      <div
        ref={content}
        className="absolute h-full w-full transition-opacity duration-500"
      >
        {children}
      </div>
    </div>
  );
}

export default Level;
