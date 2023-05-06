import { React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHeight, setYaxisPosition } from "../../store/aboutSectionSlice";
import styles from "./AboutSection.module.css";
import SectionTitle from "../title/SectionTitle";
import { aboutSectionDescription } from "../../helpers/data/generalData";

function AboutSection() {
  const aboutSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(aboutSectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition(
        aboutSectionRef.current.getBoundingClientRect().top + window.pageYOffset
      )
    );
  }, [dispatch]);

  const description = aboutSectionDescription();

  return (
    <section
      id="aboutSection"
      ref={aboutSectionRef}
      className={styles.aboutSection}
    >
      <SectionTitle text="About" />
      <div className={styles.description}>{description}</div>
    </section>
  );
}

export default AboutSection;
