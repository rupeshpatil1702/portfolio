// LetterAnimation.js
import React, { useEffect, useState } from "react";
import "./LetterAnimation.css";

const LetterAnimation = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <div className="animated-text">{displayedText}</div>;
};

export default LetterAnimation;
