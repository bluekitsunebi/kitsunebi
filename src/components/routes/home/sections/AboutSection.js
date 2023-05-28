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
  console.log("homeWasRendered: ", homeWasRendered)
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();
  const description = aboutSectionDescription();

  useEffect(() => {
    if(homeWasRendered === "true") {
      dispatch(setHeight(aboutSectionRef.current.offsetHeight));
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition =
        rect.top +
        yOffset -
        parseFloat(getComputedStyle(aboutSectionRef.current).paddingTop);
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the aboutSection position")
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
