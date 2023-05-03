import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";
import Arrows from "./Arrows";

export default function Card(props) {
  const id = props.id;
  const imgSrc = props.imgSrc;
  const title = props.title;
  const lessons = props.lessons;
  const details = [...props.details];
  const price = props.price;
  const timeframeFirstRow = props.timeframe[0];
  const timeframeSecondRow = props.timeframe[1];
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;
  const arrows = props.arrows;

  return (
    <div className={styles.Card}>
      <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.img}>{imgSrc}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.lessons}>{lessons}</div>
        <div className={styles.detailsContainer}>
          <ul className={styles.details}>
            {details.map((item, index) => (
              <li key={`${id}_${title}_${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.price}>
          {price}
          <div className={styles.slash}>/</div>
          <div className={styles.timeframe}>
            <div>{timeframeFirstRow}</div>
            <div>{timeframeSecondRow}</div>
            </div>        
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
      </div>

      <Arrows arrows={arrows} order="first" direction="down" opposite="up" id={id} title={title} section="languageCoursesSection"></Arrows>
      <Arrows arrows={arrows} order="second" direction="up" opposite="down" id={id} title={title} section={id}></Arrows>
    </div>
  );
}
