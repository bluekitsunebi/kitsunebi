import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section id="heroSection" className={styles.heroSection}>
      <div className={styles.cover}>
        
        <div 
          id="halfBackgroundLeft" 
          className={`${styles.halfBackground} ${styles.halfBackground__left}`}
          onMouseOver={() => {
            document.getElementById("titleLeft").innerHTML = "Language Courses"
            document.getElementById("titleRight").innerHTML = "Programming<br>Courses"
            document.getElementById("halfBackgroundLeft").style.width = (window.innerWidth / 100 * 70).toString() + "px"
            document.getElementById("halfBackgroundRight").style.width = (window.innerWidth / 100 * 50).toString() + "px"
            document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 71.42% 100%, 100% 0%)"
            document.getElementById("halfBackgroundRight").style.clipPath = "polygon(40% 0%, 0% 100%, 100% 100%, 100% 0%)"
            document.getElementById("coverContentContainerLeft").style.width = "50vw"
            document.getElementById("coverContentContainerRight").style.width = "30vw"
          }}
        >
          <div id="coverContentContainerLeft" className={styles.coverContentContainer}>
            <div className={styles.topCover}></div>
            <div className={styles.coverText}>
              <h1 id="titleLeft" className={styles.title}>Language Courses</h1>
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

        <div 
          id="halfBackgroundRight"
          className={`${styles.halfBackground} ${styles.halfBackground__right}`}
          onMouseOver={() => {
            document.getElementById("titleLeft").innerHTML = "Language<br>Courses"
            document.getElementById("titleRight").innerHTML = "Programming Courses"
            document.getElementById("halfBackgroundLeft").style.width = (window.innerWidth / 100 * 50).toString() + "px"
            document.getElementById("halfBackgroundRight").style.width = (window.innerWidth / 100 * 70).toString() + "px"
            document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 60% 100%, 100% 0%)"
            document.getElementById("halfBackgroundRight").style.clipPath = "polygon(28.57% 0%, 0% 100%, 100% 100%, 100% 0%)"
            document.getElementById("coverContentContainerLeft").style.width = "30vw"
            document.getElementById("coverContentContainerRight").style.width = "50vw"
          }}
        >
          <div id="coverContentContainerRight" className={`${styles.coverContentContainer} ${styles.coverContentContainer__right}`}>
            <div className={styles.topCover}></div>
            <div className={styles.coverText}>
              <h1 id="titleRight" className={styles.title}>Programming Courses</h1>
              <p className={styles.subtitle}>
                HTML
              </p>
              <p className={styles.subtitle}>
                CSS
              </p>
              <p className={styles.subtitle}>
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
