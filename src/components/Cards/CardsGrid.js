import React from "react";
import styles from "./CardsGrid.module.css";
import Card from "./Card";

export default function CardsGrid(props) {
  const cards = {...props.cards};
  const modules = [...Object.keys(cards)];
  const buttonText = "register";

  return (
    <div className={styles.CardsGrid}>
      {modules.map((item) => (
        <Card
          key={cards[item].id}
          imgSrc={cards[item].imgSrc}
          title={cards[item].title}
          details={cards[item].details}
          price={cards[item].price}
          buttonText={buttonText}
          buttonType="empty"
          buttonTransform="uppercase"
        />
      ))}
    </div>
  );
}
