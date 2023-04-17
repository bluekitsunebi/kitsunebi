import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";
import { scroll, scrollToArrow } from "../../helpers/helpers";

export default function Card(props) {
  const category = props.category;
  const imgSrc = props.imgSrc;
  const title = props.title;
  const details = [...props.details];
  const price = props.price;
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;
  const arrows = props.arrows;

  return (
    <div className={styles.Card}>
      <div className={styles.titleContainer}>
        <div className={styles.img}>{imgSrc}</div>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.detailsContainer}>
        <ul className={styles.details}>
          {details.map((item, index) => (
            <li key={`${category}_${title}_${index}`}>{item}</li>
          ))}
        </ul>
        <div className={styles.price}>{price}</div>
      </div>

      <div className={styles.Button}>
        <Button
          name={buttonText}
          text={buttonText}
          type={buttonType}
          position=""
          underlinedButton=""
          transform={buttonTransform}
        />
      </div>

      <div
        className={`${styles.arrow_container} ${styles.arrows__down} ${
          arrows === "hide" && styles.hide
        }`}
        id={`arrow_down_${category}_${title}`}
      >
        <div className={styles.arrows__text}>»</div>
        <button
          className={styles.arrowsButton}
          onClick={() => {
            const arrow_down = document.getElementById(
              `arrow_down_${category}_${title}`
            );
            const arrow_up = document.getElementById(
              `arrow_up_${category}_${title}`
            );
            arrow_down.style = "display: none";
            arrow_up.style = "display: block";
            scrollToArrow(`arrow_up_${category}_${title}`, "smooth");
          }}
        ></button>
      </div>

      <div
        className={`${styles.arrow_container} ${styles.arrows__up} ${styles.hide}`}
        id={`arrow_up_${category}_${title}`}
      >
        <div className={styles.arrows__text}>»</div>
        <button
          className={styles.arrowsButton}
          onClick={() => {
            const arrow_down = document.getElementById(
              `arrow_down_${category}_${title}`
            );
            const arrow_up = document.getElementById(
              `arrow_up_${category}_${title}`
            );
            arrow_down.style = "display: block";
            arrow_up.style = "display: none";
            scroll("languageCoursesSection", "smooth");
          }}
        ></button>
      </div>
    </div>
  );
}
