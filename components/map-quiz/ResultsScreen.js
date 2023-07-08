import { useEffect, useRef } from "react";

export default function ResultsScreen(props) {
  const results = useRef();
  const minutes = props.time[0];
  const seconds = props.time[1];
  const decimal = props.time[2];

  useEffect(() => {
    setTimeout(() => {
      results.current.classList.remove("hidden");
    }, 1000);
  }, []);

  return (
    <div
      ref={results}
      className="absolute inset-0 text-[80px] flex flex-col items-center justify-center hidden"
    >
      <div className="my-4">
        {props.correct}/{props.total}
      </div>
      <div className="my-4">
        {minutes}:{seconds < 10 && "0"}
        {seconds}.{decimal < 10 && "0"}
        {decimal}
      </div>
    </div>
  );
}
