import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/aboutSectionSlice";
import styles from "./AboutSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import { aboutSectionDescription } from "../../../../helpers/data/generalData";

function AboutSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();
  const description = aboutSectionDescription();
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
      const yPosition =
        rect.top +
        yOffset;
      dispatch(setYaxisPosition(yPosition));
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  return (
    <section
      id="aboutSection"
      ref={aboutSectionRef}
      className={styles.aboutSection}
    >
      <SectionTitle text="Despre noi" />
      <div className={styles.description}>{description}</div>
    </section>
  );
}

export default AboutSection;
