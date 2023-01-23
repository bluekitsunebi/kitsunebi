import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.cover}>
        <h1 className={styles.title}>Kitsunebi Japanese Language Course</h1>
        <p className={styles.slogan}>
          Unlock the secrets of the japanese language. Unleash your potential!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
