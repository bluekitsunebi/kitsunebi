import React from "react";
import styles from "./CardsGrid.module.css";
import Card from "./Card";

export default function CardsGrid(props) {
  const cards = { ...props.cards };
  const id = props.id;
  const modules = [...Object.keys(cards)];

  

  return (
    <div className={styles.CardsGrid}>
      {modules.map((item) => (
        <Card
          id={id}
          key={cards[item].id}
          imgSrc={cards[item].imgSrc}
          title={cards[item].title}
          lessons={cards[item].lessons}
          details={cards[item].details}
          price={cards[item].price}
          timeframe={cards[item].timeframe}
          total={cards[item].total}
          buttonText={cards[item].greyedOut === "true" ? "coming soon" : "register"}
          buttonType={cards[item].greyedOut === "true" ? "greyedOut" : "empty__colored"}
          buttonTransform="uppercase"
          arrows={cards[item].arrows}
        />
      ))}
    </div>
  );
}
