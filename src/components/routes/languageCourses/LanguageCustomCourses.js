import React, { Fragment, useEffect } from "react";
import styles from "./LanguageCustomCourses.module.css";
import Header from "../../Header";
import Footer from "../../Footer";
import ContactForm from "../../Form/ContactForm";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setColor } from "../../../store/headerSlice";
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
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;

  let courseInEnglish = langData.LanguageCoursesSection.Cards.courseInEnglish;
  let courseInJapanese = langData.LanguageCoursesSection.Cards.courseInJapanese;
  let courseInRomanian = langData.LanguageCoursesSection.Cards.courseInRomanian;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let selectedOption = queryParams.get("time");
  let courseLanguage = props.courseLanguage;
  let module = props.module;
  let timeframe = "";
  let price = "";

  switch (selectedOption) {
    case "oneHour":
      timeframe =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[0][0];
      price =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[0][1];
      break;
    case "oneHour30min":
      timeframe =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[1][0];
      price =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[1][1];
      break;
    case "twoHours":
      timeframe =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[2][0];
      price =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[2][1];
      break;
    default:
      timeframe =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[0][0];
      price =
        langData.LanguageCoursesSection.Cards[courseLanguage][module]
          .price[0][1];
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setColor("var(--navyShadow50)"));
  }, [window.onbeforeunload]);

  let courses = { ...langData.LanguageCustomCourses.title };
  let title = [...courses[courseLanguage][module]];

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
          section="languageCourses"
        />
      </section>
      <Footer />
    </Fragment>
  );
}
