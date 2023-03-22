import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section id="heroSection" className={styles.heroSection}>
      <div className={styles.cover}>
        
        <div className={`${styles.halfBackground} ${styles.halfBackground__left}`}>
          <div className={styles.coverContentContainer}>
            <div className={styles.topCover}></div>
            <div className={styles.coverText}>
              <h1 className={styles.title}>Language Courses</h1>
              <p className={styles.subtitle}>
                Japanese
              </p>
              <p className={styles.subtitle}>
                English
              </p>
              <p className={styles.subtitle}>
                Romanian
              </p>
            </div>


          </div>
        </div>

        <div className={`${styles.halfBackground} ${styles.halfBackground__right}`}>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
