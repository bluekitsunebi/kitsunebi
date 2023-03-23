import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import logo from "../images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("transparent")

  const listenScrollEvent = () => {
    window.scrollY > 0
      ? setHeaderColor("rgb(18,23,52)")
      : setHeaderColor("transparent")
  }
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <header
      className={styles.header}
      style={{background: headerColor}}
    >
      <div className={styles.logoWithText}>
        <ReactSVG src={logo} className={styles.logo} />
        <div className={styles.logoName}>
          <p>Blue Kitsunebi</p>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("heroSection");
            element.scrollIntoView();
          }}
        >
          Home
        </button>

        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("aboutSection");
            element.scrollIntoView();
          }}
        >
          About
        </button>

        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("languageCoursesSection");
            element.scrollIntoView();
          }}
        >
          Language courses
        </button>

        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("programmingCoursesSection");
            element.scrollIntoView();
          }}
        >
          Programming courses
        </button>

        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("FAQsection");
            element.scrollIntoView();
          }}
        >
          FAQ
        </button>

        <button
          className={`${styles.button} ${styles.button__menu}`}
          onClick={() => {
            let element = document.getElementById("contactSection");
            element.scrollIntoView();
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
