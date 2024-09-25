import React, { useEffect, useState } from "react";
import "./JobTitle.css";

const JobTitle = () => {
  const titles = [
    "&nbsp;&nbsp;Frontend &nbsp;&nbsp;Developer",
    "&nbsp;&nbsp;MERN &nbsp;&nbsp;Stack&nbsp;&nbsp; Developer",
    "&nbsp;&nbsp;Java &nbsp;&nbsp;Developer",
    "&nbsp;&nbsp;Web&nbsp;&nbsp;Developer", // Add non-breaking space here
  ];
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const title = titles[index].replace(/&nbsp;/g, "\u00A0"); // Replace non-breaking space

    if (letterIndex < title.length) {
      const timeout = setTimeout(() => {
        setCurrentTitle((prev) => prev + title[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150); // Speed of letter appearance

      return () => clearTimeout(timeout);
    } else {
      // Wait for 1 second before moving to the next title
      const nextTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setLetterIndex(0);
        setCurrentTitle(""); // Clear the current title
      }, 1000); // Time before switching to the next title

      return () => clearTimeout(nextTimeout);
    }
  }, [letterIndex, index, titles]);

  return (
    <span className="job">
      {currentTitle.split("").map((letter, idx) => (
        <span key={idx} className="letter">
          {letter}
        </span>
      ))}
    </span>
  );
};

export default JobTitle;
