import { React, forwardRef } from "react";
import { useSelector } from "react-redux";

import styles from "./CardsSubsection.module.css";
import CardsGrid from "../Cards/CardsGrid";
import enData from "../../helpers/data/lang/en.json";
import jaData from "../../helpers/data/lang/ja.json";
import roData from "../../helpers/data/lang/ro.json";

function CardsSubsection(props, ref) {
  const id = props.id;
  let cards = "";
  let courseLanguage = "";

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData = language === "en" ? enData : language === "ja" ? jaData : roData;

  if (id === "CardsSubsectionEnglish") {
    cards = langData.LanguageCoursesSection.Cards.courseInEnglish;
    courseLanguage = "courseInEnglish";
  } else if (id === "CardsSubsectionJapanese") {
    cards = langData.LanguageCoursesSection.Cards.courseInJapanese;
    courseLanguage = "courseInJapanese";
  } else if (id === "CardsSubsectionRomanian") {
    cards = langData.LanguageCoursesSection.Cards.courseInRomanian;
    courseLanguage = "courseInRomanian";
  }

  return (
    <div>
      <div id={id} className={styles.CardsSubsection} ref={ref}>
        <CardsGrid cards={cards} id={id} courseLanguage={courseLanguage}/>
      </div>
    </div>
  );
}

export default forwardRef(CardsSubsection);
