import React, { useState, useEffect, useRef } from "react";
import styles from "./QuestionAndAnswer.module.css";

export default function QuestionAndAnswer(props) {
//   const [isOpen, setIsOpen] = useState(props.isOpen);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const answerRef = useRef(null);
  let question = props.question;
  let answer = props.answer;
  let onOpen = props.onOpen;
  let isOpen = props.isOpen;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setDisplayedAnswer(answer);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setDisplayedAnswer("");
    }
  }, [isOpen, answer]);

  const handleButtonClick = () => {
    // setIsOpen(!isOpen);
    onOpen(isOpen ? 'close' : 'open');
  };

  // Calculate the height of the content
  const answerHeight = isOpen && answerRef.current ? `15rem` : "0";

  return (
    <div
      className={`${styles.QuestionAndAnswer} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      <p
        className={`${styles.question}`}
        style={{
          boxShadow: isOpen
            ? "inset 0 8rem 0 var(--navy)"
            : "inset 0 6px 0 var(--navy)",
        }}
      >
        <span
          className={styles.question__text}
          style={{
            color: isOpen ? "white" : "inherit",
          }}
        >
          {question}
        </span>
        <button
          className={styles.openButton}
          style={{
            transform: isOpen ? "none" : "scaleY(-1)",
            color: isOpen ? "white" : "inherit",
          }}
          onClick={handleButtonClick}
        >
          ^
        </button>
      </p>
      <p
        ref={answerRef}
        className={`${styles.answer}`}
        style={{
          height: answerHeight,
          padding: isOpen ? "1rem 2rem" : "0",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {displayedAnswer}
      </p>
    </div>
  );
}
