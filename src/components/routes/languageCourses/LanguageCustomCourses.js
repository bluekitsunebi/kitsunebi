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
import { languageCoursesCardsData__English } from "../../../helpers/data/languageCoursesCards/EnglishLanguageCourses";
import { languageCoursesCardsData__Japanese } from "../../../helpers/data/languageCoursesCards/JapaneseLanguageCourses";
import { languageCoursesCardsData__Romanian } from "../../../helpers/data/languageCoursesCards/RomanianLanguageCourses";

// SCROLL TO TOP ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

export default function LanguageCustomCourses(props) {
  {
    window.scrollTo(0, 0);
  }
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
        timeframe = languageCoursesCardsData__English().individualCustomJapanese.price[1][0];
        price = languageCoursesCardsData__English().individualCustomJapanese.price[1][1];
      }
      break;
    case "groupCustomJapanese__en":
      [description, title] = [...groupCustomJapanese__en()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__English().groupCustomJapanese.price[1][0];
        price = languageCoursesCardsData__English().groupCustomJapanese.price[1][1];
      }
      break;
    case "individualCustomJapaneseIntensive__en":
      [description, title] = [...individualCustomJapaneseIntensive__en()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__English().individualCustomJapaneseIntensive.price[1][0];
        price = languageCoursesCardsData__English().individualCustomJapaneseIntensive.price[1][1];
      }
      break;
    case "individualCustomEnglish__jp":
      [description, title] = [...individualCustomEnglish__jp()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Japanese().individualCustomEnglish.price[1][0];
        price = languageCoursesCardsData__Japanese().individualCustomEnglish.price[1][1];
      }
      break;
    case "groupCustomEnglish__jp":
      [description, title] = [...groupCustomEnglish__jp()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Japanese().groupCustomEnglish.price[1][0];
        price = languageCoursesCardsData__Japanese().groupCustomEnglish.price[1][1];
      }
      break;
    case "individualCustomEnglishIntensive__jp":
      [description, title] = [...individualCustomEnglishIntensive__jp()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Japanese().individualCustomEnglishIntensive.price[1][0];
        price = languageCoursesCardsData__Japanese().individualCustomEnglishIntensive.price[1][1];
      }
      break;
    case "individualCustomJapanese__ro":
      [description, title] = [...individualCustomJapanese__ro()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Romanian().individualCustomJapanese.price[1][0];
        price = languageCoursesCardsData__Romanian().individualCustomJapanese.price[1][1];
      }
      break;
    case "groupCustomJapanese__ro":
      [description, title] = [...groupCustomJapanese__ro()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Romanian().groupCustomJapanese.price[1][0];
        price = languageCoursesCardsData__Romanian().groupCustomJapanese.price[1][1];
      }
      break;
    case "individualCustomJapaneseIntensive__ro":
      [description, title] = [...individualCustomJapaneseIntensive__ro()];
      if (!timeframe || !price) {
        timeframe = languageCoursesCardsData__Romanian().individualCustomJapaneseIntensive.price[1][0];
        price = languageCoursesCardsData__Romanian().individualCustomJapaneseIntensive.price[1][1];
      }
      break;
    default:
      return null;
  }

  // default values for timeframe and price
  if (!timeframe || !price) {
    languageCoursesCardsData__English();
    languageCoursesCardsData__Japanese();
    languageCoursesCardsData__Romanian();
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
          Inscrie-te pentru o lectie gratuita
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
