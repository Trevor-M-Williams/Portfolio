import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

function Background({ gameOver }) {
  const bgRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        handleFireworks();
      }, 2000);

      setTimeout(() => {
        showMessage();
      }, 5000);
    }
  }, [gameOver]);

  function handleFireworks() {
    const container = bgRef.current;
    const fireworks = new Fireworks(container, {
      acceleration: 1,
    });
    fireworks.start();

    setTimeout(() => {
      fireworks.waitStop();
    }, 3000);
  }

  function showMessage() {
    messageRef.current.classList.remove("opacity-0");
  }

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 bg-black text-white text-7xl font-medium overflow-hidden"
    >
      <div
        ref={messageRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
      >
        You Win!
      </div>
    </div>
  );
}

export default Background;
