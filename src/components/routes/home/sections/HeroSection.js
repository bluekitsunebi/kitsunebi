import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeroSection.module.css";
import bgHeroSectionSrc from "../../../../images/backgroundRight.webp";
import bgLeftSrc from "../../../../images/backgroundLeft.webp";
import kanjiDrawing from "../../../../videos/kanjiAnimation.mp4";
import Button from "../../../Button";
import {
  setHeroSection__entered,
  setBackgroundLeft__entered,
  setTitleLeft__entered,
  setDescriptionLeft__entered,
  setVideosLoaded,
} from "../../../../store/heroSectionSlice";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";

export default function HeroSection({ onRender }) {
  // refference to the Hero section and the left half of the background
  const heroSectionRef = useRef(null);
  const halfBackgroundLeftRef = useRef(null);

  // fadein effect for background
  const bgHeroSectionImage = new Image();
  bgHeroSectionImage.src = bgHeroSectionSrc;
  const bgLeftImage = new Image();
  bgLeftImage.src = bgLeftSrc;
  const [imageHeroSectionLoaded, setImageHeroSectionLoaded] = useState(false);
  const [imageLeftLoaded, setImageLeftLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // check when the images have loaded
  useEffect(() => {
    const handleImageHeroSectionLoad = () => {
      setImageHeroSectionLoaded(true);
    };
    const handleImageLeftLoad = () => {
      setImageLeftLoaded(true);
    };
    bgHeroSectionImage.addEventListener("load", handleImageHeroSectionLoad);
    bgLeftImage.addEventListener("load", handleImageLeftLoad);
    return () => {
      bgHeroSectionImage.removeEventListener(
        "load",
        handleImageHeroSectionLoad
      );
      bgLeftImage.removeEventListener("load", handleImageLeftLoad);
    };
  }, []);

  useEffect(() => {
    if (imageHeroSectionLoaded && imageLeftLoaded) {
      setImagesLoaded(true);
    }
  }, [imageHeroSectionLoaded, imageLeftLoaded]);

  // change background opacity
  useEffect(() => {
    if (imagesLoaded) {
      heroSectionRef.current.setAttribute("data-bg-loaded", "true");
      heroSectionRef.current.style.setProperty(
        "--hero-bg",
        `url(${bgHeroSectionSrc})`
      );
      halfBackgroundLeftRef.current.setAttribute("data-bg-loaded", "true");
      halfBackgroundLeftRef.current.style.setProperty(
        "--half-left-bg",
        `url(${bgLeftSrc})`
      );
    }
  }, [imagesLoaded]);

  // check if the video has loaded

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);
  let videosLoaded = useSelector((state) => state.heroSection.videosLoaded);

  useEffect(() => {
    const handleVideoLoad = () => {
      if (!videoLoaded) {
        setVideoLoaded(true);
      }
    };
    const handleVideo2Load = () => {
      if (!video2Loaded) {
        setVideo2Loaded(true);
      }
    };
    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", handleVideoLoad);
    }
    if (videoRef2.current) {
      videoRef2.current.addEventListener("canplay", handleVideo2Load);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleVideoLoad);
      }

      if (videoRef2.current) {
        videoRef2.current.removeEventListener("canplay", handleVideo2Load);
      }
    };
  }, [videoLoaded, video2Loaded, videoRef.current, videoRef2.current]);

  // fadein effect for .titleImageContainer, .description and .button
  useEffect(() => {
    if (videoLoaded && video2Loaded && heroSectionRef.current) {
      dispatch(setVideosLoaded(true));
      heroSectionRef.current.setAttribute("data-video-loaded", "true");
      heroSectionRef.current.setAttribute("data-video2-loaded", "true");
    }
  }, [videoLoaded, video2Loaded, heroSectionRef.current]);

  // --------------------------------------------------------
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

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let titleLeft = [...langData.HeroSection.title.left];
  let titleRight = [...langData.HeroSection.title.right];
  let descriptionLeft = [...langData.HeroSection.description.left];
  let descriptionRight = [...langData.HeroSection.description.right];

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
        <video
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          className={styles.kanjiDrawing}
        >
          <source src={kanjiDrawing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="titleLeft" ref={titleLeftRef} className={styles.title}>
          <div>{titleLeft[0]}</div>
          <div>{titleLeft[1]}</div>
        </div>
        <div className={`${styles.button} ${styles.button__top}`}>
          <Button
            name="find out more"
            text={langData.HeroSection.mainButton}
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
        <li>{descriptionLeft[0]}</li>
        <li>{descriptionLeft[1]}</li>
        <li>{descriptionLeft[2]}</li>
        <li>{descriptionLeft[3]}</li>
        <li>{descriptionLeft[4]}</li>
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
            <SettingsRoundedIcon
              className={`${styles.iconRight} ${styles.gear1} ${styles.icon}`}
            />
            <SettingsRoundedIcon
              className={`${styles.iconRight} ${styles.gear2} ${styles.icon}`}
            />
            <SettingsRoundedIcon
              className={`${styles.iconRight} ${styles.gear3} ${styles.icon}`}
            />
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
          <div>{titleRight[0]}</div>
          <div>{titleRight[1]}</div>
        </div>

        {/* BUTTON */}
        <div className={`${styles.button} ${styles.button__bottom}`}>
          <Button
            name="find out more"
            text={langData.HeroSection.mainButton}
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
              <div className={`${styles.iconLeft} ${styles.icon}`}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  ref={videoRef2}
                  className={styles.kanjiDrawing}
                >
                  <source src={kanjiDrawing} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div id="titleLeft" ref={titleLeftRef} className={styles.title}>
                <div>{titleLeft[0]}</div>
                <div>{titleLeft[1]}</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.button__mobile} ${styles.button__mobile__top} ${styles.buttonMobile__top}`}
          >
            <Button
              name="find out more"
              text={langData.HeroSection.mainButton}
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
              <SettingsRoundedIcon
                className={`${styles.iconRight} ${styles.gear1} ${styles.icon}`}
              />
              <SettingsRoundedIcon
                className={`${styles.iconRight} ${styles.gear2} ${styles.icon}`}
              />
              <SettingsRoundedIcon
                className={`${styles.iconRight} ${styles.gear3} ${styles.icon}`}
              />
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
            <div>{titleRight[0]}</div>
            <div>{titleRight[1]}</div>
          </div>
        </div>

        <div
          className={`${styles.button__mobile} ${styles.button__mobile__bottom} ${styles.buttonMobile__bottom}`}
        >
          <Button
            name="find out more"
            text={langData.HeroSection.mainButton}
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
        <li>{descriptionRight[0]}</li>
        <li>{descriptionRight[1]}</li>
        <li>{descriptionRight[2]}</li>
        <li>{descriptionRight[3]}</li>
        <li>{descriptionRight[4]}</li>
      </ul>
    </section>
  );
}
