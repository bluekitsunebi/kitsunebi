import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/aboutSectionSlice";
import styles from "./AboutSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import { aboutSectionDescription } from "../../../../helpers/data/generalData";

function AboutSection({ onRender }) {
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeight(aboutSectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition(
        aboutSectionRef.current.getBoundingClientRect().top + window.pageYOffset
      )
    );

    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender]);

  const description = aboutSectionDescription();

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
