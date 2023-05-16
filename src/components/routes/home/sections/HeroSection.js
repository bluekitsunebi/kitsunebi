import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import Button from "../../../Button"

let timer = 0;

export default function HeroSection({ onRender }) {
  const heroSectionRef = useRef(null);
  const halfBackgroundLeftRef = useRef(null);
  const halfBackgroundRightRef = useRef(null);
  const coverContentContainerLeftRef = useRef(null);
  const coverContentContainerRightRef = useRef(null);
  const descriptionLeftRef = useRef(null);
  const descriptionRightRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  

  useEffect(() => {
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender]);

  window.addEventListener('resize', function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      halfBackgroundLeftRef.current.style.transition = "none"
      halfBackgroundRightRef.current.style.transition = "none"
      coverContentContainerLeftRef.current.style.transition = "none"
      coverContentContainerRightRef.current.style.transition = "none"
    }
    timer = setTimeout(() => {
      halfBackgroundLeftRef.current.style.transition = "all .2s linear"
      halfBackgroundRightRef.current.style.transition = "all .2s linear"
      coverContentContainerLeftRef.current.style.transition = "all .2s linear"
      coverContentContainerRightRef.current.style.transition = "all .2s linear"
      timer = null;
    }, 100);
  })

  return (
    <section id="heroSection" ref={heroSectionRef} className={styles.heroSection}>
      <div
        className={styles.cover}
        onMouseLeave={() => {
          titleLeftRef.current.innerHTML = "Language Courses"
          halfBackgroundLeftRef.current.style.width = "60vw"
          halfBackgroundRightRef.current.style.width = "60vw"
          halfBackgroundLeftRef.current.style.clipPath = "polygon(0% 0%, 0% 100%, 66.6% 100%, 100% 0%)"
          halfBackgroundRightRef.current.style.clipPath = "polygon(33.4% 0%, 0% 100%, 100% 100%, 100% 0%)"
          coverContentContainerLeftRef.current.style.width = "40vw"
          coverContentContainerRightRef.current.style.width = "40vw"
        }}
      >
        
        <div 
          id="halfBackgroundLeft" ref={halfBackgroundLeftRef}
          className={`${styles.halfBackground} ${styles.halfBackground__left}`}
          onMouseEnter={() => {
            descriptionRightRef.current.style.display = "none"
            titleLeftRef.current.innerHTML = "Language<br>Courses"
            halfBackgroundLeftRef.current.style.width = "70vw"
            halfBackgroundRightRef.current.style.width = "50vw"
            halfBackgroundLeftRef.current.style.clipPath = "polygon(0% 0%, 0% 100%, 71.42% 100%, 100% 0%)"
            halfBackgroundRightRef.current.style.clipPath = "polygon(40% 0%, 0% 100%, 100% 100%, 100% 0%)"
            coverContentContainerLeftRef.current.style.width = "50vw"
            coverContentContainerRightRef.current.style.width = "30vw"
            descriptionLeftRef.current.style.display = "flex"
            descriptionLeftRef.current.style.color = "transparent"
            descriptionLeftRef.current.style.width = "0"
            setTimeout(() => {
              descriptionLeftRef.current.style.width = "30vw"
            }, 0)
            setTimeout(() => {
              descriptionLeftRef.current.style.color = "aliceblue"
            }, 200)
          }}
          onMouseLeave={() => {
            descriptionLeftRef.current.style.display = "none"
          }}
        >
          <div id="coverContentContainerLeft" ref={coverContentContainerLeftRef} className={styles.coverContentContainer}>
            <div className={styles.coverText}>
              <div className={styles.titleImageCategoriesContainer}>
                <div className={`${styles.coverContainer} ${styles.coverLeft}`}>
                  <div className={`${styles.iconLeft} ${styles.icon}`}>和</div>
                </div>
                
                <div id="titleLeft" ref={titleLeftRef} className={styles.title}>Language Courses</div>
                <Button
                  name="find out more"
                  text="find out more"
                  type="empty"
                  position="left"
                  underlinedButton=""
                  transform="capitalizeFirstLetter"
                  section="languageCoursesSection"
                />
              </div>
              <ul id="descriptionLeft" ref={descriptionLeftRef} className={`${styles.description} ${styles.description__left}`}>
                <li>courses available for Japanese and English languages</li>
                <li>interactive learning activities</li>
                <li>structured curriculum</li>
                <li>taught by experienced instructor</li>
                <li>opportunities for one-on-one tutoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          id="halfBackgroundRight" ref={halfBackgroundRightRef}
          className={`${styles.halfBackground} ${styles.halfBackground__right}`}
          onMouseEnter={() => {
            descriptionLeftRef.current.style.display = "none"
            titleLeftRef.current.innerHTML = "Language<br>Courses"
            halfBackgroundLeftRef.current.style.width = "50vw"
            halfBackgroundRightRef.current.style.width = "70vw"
            halfBackgroundLeftRef.current.style.clipPath = "polygon(0% 0%, 0% 100%, 60% 100%, 100% 0%)"
            halfBackgroundRightRef.current.style.clipPath = "polygon(28.57% 0%, 0% 100%, 100% 100%, 100% 0%)"
            coverContentContainerLeftRef.current.style.width = "30vw"
            coverContentContainerRightRef.current.style.width = "50vw"
            descriptionRightRef.current.style.display = "flex"
            descriptionRightRef.current.style.color = "transparent"
            descriptionRightRef.current.style.width = "0"
            setTimeout(() => {
              descriptionRightRef.current.style.width = "30vw"
            }, 0)
            setTimeout(() => {
              descriptionRightRef.current.style.color = "aliceblue"
            }, 200)
            
          }}

          onMouseLeave={() => {
            descriptionRightRef.current.style.display = "none"
          }}
        >
          <div id="coverContentContainerRight" ref={coverContentContainerRightRef} className={`${styles.coverContentContainer} ${styles.coverContentContainer__right}`}>
            <div className={styles.coverText}>
              <ul id="descriptionRight" ref={descriptionRightRef} className={`${styles.description} ${styles.description__right}`}>
                <li>latest HTML and CSS standards and modern JavaScript</li>
                <li>hands-on learning</li>
                <li>real-world projects</li>
                <li>structured curriculum</li>
                <li>support and feedback</li>
              </ul>
              <div className={styles.titleImageCategoriesContainer}>
                
                <div className={`${styles.coverContainer} ${styles.coverRight}`}>
                  <span className={`material-icons-round ${styles.iconRight} ${styles.gear1} ${styles.icon}`}>
                    settings
                  </span>
                  <span className={`material-icons-round ${styles.iconRight} ${styles.gear2} ${styles.icon}`}>
                    settings
                  </span>
                  <span className={`material-icons-round ${styles.iconRight} ${styles.gear3} ${styles.icon}`}>
                    settings
                  </span>
                </div>

                <div id="titleRight" ref={titleRightRef} className={styles.title}>Programming</div>
                <Button
                  name="find out more"
                  text="find out more"
                  type="empty"
                  position="right"
                  underlinedButton=""
                  transform="capitalizeFirstLetter"
                  section="programmingSection"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
