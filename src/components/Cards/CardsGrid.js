import React, { useRef, useEffect } from "react";
import styles from "./CardsGrid.module.css";
import Card from "./Card";

export default function CardsGrid(props) {
  const cards = { ...props.cards };
  const id = props.id;
  const modules = [...Object.keys(cards)];
  const cardRefs = useRef({});

  const setCardRef = (itemId, ref) => {
    cardRefs.current[itemId] = ref;
  };

  return (
    <div className={styles.CardsGrid}>
      {modules.map((item) => (
        <Card
          id={id}
          key={cards[item].id}
          ref={ref => setCardRef(`${cards[item].id}_${cards[item].title}`, ref)}
          // ref={
            // ref => {
            // useEffect(() => {
              // if (ref) {
              //   setCardRef(`${cards[item].id}_${cards[item].title}`, ref);
              // }
            // }, [ref]);
          // }
        // }
          title={cards[item].title}
          lessons={cards[item].lessons}
          details={cards[item].details}
          price={cards[item].price}
          total={cards[item].total}
          buttonText={cards[item].greyedOut === "true" ? "in curand" : "inscrie-te"}
          buttonType={cards[item].greyedOut === "true" ? "greyedOut" : "empty__colored"}
          buttonTransform="uppercase"
          link={cards[item].link}
        />
      ))}
    </div>
  );
}
