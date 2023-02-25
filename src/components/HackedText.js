import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HackedText.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function HackedText() {
  const [intervalId, setIntervalId] = useState(null);
  const [isContactPage, setIsContactPage] = useState(false);

  const onMouseOverHandler = (event) => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      const newText = event.target.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      event.target.innerText = newText;

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  const onClickHandler = () => {
    setIsContactPage(!isContactPage);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.querySelector("h1[data-value='100 NINJAS']");
      onMouseOverHandler({ target: element });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container-hacked">
      {isContactPage ? (
        <Link to="/" onClick={onClickHandler}>
          <h1 data-value="100 NINJAS" onMouseOver={onMouseOverHandler}>
            I00 N1NASJ
          </h1>
        </Link>
      ) : (
        <Link to="/contact" onClick={onClickHandler}>
          <h1 data-value="100 NINJAS" onMouseOver={onMouseOverHandler}>
            I00 N1NASJ
          </h1>
        </Link>
      )}
    </div>
  );
}

export default HackedText;
