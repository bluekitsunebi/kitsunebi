import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";
import Arrows from "./Arrows";

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
          section=""
        />
      </div>

      <Arrows arrows={arrows} order="first" direction="down" opposite="up" category={category} title={title} section="languageCoursesSection"></Arrows>
      <Arrows arrows={arrows} order="second" direction="up" opposite="down" category={category} title={title} section="languageCoursesSection"></Arrows>
    </div>
  );
}
