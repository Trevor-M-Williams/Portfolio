import { useState, useEffect } from "react";
import PuzzleProvider from "../components/puzzle/Context";
import Background from "../components/puzzle/Background";
import { Quote1 } from "../components/puzzle/Levels";

function puzzle() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    if (gameStarted) {
      setLevel(0);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (level === 1) {
      setGameOver(true);
    }
  }, [level]);

  if (!gameStarted)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setGameStarted(true)}
          className="relative py-2 px-8 bg-blue-200 rounded-full text-2xl hover:bg-blue-300"
        >
          Start
        </button>
      </div>
    );

  return (
    <PuzzleProvider>
      <div className="absolute inset-0">
        <Background gameOver={gameOver} />
        <div>
          <Quote1 index={0} level={level} setLevel={setLevel} />
        </div>
      </div>
    </PuzzleProvider>
  );
}

export default puzzle;
