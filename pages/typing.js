import { useState, useRef, useEffect } from "react";
import Card from "../components/typing/Card";
import Content from "../components/typing/Content";
import Results from "../components/typing/Results";
import Loading from "../components/typing/Loading";

function Typing() {
  const [accuracy, setAccuracy] = useState(0);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState(" ");
  const [results, setResults] = useState(false);
  const [right, setRight] = useState(0);
  const [score, setScore] = useState();
  const [start, setStart] = useState();
  const [time, setTime] = useState();
  const [WPM, setWPM] = useState();
  const [wrong, setWrong] = useState(0);
  const correct = useRef([]);
  const ref = useRef();
  const usedPrompts = useRef([]);

  useEffect(() => {
    ref.current.focus();
    fetchPrompt();
  }, []);

  useEffect(() => {
    if (index === prompt.length) handleLevelEnd();
  }, [index]);

  async function fetchPrompt() {
    const response = await fetch("data.json");
    const data = await response.json();
    let index = Math.floor(Math.random() * data.length);
    while (usedPrompts.current.includes(data[index].name))
      Math.floor(Math.random() * data.length);
    usedPrompts.current.push(data[index].name);
    setPrompt(data[index].text);
  }

  // async function generatePrompt() {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/generate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     if (response.status !== 200) {
  //       throw (
  //         data.error ||
  //         new Error(`Request failed with status ${response.status}`)
  //       );
  //     }
  //     let newPrompt = data.result.replaceAll("\n", "");
  //     setPrompt(newPrompt);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.message + "Give the page a refresh and try again.");
  //   }
  // }

  function handleKeyDown(e) {
    let keys = [
      "Escape",
      "Tab",
      "CapsLock",
      "Shift",
      "Control",
      "Meta",
      "Alt",
      "ContextMenu",
    ];
    if (keys.includes(e.key)) return;
    if (e.key === "Backspace") {
      if (index > 0) {
        correct.current[index - 1] = null;
        setIndex((index) => index - 1);
      }
      return;
    }
    if (!start) setStart(Date.now());
    if (e.key === prompt[index]) {
      correct.current[index] = 1;
      setRight((right) => right + 1);
    } else {
      correct.current[index] = 0;
      setWrong((wrong) => wrong + 1);
    }
    setIndex((index) => index + 1);
  }

  function handleLevelEnd() {
    let percent = Math.round((right * 100) / (right + wrong));
    let seconds = (Date.now() - start) / 1000;
    let speed = Math.round(prompt.length / 5 / (seconds / 60));
    let penalties = correct.current.reduce((a, b) => {
      if (b === 0) return a + 1;
      else return a;
    }, 0);
    let value = Math.max(speed * percent - penalties * 100, 0);
    setAccuracy(percent + "%");
    setTime(seconds);
    setWPM(speed);
    setScore(value);
    setResults(true);
    setPrompt("");
    // generatePrompt();
    fetchPrompt();
  }

  function handleNext() {
    setResults(false);
    setIndex(0);
    setStart();
    setRight(0);
    setWrong(0);
    correct.current = [];
  }

  return (
    <div
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="absolute inset-0 bg-gray-200 px-8 py-16 focus:outline-none"
    >
      <Card>
        {!results && (
          <Content index={index} prompt={prompt} correct={correct.current} />
        )}
        <Results
          results={results}
          accuracy={accuracy}
          time={time}
          WPM={WPM}
          score={score}
          handleNext={handleNext}
        />
        {!results && loading && <Loading />}
      </Card>
    </div>
  );
}

export default Typing;
