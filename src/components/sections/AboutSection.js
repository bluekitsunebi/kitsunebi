import React from "react";
import styles from "./AboutSection.module.css";
import { useRef } from "react";

function AboutSection() {
  const aboutRef = useRef(null);

  return (
    <section id="aboutSection" ref={aboutRef} className={styles.aboutSection}>
        <div className={styles.title}>
            <h1 className={styles.title__text}>About</h1>
        </div>
    </section>
  );
}

export default AboutSection;
