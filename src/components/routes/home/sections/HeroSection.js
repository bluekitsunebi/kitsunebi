import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeroSection.module.css";
import Button from "../../../Button";
import {
  setHeroSection__entered,
  setBackgroundLeft__entered,
  setTitleLeft__entered,
  setDescriptionLeft__entered,
} from "../../../../store/heroSectionSlice";
import kanjiDrawing from "../../../../videos/kanjiAnimation.mp4";

export default function HeroSection({ onRender }) {
  const heroSectionRef = useRef(null);
  const halfBackgroundLeftRef = useRef(null);
  const titleImageContainer__leftRef = useRef(null);
  const titleImageContainer__rightRef = useRef(null);
  const titleLeftRef = useRef(null);

  const dispatch = useDispatch();
  let isEntered__hero = useSelector(
    (state) => state.heroSection.heroSection__entered
  );
  let isEntered__backgroundLeft = useSelector(
    (state) => state.heroSection.backgroundLeft__entered
  );
  let isEntered__titleLeft = useSelector(
    (state) => state.heroSection.titleLeft__entered
  );
  let isEntered__descriptionLeft = useSelector(
    (state) => state.heroSection.descriptionLeft__entered
  );

  let halfAnimation = "middle";

  if (
    isEntered__backgroundLeft === "false" ||
    isEntered__titleLeft === "false" ||
    isEntered__descriptionLeft === "false"
  ) {
    halfAnimation = "expand";
  } else if (
    isEntered__hero === "false" &&
    isEntered__backgroundLeft === "true" &&
    isEntered__titleLeft === "true" &&
    isEntered__descriptionLeft === "true"
  ) {
    halfAnimation = "contract";
  } else if (isEntered__hero === "true") {
    halfAnimation = "middle";
  }

  const handleMouseEnter__hero = () => {
    dispatch(setHeroSection__entered("false"));
  };
  const handleMouseLeave__hero = () => {
    dispatch(setHeroSection__entered("true"));
  };

  const handleMouseEnter__left = () => {
    dispatch(setBackgroundLeft__entered("false"));
  };
  const handleMouseLeave__left = () => {
    dispatch(setBackgroundLeft__entered("true"));
  };
  const handleMouseEnter__titleLeft = () => {
    dispatch(setTitleLeft__entered("false"));
  };
  const handleMouseLeave__titleLeft = () => {
    dispatch(setTitleLeft__entered("true"));
  };
  const handleMouseEnter__descriptionLeft = () => {
    dispatch(setDescriptionLeft__entered("false"));
  };
  const handleMouseLeave__descriptionLeft = () => {
    dispatch(setDescriptionLeft__entered("true"));
  };

  useEffect(() => {
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender]);

  // STOP ANIMATION WHEN WINDOW IS RESIZING

  // let isResizing = useSelector((state) => state.home.isResizing);
  // const wasRendered = useSelector((state) => state.home.wasRendered);

  // useEffect(() => {
  //   if (halfBackgroundLeftRef.current) {
  //     if (isResizing == true) {
  //       halfBackgroundLeftRef.current.style.transition = "none";
  //       titleImageContainer__leftRef.current.style.transition = "none";
  //       titleImageContainer__rightRef.current.style.transition = "none";
  //     }
  //     if (isResizing == false) {
  //       halfBackgroundLeftRef.current.style.transition = "all 0.2s linear";
  //       titleImageContainer__leftRef.current.style.transition =
  //         "all 0.2s linear";
  //       titleImageContainer__rightRef.current.style.transition =
  //         "all 0.2s linear";
  //     }
  //   }
  // }, [isResizing]);

  // VIDEO FOR KANJI ANIMATION

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.7;
      videoRef.current.addEventListener('ended', (event) => {
        setTimeout(() => {
          event.target.play();
        }, 1000);
      });
    }
  
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', (event) => {
          setTimeout(() => {
            event.target.play();
          }, 1000);
        });
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef2.current) {
      videoRef2.current.playbackRate = 1.7;
      videoRef2.current.addEventListener('ended', (event) => {
        setTimeout(() => {
          event.target.play();
        }, 1000);
      });
    }
  
    return () => {
      if (videoRef2.current) {
        videoRef2.current.removeEventListener('ended', (event) => {
          setTimeout(() => {
            event.target.play();
          }, 1000);
        });
      }
    };
  }, []);
  
  useEffect(() => {
    const videoElem = videoRef.current;
    const videoElem2 = videoRef2.current;
  
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (videoElem) {
          videoElem.play();
        }
        if (videoElem2) {
          videoElem2.play();
        }
      }
    };
  
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  

  return (
    <section
      id="heroSection"
      ref={heroSectionRef}
      className={styles.heroSection}
      onMouseEnter={handleMouseEnter__hero}
      onMouseLeave={handleMouseLeave__hero}
    >
      <div
        id="halfBackgroundLeft"
        ref={halfBackgroundLeftRef}
        className={`
            ${styles.halfBackground} ${styles.halfBackgroundLeft}
            ${halfAnimation === "middle" && styles.middle}
            ${halfAnimation === "expand" && styles.expandLeft}
            ${halfAnimation === "contract" && styles.contractLeft}
        `}
        onMouseEnter={handleMouseEnter__left}
        onMouseLeave={handleMouseLeave__left}
      ></div>

      <div
        className={`
        ${styles.titleImageContainer}
        ${styles.titleImageContainer__left}
        ${
          isEntered__hero === "false"
            ? styles.pushTitleLeft
            : styles.pullTitleLeft
        }
        `}
        ref={titleImageContainer__leftRef}
        onMouseEnter={handleMouseEnter__titleLeft}
        onMouseLeave={handleMouseLeave__titleLeft}
      >
        <div className={styles.container__top}>
          <div className={`${styles.coverContainer} ${styles.coverLeft}`}>
            <div className={`${styles.iconLeft} ${styles.icon}`}>
              <video
                autoPlay
                muted
                playsInline
                ref={videoRef}
                className={styles.kanjiDrawing}
              >
                <source src={kanjiDrawing} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div id="titleLeft" ref={titleLeftRef} className={styles.title}>
          <div>Cursuri online</div>
          <div>de Japoneza</div>
        </div>
        <div className={`${styles.button} ${styles.button__top}`}>
          <Button
            name="find out more"
            text="afla mai multe"
            type="empty"
            position="left"
            underlinedButton=""
            transform="capitalizeFirstLetter"
            section="languageCoursesSection"
            link="/"
          />
        </div>
      </div>

      <ul
        id="descriptionLeft"
        className={`
            ${styles.description} ${styles.description__left}
            ${
              isEntered__backgroundLeft === "false" ||
              isEntered__titleLeft === "false" ||
              isEntered__descriptionLeft === "false"
                ? styles.show
                : styles.hide
            }
        `}
        onMouseEnter={handleMouseEnter__descriptionLeft}
        onMouseLeave={handleMouseLeave__descriptionLeft}
      >
        <li>disponibile pentru toate nivelurile</li>
        <li>sedinte individuale sau de grup</li>
        <li>personalizate pe nivelul si ritmul de studiu al cursantilor</li>
        <li>
          raspuns la orice intrabare chiar si in afara orelor de curs, in decurs
          de 24 de ore.
        </li>
        <li>materiale de studiu personalizate</li>
      </ul>

      {/* ------------------------ RIGHT ---------------------------- */}
      <div
        className={`
            ${styles.titleImageContainer}
            ${styles.titleImageContainer__right}
            ${
              isEntered__hero === "false"
                ? styles.pushTitleRight
                : styles.pullTitleRight
            }
            
        `}
        ref={titleImageContainer__rightRef}
      >
        {/* GEARS */}
        <div className={styles.container__bottom}>
          <div className={`${styles.coverContainer} ${styles.coverRight}`}>
            <span
              className={`material-icons-round ${styles.iconRight} ${styles.gear1} ${styles.icon}`}
            >
              settings
            </span>
            <span
              className={`material-icons-round ${styles.iconRight} ${styles.gear2} ${styles.icon}`}
            >
              settings
            </span>
            <span
              className={`material-icons-round ${styles.iconRight} ${styles.gear3} ${styles.icon}`}
            >
              settings
            </span>
          </div>
        </div>

        {/* TITLE */}
        <div
          id="titleRight"
          className={`
            ${styles.title}
            ${styles.title__right}
        `}
        >
          <div>Dezvoltare</div>
          <div>Software</div>
        </div>

        {/* BUTTON */}
        <div className={`${styles.button} ${styles.button__bottom}`}>
          <Button
            name="find out more"
            text="afla mai multe"
            type="empty"
            position="right"
            underlinedButton=""
            transform="capitalizeFirstLetter"
            section="programmingSection"
            link="/"
          />
        </div>
      </div>

      {/* ------------------------ MOBILE ------------------------ */}

      <div className={styles.coverTop}>
        {/* JAPANESE COURSES */}
        <div className={styles.coverTop__mobile}>
          <div>
            <div
              className={`
                ${styles.titleImageContainer__mobile}
                ${styles.titleImageContainer__left}
                ${
                  isEntered__hero === "false"
                    ? styles.pushTitleLeft
                    : styles.pullTitleLeft
                }
              `}
              ref={titleImageContainer__leftRef}
              onMouseEnter={handleMouseEnter__titleLeft}
              onMouseLeave={handleMouseLeave__titleLeft}
            >
              <div className={styles.container__top}>
                <div className={`${styles.coverContainer} ${styles.coverLeft}`}>
                  <div className={`${styles.iconLeft} ${styles.icon}`}>
                    <video
                      autoPlay
                      muted
                      playsInline
                      ref={videoRef2}
                      className={styles.kanjiDrawing}
                    >
                      <source src={kanjiDrawing} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div id="titleLeft" ref={titleLeftRef} className={styles.title}>
                <div>Cursuri online</div>
                <div>de Japoneza</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.button__mobile} ${styles.button__mobile__top} ${styles.buttonMobile__top}`}
          >
            <Button
              name="find out more"
              text="afla mai multe"
              type="empty"
              position="left"
              underlinedButton=""
              transform="capitalizeFirstLetter"
              section="languageCoursesSection"
              link="/"
            />
          </div>
        </div>
      </div>

      {/* SOFTWARE DEV */}

      <div className={styles.coverBottom__mobile}>
        <div
          className={`
            ${styles.titleImageContainer__mobile}
            ${styles.titleImageContainer__right}
            ${
              isEntered__hero === "false"
                ? styles.pushTitleRight
                : styles.pullTitleRight
            }
            
        `}
          ref={titleImageContainer__rightRef}
        >
          {/* GEARS */}
          <div className={styles.container__bottom}>
            <div className={`${styles.coverContainer} ${styles.coverRight}`}>
              <span
                className={`material-icons-round ${styles.iconRight} ${styles.gear1} ${styles.icon}`}
              >
                settings
              </span>
              <span
                className={`material-icons-round ${styles.iconRight} ${styles.gear2} ${styles.icon}`}
              >
                settings
              </span>
              <span
                className={`material-icons-round ${styles.iconRight} ${styles.gear3} ${styles.icon}`}
              >
                settings
              </span>
            </div>
          </div>

          {/* TITLE */}
          <div
            id="titleRight"
            className={`
            ${styles.title}
            ${styles.title__right}
        `}
          >
            <div>Dezvoltare</div>
            <div>Software</div>
          </div>
        </div>

        <div
          className={`${styles.button__mobile} ${styles.button__mobile__bottom} ${styles.buttonMobile__bottom}`}
        >
          <Button
            name="find out more"
            text="afla mai multe"
            type="empty"
            position="right"
            underlinedButton=""
            transform="capitalizeFirstLetter"
            section="programmingSection"
            link="/"
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <ul
        id="descriptionRight"
        className={`
            ${styles.description}  ${styles.description__right}
            ${
              isEntered__hero === "false" &&
              isEntered__backgroundLeft === "true" &&
              isEntered__titleLeft === "true" &&
              isEntered__descriptionLeft === "true"
                ? styles.show
                : styles.hide
            }
        `}
      >
        <li>realizare de siteuri de prezentare custom</li>
        <li>dezvoltare de aplicatii pentru mobil</li>
        <li>utilizarea tehnologiilor dorite de clienti</li>
        <li>
          adaptare rapida la orice tip de proiect, echipa si mediu de dezvoltare
        </li>
        <li>
          familiarizati cu React, Laravel, Flutter, Python, Docker, PostrgreSQL
          si multe altele.
        </li>
      </ul>
    </section>
  );
}
