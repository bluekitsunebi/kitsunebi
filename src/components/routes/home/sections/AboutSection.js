import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/aboutSectionSlice";
import styles from "./AboutSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";

function AboutSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();
  let paddingBottom = 0;
  let paddingTop = 0;

  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(aboutSectionRef.current);
      paddingTop = parseFloat(computedStyle.paddingTop);
      paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        aboutSectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));
      const rect = aboutSectionRef.current.getBoundingClientRect();
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
  let langData = language === "en" ? enData : language === "ja" ? jaData : roData;

  return (
    <section
      id="aboutSection"
      ref={aboutSectionRef}
      className={styles.aboutSection}
    >
      <SectionTitle text={langData.AboutSection.title} />
      <div className={styles.description}>
        {langData.AboutSection.description[0]}
        <br />
        <br />
        {langData.AboutSection.description[1]}
        <br />
        <br />
        {langData.AboutSection.description[2]}
      </div>
    </section>
  );
}

export default AboutSection;
