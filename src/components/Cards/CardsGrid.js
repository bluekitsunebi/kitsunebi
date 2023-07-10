import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./CardsGrid.module.css";
import Card from "./Card";
import enData from "../../helpers/data/lang/en.json";
import jaData from "../../helpers/data/lang/ja.json";
import roData from "../../helpers/data/lang/ro.json";

export default function CardsGrid(props) {
  const cards = { ...props.cards };
  const id = props.id;
  const courseLanguage = props.courseLanguage;
  const modules = [...Object.keys(cards)];
  const cardRefs = useRef({});

  const setCardRef = (itemId, ref) => {
    cardRefs.current[itemId] = ref;
  };

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let buttonText = {...langData.LanguageCoursesSection.Cards.button};

  return (
    <div className={styles.CardsGrid}>
      {modules.map((item, index) => (
        <Card
          id={id}
          key={cards[item].id}
          courseLanguage={courseLanguage}
          module={modules[index]}
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
          buttonText={cards[item].greyedOut === "true" ? buttonText.greyed : buttonText.active}
          buttonType={cards[item].greyedOut === "true" ? "greyedOut" : "empty__colored"}
          buttonTransform="uppercase"
          link={cards[item].link}
        />
      ))}
    </div>
  );
}
