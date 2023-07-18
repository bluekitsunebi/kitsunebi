import React, { useState, useEffect, useRef } from "react";
import styles from "./WebsiteLanguageSwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/websiteLanguageSlice";
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

export default function WebsiteLanguageSwitcher() {
  let text = "";
  // get preffered language from store
  let language = useSelector((state) => state.websiteLanguage.language);

  // user sets website language
  const dispatch = useDispatch();
  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    setDropdownVisible(false);
  };

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

  // check if mobile menu is open
  let isOpen = useSelector((state) => state.header.isOpen);

  return (
    <div
      className={`
        ${styles.WebsiteLanguageSwitcher} 
        ${styles.pr} 
        ${!isOpen ? styles.WebsiteLanguageSwitcherPa : styles.pr}`}
      ref={wrapperRef}
    >
      <button className={`${styles.dropdown}`} onClick={toggleDropdown}>
        <TranslateRoundedIcon className={styles.langIcon}/>
        {language === "ro" ? "RO" : language === "ja" ? "JA" : "EN"}
      </button>
      <div
        className={`
          ${styles.triangle} 
          ${!isOpen ? styles.pa : ""} 
          ${!isOpen ? styles.trianglePa : styles.triangleMenu} 
          ${dropdownVisible ? "" : styles.hide}`}
      ></div>

      <div
        className={`
        ${styles.dropdownContent} 
        ${!isOpen ? styles.pa : ""}
        ${!isOpen ? styles.dropdownContentPa : styles.dropdownMenu} 
        ${dropdownVisible ? "" : styles.hide}`}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <button
          className={`
            ${styles.websiteLangButton}
            ${styles.enWebsiteLang}
            ${language === "en" && styles.selected}
            ${styles.disabled}
          `}
          onClick={() => changeLanguage("en")}
          disabled
        >
          English
        </button>
        <button
          className={`
            ${styles.websiteLangButton} 
            ${styles.jpWebsiteLang}
            ${language === "ja" && styles.selected}
            ${styles.disabled}
          `}
          onClick={() => changeLanguage("ja")}
          disabled
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
