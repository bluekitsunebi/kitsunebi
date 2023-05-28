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
import { languageModulesDescription } from "../../../../helpers/data/generalData";
import Subtitle from "../../../title/Subtitle";

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
      dispatch(setHeight(languageCoursesSectionRef.current.offsetHeight));
      const rect = languageCoursesSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition =
        rect.top +
        yOffset -
        parseFloat(
          getComputedStyle(languageCoursesSectionRef.current).paddingTop
        );
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the languageCoursesSection position")
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  const description = languageModulesDescription();
  return (
    <section
      id="languageCoursesSection"
      ref={languageCoursesSectionRef}
      className={styles.languageCoursesSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Cursuri de limbi straine" />
      </div>

      <div className={styles.description}>{description}</div>

      <Subtitle
        text="Cursuri cu predare in limba:"
        className={styles.subtitle}
      />

      <div className={styles.buttonsContainer}>
        <div
          className={`${styles.button} ${
            selectedButton === "romanian" ? styles.selected_ro : styles.empty
          }`}
          onClick={handleClick__ro}
        >
          Romana
        </div>
        <div
          className={`${styles.button} ${
            selectedButton === "english" ? styles.selected_eng : styles.empty
          }`}
          onClick={handleClick__eng}
        >
          Engleza
        </div>
        <div
          className={`${styles.button} ${
            selectedButton === "japanese" ? styles.selected_jp : styles.empty
          }`}
          onClick={handleClick__jp}
        >
          Japoneza
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
