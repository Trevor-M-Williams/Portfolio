function Score({ score }) {
  return (
    <div className="h-2/3 w-full flex flex-col items-center justify-center">
      <div className="text-7xl pb-5">Score</div>
      <div className="text-9xl">{score}</div>
    </div>
  );
}

export default Score;
