import React, { Fragment, useEffect } from "react";
import styles from "./LanguageCustomCourses.module.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../../store/headerSlice";
import {
  individualCustomJapanese__en,
  groupCustomJapanese__en,
  individualCustomJapaneseIntensive__en,
  groupCustomJapaneseIntensive__en,
  individualCustomEnglish__jp,
  groupCustomEnglish__jp,
  individualCustomEnglishIntensive__jp,
  groupCustomEnglishIntensive__jp,
  individualCustomJapanese__ro,
  groupCustomJapanese__ro,
  individualCustomJapaneseIntensive__ro,
  groupCustomJapaneseIntensive__ro,
} from "../../../helpers/data/data__languageCustomCourses";

// SCROLL TO TOP ON PAGE RELOAD 
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

export default function LanguageCustomCourses(props) {
  {window.scrollTo(0, 0);}
  const module = props.module;
  let title, description;
  const headerHeight = useSelector((state) => state.header.height);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setColor("var(--navyShadow50)"));
  }, [window.onbeforeunload]);

  switch (module) {
    case "individualCustomJapanese__en":
      [description, title] = [...individualCustomJapanese__en()];
      break;
    case "groupCustomJapanese__en":
      [description, title] = [...groupCustomJapanese__en()];
      break;
    case "individualCustomJapaneseIntensive__en":
      [description, title] = [...individualCustomJapaneseIntensive__en()];
      break;
    case "groupCustomJapaneseIntensive__en":
      [description, title] = [...groupCustomJapaneseIntensive__en()];
      break;
    case "individualCustomEnglish__jp":
      [description, title] = [...individualCustomEnglish__jp()];
      break;
    case "groupCustomEnglish__jp":
      [description, title] = [...groupCustomEnglish__jp()];
      break;
    case "individualCustomEnglishIntensive__jp":
      [description, title] = [...individualCustomEnglishIntensive__jp()];
      break;
    case "groupCustomEnglishIntensive__jp":
      [description, title] = [...groupCustomEnglishIntensive__jp()];
      break;
    case "individualCustomJapanese__ro":
      [description, title] = [...individualCustomJapanese__ro()];
      break;
    case "groupCustomJapanese__ro":
      [description, title] = [...groupCustomJapanese__ro()];
      break;
    case "individualCustomJapaneseIntensive__ro":
      [description, title] = [...individualCustomJapaneseIntensive__ro()];
      break;
    case "groupCustomJapaneseIntensive__ro":
      [description, title] = [...groupCustomJapaneseIntensive__ro()];
      break;
    default:
      return null;
  }

  return (
    <Fragment>
      <Header />
      <section className={styles.LanguageCustomCourses}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </section>
      <Footer />
    </Fragment>
  );
}
