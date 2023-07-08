import React, { useEffect, useRef } from "react";

export default function Nav(props) {
  const nav = useRef();
  const timer = useRef();
  const minutes = useRef(0);
  const seconds = useRef(0);
  const decimal = useRef(0);
  let interval = useRef();

  useEffect(() => {
    setTimeout(() => {
      nav.current.classList.remove("opacity-0");

      let start = new Date();
      interval.current = setInterval(() => {
        let now = new Date();
        let time = now - start;
        let min = Math.floor(time / 60000);
        let sec = Math.floor((time - min * 60000) / 1000);
        let dec = Math.round((time - min * 60000 - sec * 1000) / 10);
        minutes.current = min;
        seconds.current = sec;
        decimal.current = dec;
        timer.current.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
      }, 10);
    }, 1000);
  }, []);

  useEffect(() => {
    if (props.gamestate === 2) {
      props.setTime([minutes.current, seconds.current, decimal.current]);
      clearInterval(interval.current);
    }
  }, [props.gamestate]);

  useEffect(() => {
    if (props.last === false) wiggleNav(nav.current);
  }, [props.counter]);

  return (
    <div
      ref={nav}
      className="relative mx-auto mt-4 w-[90%] max-w-5xl h-14 rounded-full px-5 bg-white/25 backdrop-blur-sm flex items-center justify-between text-3xl opacity-0 transition duration-100"
    >
      <div ref={timer}>0:00</div>
      <div className="text-4xl font-semibold">{props.prompt}</div>
      <div>
        {props.counter + 1}/{props.total}
      </div>
    </div>
  );
}

function wiggleNav(nav) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      let delta = 1 * ((i % 2) * 2 - 1);
      if (i === 4) delta = 0;
      nav.style.transform = `rotate(${delta}deg)`;
    }, i * 50);
  }
}
