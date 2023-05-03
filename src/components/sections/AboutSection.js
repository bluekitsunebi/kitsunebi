import React from "react";
import styles from "./AboutSection.module.css";
import SectionTitle from "../title/SectionTitle"

function AboutSection() {
  return (
    <section id="aboutSection" className={styles.aboutSection}>
      <SectionTitle text="About" />
    </section>
  );
}

export default AboutSection;
