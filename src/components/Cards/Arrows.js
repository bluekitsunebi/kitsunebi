import React, { useState, useEffect } from "react";
import styles from "./Arrows.module.css";
import {
  getHeight,
  headerHeight,
  scroll,
  scrollToArrow,
} from "../../helpers/helpers";

export default function Arrows(props) {
  const arrows = props.arrows;
  const order = props.order;
  const direction = props.direction;
  const id = props.id;
  const title = props.title;
  const section = props.section;

  const [hidden, setHidden] = useState("first");

  const listenScrollEvent = () => {
    if (
      window.scrollY + (window.innerHeight - headerHeight()) / 2 <=
      getHeight(id) + window.innerHeight - headerHeight()
    ) {
      setHidden("second");
    }
    if (
      window.scrollY + (window.innerHeight - headerHeight()) / 2 >
      getHeight(id) + window.innerHeight - headerHeight()
    ) {
      setHidden("first");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div
      className={`
            ${styles.arrow_container} 
            ${direction === "down" && styles.arrows__down}
            ${direction === "up" && styles.arrows__up}
            ${arrows === "hide" && styles.hide}
            ${arrows === "show" && order === hidden && styles.hide}
            `}
      id={`arrow_${direction}_${id}_${title}`}
    >
      <div className={styles.arrows__text}>»</div>
      <button
        className={styles.arrowsButton}
        onClick={() => {
          if (order === "first") {
            scrollToArrow(`arrow_${direction}_${id}_${title}`, "smooth");
          }
          if (order === "second") {
            scroll(section, "smooth");
          }
        }}
      ></button>
    </div>
  );
}
