import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeroSectionV2.module.css";
import Button from "../../../Button";
import {
  setHeroSection__entered,
  setBackgroundLeft__entered,
  setTitleLeft__entered,
  setDescriptionLeft__entered,
} from "../../../../store/heroSectionSlice";

let timer = 0;

export default function HeroSection({ onRender }) {
  const heroSectionRef = useRef(null);
  const halfBackgroundLeftRef = useRef(null);
  const titleLeftRef = useRef(null);
  const descriptionRightRef = useRef(null);

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
            ${styles.halfBackground} ${styles.halfBackground__left}
            ${
              isEntered__backgroundLeft === "false" ||
              isEntered__titleLeft === "false" ||
              isEntered__descriptionLeft === "false"
                ? styles.expandLeft
                : styles.contractLeft
            }
        `}
        onMouseEnter={handleMouseEnter__left}
        onMouseLeave={handleMouseLeave__left}
      ></div>

      <div
        className={`
        ${styles.titleImageContainer}
        ${styles.titleImageContainer__left}
        ${
          isEntered__backgroundLeft === "false" ||
          isEntered__titleLeft === "false" ||
          isEntered__descriptionLeft === "false"
            ? styles.pushTitleLeft
            : styles.pullTitleLeft
        }
        `}
        onMouseEnter={handleMouseEnter__titleLeft}
        onMouseLeave={handleMouseLeave__titleLeft}
      >
        <div className={`${styles.coverContainer} ${styles.coverLeft}`}>
          <div className={`${styles.iconLeft} ${styles.icon}`}>和</div>
        </div>

        <div id="titleLeft" ref={titleLeftRef} className={styles.title}>
          <div>Cursuri online</div>
          <div>de Japoneza</div>
        </div>
        <Button
          name="find out more"
          text="afla mai multe"
          type="empty"
          position="left"
          underlinedButton=""
          transform="capitalizeFirstLetter"
          section="languageCoursesSection"
        />
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
            ${isEntered__hero === "false" &&
            isEntered__backgroundLeft === "true" &&
            isEntered__titleLeft === "true" &&
            isEntered__descriptionLeft === "true" ? styles.pushTitleRight : styles.pullTitleRight}
        `}
      >
        {/* GEARS */}
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

        {/* TITLE */}
        <div id="titleRight" className={`
            ${styles.title}
            
        `}>
          <div>Dezvoltare</div>
          <div>Software</div>
        </div>

        {/* BUTTON */}
        <Button
          name="find out more"
          text="afla mai multe"
          type="empty"
          position="right"
          underlinedButton=""
          transform="capitalizeFirstLetter"
          section="programmingSection"
        />
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
