function ResultsItem({ title, value }) {
  return (
    <div className="flex flex-col items-center w-1/3 h-1/3 py-10">
      <div className="text-3xl pb-4">{title}</div>
      <div className="text-5xl">{value}</div>
    </div>
  );
}

export default ResultsItem;
