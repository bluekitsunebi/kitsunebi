import { React, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/programmingSectionSlice";
import styles from "./ProgrammingSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";

export default function ProgrammingSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const programmingSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(programmingSectionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        programmingSectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));

      const rect = programmingSectionRef.current.getBoundingClientRect();
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
  let description = [...langData.ProgrammingSection.description];

  return (
    <section
      id="programmingSection"
      ref={programmingSectionRef}
      className={styles.programmingSection}
    >
      <div className={styles.title}>
        <SectionTitle text={langData.ProgrammingSection.title} />
      </div>
      <div className={styles.description}>
        {description[0]}
        <br />
        <br />
        {description[1]}
        <br />
        <br />
        {description[2]}
      </div>
    </section>
  );
}
