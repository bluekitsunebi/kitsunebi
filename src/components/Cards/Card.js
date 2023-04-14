import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";

export default function Card(props) {
  const imgSrc = props.imgSrc;
  const title = props.title;
  const details = [ ...props.details ];
  const price = props.price;
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;

  return (
    <div className={styles.Card}>
      <div className={styles.titleContainer}>
        <div className={styles.img}>{imgSrc}</div>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.detailsContainer}>
        <ul
          className={styles.details}
        >
          {details.map(item => <li key={item}>{item}</li>)}
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
    </div>
  );
}
