import { useEffect, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Keypad({ index, input, level, setInput, validateInput }) {
  const ref = useRef();

  useEffect(() => {
    if (index !== level) return;
    setTimeout(() => {
      ref.current.focus();
    }, 25);
  }, [level]);

  function addInput(e) {
    if (input.length === 4) return;
    let newInput;
    let char;
    if (typeof e === "string") char = e;
    else char = e.target.textContent;
    if (input === "Error") newInput = char;
    else newInput = input + char;
    setInput(newInput);
  }

  function backspaceInput() {
    if (input.length === 0) return;
    let newInput = input.slice(0, -1);
    setInput(newInput);
  }

  function clearInput() {
    setInput("");
  }

  function handleKeydown(e) {
    if (e.key === "Backspace") {
      backspaceInput();
      return;
    }
    if (e.key === "Escape") {
      clearInput();
      return;
    }
    if (e.key === "Enter") {
      validateInput();
      return;
    }
    if (parseInt(e.key)) {
      addInput(e.key);
      return;
    }
    if (e.key === "0") {
      addInput("0");
      return;
    }
  }

  return (
    <div
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeydown}
      className="absolute z-10 h-full w-full focus:outline-none flex items-center justify-center"
    >
      <div className="flex flex-col w-72 p-7 bg-[#ddd] rounded-[20px]">
        <div className="flex items-center justify-center h-20 w-full bg-black text-white text-5xl uppercase rounded">
          {input}
        </div>
        <div className="w-full flex flex-wrap justify-between">
          {[...Array(12)].map((_, i) => {
            let value = i + 1;
            let clickEvent = addInput;
            let bg = "bg-[#bbb]";

            if (i === 10) value = "0";
            else if (i === 9) {
              value = <IoClose className="h-[60%] w-[60%]" />;
              clickEvent = clearInput;
              bg = "bg-red-400";
            } else if (i === 11) {
              value = <FiCheck className="h-[60%] w-[60%]" />;
              clickEvent = validateInput;
              bg = "bg-green-400";
            }

            return (
              <div
                key={i}
                onClick={clickEvent}
                className={`flex items-center justify-center h-16 w-16 mt-4 ${bg} rounded-full text-3xl font-medium cursor-pointer select-none`}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Keypad;
