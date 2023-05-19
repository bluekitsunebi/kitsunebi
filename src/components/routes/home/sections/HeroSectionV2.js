import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeroSectionV2.module.css";
import Button from "../../../Button";
import {
  setHeroSection__entered,
  setBackgroundLeft__entered,
  setBackgroundRight__entered,
  setTitleLeft__entered,
  setTitleRight__entered,
  setDescriptionLeft__entered,
  setDescriptionRight__entered,
} from "../../../../store/heroSectionSlice";

let timer = 0;

export default function HeroSection({ onRender }) {
  const heroSectionRef = useRef(null);
  const halfBackgroundLeftRef = useRef(null);
  const halfBackgroundRightRef = useRef(null);
  const coverContentContainerLeftRef = useRef(null);
  const coverContentContainerRightRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  const descriptionLeftRef = useRef(null);
  const descriptionRightRef = useRef(null);

  const dispatch = useDispatch();
  let isEntered__heroSection = useSelector(
    (state) => state.heroSection.heroSection__entered
  );
  let isEntered__backgroundLeft = useSelector(
    (state) => state.heroSection.backgroundLeft__entered
  );
  let isEntered__backgroundRight = useSelector(
    (state) => state.heroSection.backgroundRight__entered
  );
  let isEntered__titleLeft = useSelector(
    (state) => state.heroSection.titleLeft__entered
  );
  let isEntered__titleRight = useSelector(
    (state) => state.heroSection.titleRight__entered
  );
  let isEntered__descriptionLeft = useSelector(
    (state) => state.heroSection.descriptionLeft__entered
  );
  let isEntered__descriptionRight = useSelector(
    (state) => state.heroSection.descriptionRight__entered
  );

  const handleMouseEnter__left = () => {
    dispatch(setBackgroundLeft__entered("false"));
    // console.log("backgroundLeft: ", isEntered__backgroundLeft);
  };
  const handleMouseLeave__left = () => {
    dispatch(setBackgroundLeft__entered("true"));
    // console.log("backgroundLeft: ", isEntered__backgroundLeft);
  };
  const handleMouseEnter__titleLeft = () => {
    dispatch(setTitleLeft__entered("false"));
    // console.log("titleLeft: ", isEntered__titleLeft);
  };
  const handleMouseLeave__titleLeft = () => {
    dispatch(setTitleLeft__entered("true"));
    // console.log("titleLeft: ", isEntered__titleLeft);
  };
  const handleMouseEnter__descriptionLeft = () => {
    dispatch(setDescriptionLeft__entered("false"));
    // console.log("descriptionLeft: ", isEntered__descriptionLeft);
  };
  const handleMouseLeave__descriptionLeft = () => {
    dispatch(setDescriptionLeft__entered("true"));
    // console.log("descriptionLeft: ", isEntered__descriptionLeft);
  };

  return (
    <section
      id="heroSection"
      ref={heroSectionRef}
      className={styles.heroSection}
    >
      <div
        id="halfBackgroundLeft"
        ref={halfBackgroundLeftRef}
        className={`
            ${styles.halfBackground} ${styles.halfBackground__left}
            ${(isEntered__backgroundLeft === "false" || isEntered__titleLeft === "false" || isEntered__descriptionLeft === "false") ? styles.expandLeft : styles.contractLeft}
        `}
        onMouseEnter={handleMouseEnter__left}
        onMouseLeave={handleMouseLeave__left}
      ></div>

      <div
        className={`
        ${styles.titleImageCategoriesContainer}
        ${(isEntered__backgroundLeft === "false" || isEntered__titleLeft === "false" || isEntered__descriptionLeft === "false") ? styles.pushTitleLeft : styles.pullTitleLeft}
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
        ref={descriptionLeftRef}
        className={`
            ${styles.description}
            ${(isEntered__backgroundLeft === "false" || isEntered__titleLeft === "false" || isEntered__descriptionLeft === "false") ? styles.show : styles.hide}
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
    </section>
  );
}
