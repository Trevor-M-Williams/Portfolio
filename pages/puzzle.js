import { useState, useRef, useEffect } from "react";
import Background from "../components/puzzle/Background";
import { Level0, Level1 } from "../components/puzzle/Levels";

function puzzle() {
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (level === 2) {
      setGameOver(true);
    }
  }, [level]);

  return (
    <div className="absolute inset-0">
      <Background gameOver={gameOver} />
      <Level1 level={level} setLevel={setLevel}></Level1>
      <Level0 level={level} setLevel={setLevel}></Level0>
    </div>
  );
}

export default puzzle;
