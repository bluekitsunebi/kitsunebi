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
  console.log("homeWasRendered: ", homeWasRendered);
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();
  const description = aboutSectionDescription();
  let paddingBottom = 0;
  let paddingTop = 0;
  console.log(paddingBottom);
  console.log(paddingTop);

  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(aboutSectionRef.current);
      paddingTop = parseFloat(computedStyle.paddingTop);
      paddingBottom = parseFloat(computedStyle.paddingBottom);
      console.log(paddingBottom);
      console.log(paddingTop);
      const totalHeight =
        aboutSectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition =
        rect.top +
        yOffset;
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the aboutSection position");
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
