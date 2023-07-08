import { useState, useEffect } from "react";

const EightBall = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeSrc("https://main.d2wxi3azq0rkxs.amplifyapp.com/");
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default EightBall;
