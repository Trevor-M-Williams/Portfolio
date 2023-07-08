export default function StartScreen(props) {
  function handleStart(i) {
    props.setLevel(i);
    props.setGamestate(1);
  }

  function renderButtons() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      array.push(
        <div
          key={i}
          onClick={() => handleStart(i)}
          className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl font-bold mx-2 cursor-pointer hover:bg-blue-200"
        >
          {i}
        </div>
      );
    }
    return array;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {renderButtons()}
    </div>
  );
}
