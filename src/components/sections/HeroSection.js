import React from "react";
import styles from "./HeroSection.module.css";

let timer = 0;

function HeroSection() {
  window.addEventListener('resize', function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      this.document.getElementById("halfBackgroundLeft").style.transition = "none"
      this.document.getElementById("halfBackgroundRight").style.transition = "none"
      this.document.getElementById("coverContentContainerLeft").style.transition = "none"
      this.document.getElementById("coverContentContainerRight").style.transition = "none"
    }
    timer = setTimeout(() => {
      this.document.getElementById("halfBackgroundLeft").style.transition = "all .2s linear"
      this.document.getElementById("halfBackgroundRight").style.transition = "all .2s linear"
      this.document.getElementById("coverContentContainerLeft").style.transition = "all .2s linear"
      this.document.getElementById("coverContentContainerRight").style.transition = "all .2s linear"
      timer = null;
    }, 100);
  })

  // document.getElementById("cover").addEventListener("mouseleave", () => {
   
  // })

  return (
    <section id="heroSection" className={styles.heroSection}>
      <div
        className={styles.cover}
        onMouseLeave={() => {
          document.getElementById("titleLeft").innerHTML = "Language Courses"
          document.getElementById("titleRight").innerHTML = "Programming Courses"
          document.getElementById("halfBackgroundLeft").style.width = "60vw"
          document.getElementById("halfBackgroundRight").style.width = "60vw"
          document.getElementById("halfBackgroundLeft").style.clipPath = "polygon(0% 0%, 0% 100%, 66.6% 100%, 100% 0%)"
          document.getElementById("halfBackgroundRight").style.clipPath = "polygon(33.4% 0%, 0% 100%, 100% 100%, 100% 0%)"
          document.getElementById("coverContentContainerLeft").style.width = "40vw"
          document.getElementById("coverContentContainerRight").style.width = "40vw"
        }}
      >
        
        <div 
          id="halfBackgroundLeft" 
          className={`${styles.halfBackground} ${styles.halfBackground__left}`}
          onMouseOver={() => {
            document.getElementById("titleLeft").innerHTML = "Language Courses"
            document.getElementById("titleRight").innerHTML = "Programming<br>Courses"
            document.getElementById("halfBackgroundLeft").style.width = "70vw"
            document.getElementById("halfBackgroundRight").style.width = "50vw"
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
            document.getElementById("halfBackgroundLeft").style.width = "50vw"
            document.getElementById("halfBackgroundRight").style.width = "70vw"
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