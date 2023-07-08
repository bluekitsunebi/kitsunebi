import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
  setSelectedButton,
} from "../../../../store/languageCoursesSectionSlice";
import styles from "./LanguageCoursesSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import CardsSubsection from "../../../Cards/CardsSubsection";
import Subtitle from "../../../title/Subtitle";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";

export default function LanguageCoursesSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const languageCoursesSectionRef = useRef(null);
  const engSubsectionRef = useRef(null);
  const jpSubsectionRef = useRef(null);
  const roSubsectionRef = useRef(null);
  const dispatch = useDispatch();

  let selectedButton = useSelector(
    (state) => state.languageCoursesSection.selectedButton
  );

  const handleClick__ro = () => {
    dispatch(setSelectedButton("romanian"));
  };
  const handleClick__eng = () => {
    dispatch(setSelectedButton("english"));
  };
  const handleClick__jp = () => {
    dispatch(setSelectedButton("japanese"));
  };

  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(languageCoursesSectionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        languageCoursesSectionRef.current.offsetHeight +
        paddingTop +
        paddingBottom;
      dispatch(setHeight(totalHeight));
      const rect = languageCoursesSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset;
      dispatch(setYaxisPosition(yPosition));
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let description = [...langData.LanguageCoursesSection.description];
  let motto = [...langData.LanguageCoursesSection.motto];
  let langButtons = [...langData.LanguageCoursesSection.langButtons];

  return (
    <section
      id="languageCoursesSection"
      ref={languageCoursesSectionRef}
      className={styles.languageCoursesSection}
    >
      <div className={styles.title}>
        <SectionTitle text={langData.LanguageCoursesSection.title} />
      </div>

      <div className={styles.description}>
        {description[0]}
        <br />
        <br />
        {description[1]}
        <br />
        <br />
        {description[2]}
        <br />
        <br />
        <em>
          <b>{motto[0]}</b>
          {motto[1]}
          <b>{motto[2]}</b>
          {motto[3]}
          <b>{motto[4]}</b>
          {motto[5]}
          <b>{motto[6]}</b>
          {motto[7]}
        </em>
      </div>

      <Subtitle
        text={langData.LanguageCoursesSection.subtitle}
        className={styles.subtitle}
      />

      <div className={styles.buttonsContainer}>
        <div
          className={`
            ${styles.button}
            ${language === "ja" ? styles.w12 : styles.w10}
            ${selectedButton === "romanian" ? styles.selected_ro : styles.empty}
            `}
          onClick={handleClick__ro}
        >
          {langButtons[0]}
        </div>
        <div
          className={`
            ${styles.button}
            ${language === "ja" ? styles.w12 : styles.w10}
            ${selectedButton === "english" ? styles.selected_eng : styles.empty}
            `}
          onClick={handleClick__eng}
        >
          {langButtons[1]}
        </div>
        <div
          className={`
          ${styles.button} 
          ${language === "ja" ? styles.w12 : styles.w10}
          ${selectedButton === "japanese" ? styles.selected_jp : styles.empty}
          `}
          onClick={handleClick__jp}
        >
          {langButtons[2]}
        </div>
      </div>

      <div className={`${selectedButton !== "romanian" && styles.hide}`}>
        <CardsSubsection id="CardsSubsectionRomanian" ref={roSubsectionRef} />
      </div>
      <div className={`${selectedButton !== "english" && styles.hide}`}>
        <CardsSubsection id="CardsSubsectionEnglish" ref={engSubsectionRef} />
      </div>
      <div className={`${selectedButton !== "japanese" && styles.hide}`}>
        <CardsSubsection id="CardsSubsectionJapanese" ref={jpSubsectionRef} />
      </div>
    </section>
  );
}
