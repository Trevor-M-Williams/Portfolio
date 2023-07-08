import { useState, useRef, useEffect } from "react";
import Level from "./Level";
import Keypad from "./Keypad";
import { BsLightbulbFill } from "react-icons/bs";
import { P } from "../Typography";

function Feature1({ index, level, setLevel }) {
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
    <Level index={index} level={level}>
      <Keypad
        index={index}
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

function Quote1({ index, level, setLevel }) {
  const [input, setInput] = useState("");
  const quoteRef = useRef(null);

  useEffect(() => {
    if (level !== index) return;
    fadeQuote();
  }, [level]);

  function fadeQuote() {
    quoteRef.current.classList.add("opacity-0");
    setTimeout(() => {
      quoteRef.current.classList.remove("opacity-0");
    }, 250);
  }

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
    <Level index={index} level={level}>
      <div
        ref={quoteRef}
        className="absolute w-full top-[7vh] transition-opacity duration-500"
      >
        <P
          text="Lost time is never found again."
          styles="text-center text-2xl"
        />
        <P text="- Benjamin Franklin" styles="text-center text-xl" />
      </div>
      <Keypad
        index={index}
        input={input}
        level={level}
        setInput={setInput}
        validateInput={validateInput}
      />
    </Level>
  );
}

export { Feature1, Quote1 };
