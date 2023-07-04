import React, { useState, useEffect, useRef } from "react";
import styles from "./WebsiteLanguageSwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/websiteLanguageSlice";

export default function WebsiteLanguageSwitcher() {
  let text = "";
  // get preffered language from store
  let language = useSelector((state) => state.websiteLanguage.language);

  // user sets website language
  const dispatch = useDispatch();
  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    setDropdownVisible(false)
  }

  // toggle dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Create a ref for the wrapper
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Function to hide dropdown if clicked outside
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    // Function to hide dropdown if scrolled
    function handleScroll() {
      setDropdownVisible(false);
    }

    // Add the mousedown and scroll event listeners when mounted
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the mousedown and scroll event listeners when unmounted
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [wrapperRef]);

  return (
    <div className={styles.WebsiteLanguageSwitcher} ref={wrapperRef}>
      <button className={styles.dropdown} onClick={toggleDropdown}>
        🌐 {language === "ro" ? "RO" : language === "ja" ? "JA" : "EN"}
      </button>
      <div
        className={`${styles.triangle} ${dropdownVisible ? "" : styles.hide}`}
      ></div>

      <div
        className={`${styles.dropdownContent} ${
          dropdownVisible ? "" : styles.hide
        }`}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <button
          className={`
            ${styles.websiteLangButton}
            ${styles.enWebsiteLang}
            ${language === "en" && styles.selected}
          `}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`
            ${styles.websiteLangButton} 
            ${styles.jpWebsiteLang}
            ${language === "ja" && styles.selected}
          `}
          onClick={() => changeLanguage("ja")}
        >
          日本語
        </button>
        <button
          className={`
            ${styles.websiteLangButton} 
            ${styles.roWebsiteLang}
            ${language === "ro" && styles.selected}
          `}
          onClick={() => changeLanguage("ro")}
        >
          Română
        </button>
      </div>
    </div>
  );
}
