import React, { Fragment, useEffect } from "react";
import styles from "./LanguageCustomCourses.module.css";
import Header from "../../Header";
import Footer from "../../Footer";
import ContactForm from "../../Form/ContactForm";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setColor } from "../../../store/headerSlice";
import {
  individualCustomJapanese__en,
  groupCustomJapanese__en,
  individualCustomJapaneseIntensive__en,
  individualCustomEnglish__jp,
  groupCustomEnglish__jp,
  individualCustomEnglishIntensive__jp,
  individualCustomJapanese__ro,
  groupCustomJapanese__ro,
  individualCustomJapaneseIntensive__ro,
} from "../../../helpers/data/data__languageCustomCourses";


// import { languageCoursesCardsData__English } from "../../../helpers/data/languageCoursesCards/EnglishLanguageCourses";
// import { languageCoursesCardsData__Japanese } from "../../../helpers/data/languageCoursesCards/JapaneseLanguageCourses";
// import { languageCoursesCardsData__Romanian } from "../../../helpers/data/languageCoursesCards/RomanianLanguageCourses";

import enData from "../../../helpers/data/lang/en.json";
import jaData from "../../../helpers/data/lang/ja.json";
import roData from "../../../helpers/data/lang/ro.json";

// SCROLL TO TOP ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

export default function LanguageCustomCourses(props) {
  {
    window.scrollTo(0, 0);
  }
  
  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData = language === "en" ? enData : language === "ja" ? jaData : roData;

  
  let courseInEnglish = langData.LanguageCoursesSection.Cards.courseInEnglish;
  let courseInJapanese = langData.LanguageCoursesSection.Cards.courseInJapanese;
  let courseInRomanian = langData.LanguageCoursesSection.Cards.courseInRomanian;


  const module = props.module;
  let title, description;
  const headerHeight = useSelector((state) => state.header.height);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let timeframe = queryParams.get("timeframe");
  let price = queryParams.get("price");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setColor("var(--navyShadow50)"));
  }, [window.onbeforeunload]);

  switch (module) {
    case "individualCustomJapanese__en":
      [description, title] = [...individualCustomJapanese__en()];
      if (!timeframe || !price) {
        timeframe = courseInEnglish.individualCustomJapanese.price[1][0];
        price = courseInEnglish.individualCustomJapanese.price[1][1];
      }
      break;
    case "groupCustomJapanese__en":
      [description, title] = [...groupCustomJapanese__en()];
      if (!timeframe || !price) {
        timeframe = courseInEnglish.groupCustomJapanese.price[1][0];
        price = courseInEnglish.groupCustomJapanese.price[1][1];
      }
      break;
    case "individualCustomJapaneseIntensive__en":
      [description, title] = [...individualCustomJapaneseIntensive__en()];
      if (!timeframe || !price) {
        timeframe = courseInEnglish.individualCustomJapaneseIntensive.price[1][0];
        price = courseInEnglish.individualCustomJapaneseIntensive.price[1][1];
      }
      break;
    case "individualCustomEnglish__jp":
      [description, title] = [...individualCustomEnglish__jp()];
      if (!timeframe || !price) {
        timeframe = courseInJapanese.individualCustomEnglish.price[1][0];
        price = courseInJapanese.individualCustomEnglish.price[1][1];
      }
      break;
    case "groupCustomEnglish__jp":
      [description, title] = [...groupCustomEnglish__jp()];
      if (!timeframe || !price) {
        timeframe = courseInJapanese.groupCustomEnglish.price[1][0];
        price = courseInJapanese.groupCustomEnglish.price[1][1];
      }
      break;
    case "individualCustomEnglishIntensive__jp":
      [description, title] = [...individualCustomEnglishIntensive__jp()];
      if (!timeframe || !price) {
        timeframe = courseInJapanese.individualCustomEnglishIntensive.price[1][0];
        price = courseInJapanese.individualCustomEnglishIntensive.price[1][1];
      }
      break;
    case "individualCustomJapanese__ro":
      [description, title] = [...individualCustomJapanese__ro()];
      if (!timeframe || !price) {
        timeframe = courseInRomanian.individualCustomJapanese.price[1][0];
        price = courseInRomanian.individualCustomJapanese.price[1][1];
      }
      break;
    case "groupCustomJapanese__ro":
      [description, title] = [...groupCustomJapanese__ro()];
      if (!timeframe || !price) {
        timeframe = courseInRomanian.groupCustomJapanese.price[1][0];
        price = courseInRomanian.groupCustomJapanese.price[1][1];
      }
      break;
    case "individualCustomJapaneseIntensive__ro":
      [description, title] = [...individualCustomJapaneseIntensive__ro()];
      if (!timeframe || !price) {
        timeframe = courseInRomanian.individualCustomJapaneseIntensive.price[1][0];
        price = courseInRomanian.individualCustomJapaneseIntensive.price[1][1];
      }
      break;
    default:
      return null;
  }


  return (
    <Fragment>
      <Header />
      <section className={styles.LanguageCustomCourses}>
        <div className={styles.title}>{title[0]}</div>
        <div
          className={styles.subtitle}
        >{`(${title[1]}, ${price} / ${timeframe})`}</div>
        <div className={styles.title_form}>
          {langData.LanguageCustomCourses.subtitle}
        </div>
        <ContactForm
          className={styles.ContactForm}
          subject={title}
          timeframe={timeframe}
          price={price}
          answer="cererea ta de inscriere"
          section="languageCourses"
        />
      </section>
      <Footer />
    </Fragment>
  );
}
