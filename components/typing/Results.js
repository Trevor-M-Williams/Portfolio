import ResultsItem from "./ResultsItem";
import Score from "./Score";
import Next from "./Next";

function Results({
  results,
  accuracy,
  time,
  WPM,
  score,
  highScore,
  handleNext,
}) {
  let minutes = Math.round(time / 60);
  let seconds = Math.round(time % 60);
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div
      className={`flex flex-wrap absolute inset-0 z-10 h-full py-10 bg-slate-500 text-white font-medium transition-all duration-500 ease-in-out overflow-hidden 
      ${results ? "-translate-y-0" : "-translate-y-full"} `}
    >
      {results && (
        <>
          <ResultsItem title="Accuracy" value={accuracy} />
          <ResultsItem title="Time" value={`${minutes}:${seconds}`} />
          <ResultsItem title="WPM" value={WPM} />
          <Score score={score} highScore={highScore} />
          <Next handleNext={handleNext} />
        </>
      )}
    </div>
  );
}

export default Results;
