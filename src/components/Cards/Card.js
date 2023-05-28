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
  const total = props.total;
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;
  const arrows = props.arrows;
  const link = props.link;
  const isGreyed =
    (id === "CardsSubsectionRomanian" || id === "CardsSubsectionEnglish") &&
    buttonType === "greyedOut";
  const slash = !isGreyed ? "/" : "";

  return (
    <div
      className={`
      ${styles.Card}
      ${id === "CardsSubsectionEnglish" && styles.Card__eng}
      ${id === "CardsSubsectionJapanese" && styles.Card__jp}
      ${id === "CardsSubsectionRomanian" && styles.Card__ro}
      `}
    >
      <div className={styles.cardContainer}>
        <div
          className={`
          ${styles.titleContainer}
          ${id === "CardsSubsectionEnglish" && styles.titleContainer__eng}
          ${id === "CardsSubsectionJapanese" && styles.titleContainer__jp}
          ${id === "CardsSubsectionRomanian" && styles.titleContainer__ro}
          `}
        >
          <div className={styles.title}>
            {title}
          </div>
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
        <div className={styles.priceContainer}>
          <div className={styles.price}>{price}</div>
          <div className={styles.slash}>{slash}</div>
          <div className={styles.timeframe}>
            <div>{timeframeFirstRow}</div>
            <div>{timeframeSecondRow}</div>
          </div>
        </div>

        <div className={styles.total}>
          {(id === "CardsSubsectionRomanian" ||
            id === "CardsSubsectionEnglish") &&
          buttonType === "greyedOut"
            ? ""
            : `(plata o data la ${total} lectii)`}
        </div>

        <div className={styles.Button}>
          <Button
            name={buttonText}
            text={buttonText}
            type={buttonType}
            position=""
            underlinedButton=""
            transform={buttonTransform}
            subsection={id}
            link={link}
          />
        </div>
      </div>
    </div>
  );
}
