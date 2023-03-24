import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import logo from "../images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [underlineButton, setUnderlineButton] = useState("home")

  const [headerColor, setHeaderColor] = useState("transparent")
  
  const listenScrollEvent = () => {
    window.scrollY > 0
      ? setHeaderColor("rgb(18,23,52)")
      : setHeaderColor("transparent")

    if(window.scrollY < window.innerHeight/2){
      setUnderlineButton("home")
      return
    }
    if(window.scrollY < window.innerHeight){
      setUnderlineButton("about")
      return
    }
    if(window.scrollY < window.innerHeight * 3/2){
      setUnderlineButton("language")
      return
    }
    if(window.scrollY < window.innerHeight * 4/2){
      setUnderlineButton("programming")
      return
    }
    if(window.scrollY < window.innerHeight * 5/2){
      setUnderlineButton("faq")
      return
    }
    if(window.scrollY < window.innerHeight * 6/2){
      setUnderlineButton("contact")
      return
    }
    // window.scrollY > window.innerHeight
    //   ? setUnderlineButton("about")
    //   : setUnderlineButton("home")
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
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "home" ? styles.button__underline : ""}`}
          onClick={() => {
            let element = document.getElementById("heroSection");
            element.scrollIntoView();
          }}
        >
          Home
        </button>

        <button
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "about" ? styles.button__underline : ""}`}
          onClick={() => {
            let element = document.getElementById("aboutSection");
            element.scrollIntoView();
          }}
        >
          About
        </button>

        <button
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "language" ? styles.button__underline : ""}`}
          onClick={() => {
            let element = document.getElementById("languageCoursesSection");
            element.scrollIntoView();
          }}
        >
          Language courses
        </button>

        <button
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "programming" ? styles.button__underline : ""}`}
          onClick={() => {
            let element = document.getElementById("programmingCoursesSection");
            element.scrollIntoView();
          }}
        >
          Programming courses
        </button>

        <button
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "faq" ? styles.button__underline : ""}`}
          onClick={() => {
            let element = document.getElementById("FAQsection");
            element.scrollIntoView();
          }}
        >
          FAQ
        </button>

        <button
          className={`${styles.button} ${styles.button__menu} ${underlineButton == "contact" ? styles.button__underline : ""}`}
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
