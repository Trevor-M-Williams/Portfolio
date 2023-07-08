import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import Map from "./Map";
import Nav from "./Nav";
import { level_1, level_2, level_3, level_4, level_5 } from "./Countries";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [counter, setCounter] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [countries, setCountries] = useState([]);
  const [gamestate, setGamestate] = useState(0);
  const [time, setTime] = useState(0);
  const [last, setLast] = useState();
  const levelArrays = [level_1, level_2, level_3, level_4, level_5];
  const prompt = countries[counter];
  const total = countries.length;

  useEffect(() => {
    setCountries(shuffle(levelArrays[level - 1]));
  }, [level]);

  return (
    <div>
      <Overlay
        setLevel={setLevel}
        gamestate={gamestate}
        setGamestate={setGamestate}
        correct={correct}
        total={total}
        time={time}
      />
      <Map
        prompt={prompt}
        countries={countries}
        counter={counter}
        correct={correct}
        total={total}
        last={last}
        setCounter={setCounter}
        setCorrect={setCorrect}
        setGamestate={setGamestate}
        setLast={setLast}
      />
      {gamestate > 0 && (
        <Nav
          prompt={prompt}
          counter={counter}
          total={total}
          gamestate={gamestate}
          setTime={setTime}
          last={last}
        />
      )}
    </div>
  );
}

function shuffle(array) {
  let n = array.length;
  let shuffledArray = [];
  while (shuffledArray.length < n) {
    let index = Math.floor(Math.random() * n);
    let country = array[index];
    if (!shuffledArray.includes(country)) {
      shuffledArray.push(country);
    }
  }
  return shuffledArray;
}
