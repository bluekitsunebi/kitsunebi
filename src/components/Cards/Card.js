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
      <img className={styles.img} src={imgSrc}></img>
      <div className={styles.title}>{title}</div>
      <ul
        className={styles.details}
      >
        {details.map(item => <li key={item}>{item}</li>)}
      </ul>
      <p className={styles.price}>{price}</p>
      <Button
        name={buttonText}
        text={buttonText}
        type={buttonType}
        position=""
        underlinedButton=""
        transform={buttonTransform}
      />
    </div>
  );
}
