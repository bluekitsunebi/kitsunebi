import React from "react";
import styles from "./HeroSection.module.css";
import background from "../images/background.jpg"

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img className={styles.background} src={background} alt="background"></img>
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>Kitsunebi Japanese Language Course</h1>
      <p className={styles.slogan}>
        Unlock the Secrets of the Japanese Language, unleash your potential!
      </p>
    </section>
  );
}

export default HeroSection;
