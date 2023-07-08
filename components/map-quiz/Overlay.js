import { useRef, useEffect } from "react";
import ResultsScreen from "./ResultsScreen";
import StartScreen from "./StartScreen";

export default function Overlay(props) {
  const overlay = useRef();

  useEffect(() => {
    if (props.gamestate === 1) startGame();
    else if (props.gamestate === 2) endGame();
  }, [props.gamestate]);

  function startGame() {
    transformColumns("up");
    setTimeout(() => {
      hideOverlay();
    }, 1000);
  }
  function endGame() {
    transformColumns("down");
    showOverlay();
  }

  function hideOverlay() {
    overlay.current.style.display = "none";
  }
  function showOverlay() {
    overlay.current.style.display = "block";
  }

  function renderColumns() {
    const array = [];
    for (let i = 1; i <= 8; i++) {
      array.push(
        <div
          key={i}
          className="h-full bg-white transition-transform ease-out duration-500"
        ></div>
      );
    }
    return array;
  }
  function transformColumns(direction) {
    let percent = -100;
    if (direction === "down") percent = 0;
    let columns = overlay.current.children;
    for (let i = 0; i < columns.length; i++) {
      setTimeout(() => {
        columns[i].style.transform = `translateY(${percent}%)`;
      }, 75 * (i + 1));
    }
  }

  return (
    <div ref={overlay} className="absolute inset-0 z-10 columns-8 gap-0">
      {renderColumns()}
      {props.gamestate === 0 && (
        <StartScreen
          setGamestate={props.setGamestate}
          setLevel={props.setLevel}
        />
      )}
      {props.gamestate === 2 && (
        <ResultsScreen
          correct={props.correct}
          total={props.total}
          time={props.time}
        />
      )}
    </div>
  );
}
