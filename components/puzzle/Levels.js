import { useState, useRef } from "react";
import Level from "./Level";
import Keypad from "./Keypad";
import { BsLightbulbFill } from "react-icons/bs";

function Level0({ level, setLevel }) {
  const [input, setInput] = useState("");
  const overlayRef = useRef(null);

  function toggleOverlay() {
    overlayRef.current.classList.toggle("opacity-0");
  }

  function validateInput() {
    let code = "6279";

    if (input == code) {
      setInput("Success");
      setLevel((prev) => prev + 1);
    } else {
      setInput("Error");
      setTimeout(() => {
        setInput("");
      }, 1000);
    }
  }

  return (
    <Level index={0} level={level}>
      <Keypad
        index={0}
        input={input}
        level={level}
        setInput={setInput}
        validateInput={validateInput}
      />
      <div
        ref={overlayRef}
        className={`absolute inset-0 bg-black transition-opacity duration 500s`}
      ></div>
      <div className="absolute inset-x-0 top-10 flex justify-center text-3xl">
        <span className="text-black select-none">6279</span>
      </div>
      <BsLightbulbFill
        onClick={toggleOverlay}
        className={`absolute top-10 z-20 right-10 h-8 w-8 text-yellow-300 cursor-pointer`}
      ></BsLightbulbFill>
    </Level>
  );
}

function Level1({ level, setLevel }) {
  const [input, setInput] = useState("");

  function validateInput() {
    if (input.length !== 4) return;
    let time = new Date();
    let hours = time.getHours();
    if (hours < 10) hours = `0${hours}`;
    let minutes = time.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    let code = `${hours}${minutes}`;

    if (input == code) {
      setInput("Success");
      setLevel((prev) => prev + 1);
    } else {
      setInput("Error");
      setTimeout(() => {
        setInput("");
      }, 1000);
    }
  }

  return (
    <Level index={1} level={level}>
      <Keypad
        index={1}
        input={input}
        level={level}
        setInput={setInput}
        validateInput={validateInput}
      />
    </Level>
  );
}

export { Level0, Level1 };
