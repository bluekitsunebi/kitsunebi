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
import { talismans, reading, writeing } from "../../../../images/images";
import teacherVideo from "../../../../videos/teacherVideo.mp4";

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
        <img
          src={talismans}
          className={`${styles.chibiImg} ${styles.talismans}`}
        ></img>
        <div className={`${styles.description0}`}>{description[0]}</div>

        <div className={`${styles.description1}`}>
          <div>{description[1][0]}</div>
          <div>{description[1][1]}</div>
        </div>
        <img
          src={reading}
          className={`${styles.chibiImg} ${styles.reading}`}
        ></img>

        <img
          src={writeing}
          className={`${styles.chibiImg} ${styles.writeing}`}
        ></img>
        <div className={`${styles.description2}`}>
          <div>{description[2][0]}</div>
          <div>{description[2][1]}</div>
          <div>
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
        </div>
      </div>

      {/* <Subtitle
        text={langData.LanguageCoursesSection.teacher.subtitle}
        className={styles.subtitle}
      />
      <Subtitle
        text={langData.LanguageCoursesSection.teacher.name}
        className={styles.subtitle}
      />

      <div className={styles.teacherSubsection}>

        <ul className={styles.teacherDescription}>
          <li className={styles.teacherDescription_item}>
            {langData.LanguageCoursesSection.teacher.description[0][0]}
            <span className={styles.highlight}>{langData.LanguageCoursesSection.teacher.description[0][1]}</span>
            {langData.LanguageCoursesSection.teacher.description[0][2]}
          </li>

          <li className={styles.teacherDescription_item}>
            {langData.LanguageCoursesSection.teacher.description[1][0]}
            <span className={styles.highlight}>{langData.LanguageCoursesSection.teacher.description[1][1]}</span>
            {langData.LanguageCoursesSection.teacher.description[1][2]}
          </li>

          <li className={styles.teacherDescription_item}>
            {langData.LanguageCoursesSection.teacher.description[2][0]}
            <span className={styles.highlight}>{langData.LanguageCoursesSection.teacher.description[2][1]}</span>
            {langData.LanguageCoursesSection.teacher.description[2][2]}
          </li>

          <li className={styles.teacherDescription_item}>
            {langData.LanguageCoursesSection.teacher.description[3][0]}
            <span className={styles.highlight}>{langData.LanguageCoursesSection.teacher.description[3][1]}</span>
            {langData.LanguageCoursesSection.teacher.description[3][2]}
          </li>

          <li className={styles.teacherDescription_item}>
            {langData.LanguageCoursesSection.teacher.description[4][0]}
            <span className={styles.highlight}>{langData.LanguageCoursesSection.teacher.description[4][1]}</span>
          </li>
        </ul>

        <div className={teacherVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mdAUDdzrCBM?si=vNRJW8qnUIwovFYh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div> */}


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
