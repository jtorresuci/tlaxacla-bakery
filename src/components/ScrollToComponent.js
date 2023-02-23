import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./ScrollToComponent.css";

const ScrollToComponent = ({ scrollToRef }) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setShowComponent(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrolledToBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
        if (window.pageYOffset > 100 && !scrolledToBottom) {
          setShowComponent({ up: true, down: true });
        } else if (window.pageYOffset === 0) {
          setShowComponent({ up: false, down: true });
        } else {
          setShowComponent({ up: true, down: false });
        }
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`scroll-to-component ${showComponent.up || showComponent.down ? "visible" : ""}`}>
      {showComponent.up && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" />
        </button>
      )}
      {showComponent.down && (
        <button className="scroll-to-button" onClick={scrollTo}>
          <FaArrowDown className="arrow-icon" />
        </button>
      )}
    </div>
  );
};

export default ScrollToComponent;
