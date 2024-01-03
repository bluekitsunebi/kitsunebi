import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
  setOpenQuestionId,
} from "../../../../store/FAQsectionSlice";
import styles from "./FAQsection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";
import QuestionAndAnswer from "../../../QuestionAndAnswer/QuestionAndAnswer";

function FAQsection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const FAQsectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(FAQsectionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        FAQsectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));

      const rect = FAQsectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset;
      dispatch(setYaxisPosition(yPosition));
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let questionsAndAnswers = [...langData.FAQsection.questionsAndAnswers];

  // open only one question
  const openQuestionId = useSelector(
    (state) => state.FAQsection.openQuestionId
  );

  const handleOpenQuestion = (id, action) => {
    dispatch(setOpenQuestionId(
      action === 'open' ? id : null
    ));
  };

  return (
    <section id="faqSection" ref={FAQsectionRef} className={styles.faqSection}>
      <SectionTitle text={langData.FAQsection.title} />
      <div className={styles.description}>
        <QuestionAndAnswer
          question={questionsAndAnswers[0][0]}
          answer={questionsAndAnswers[0][1]}
          isOpen={openQuestionId === 0}
          onOpen={(action) => handleOpenQuestion(0, action)}
        />
        <QuestionAndAnswer
          question={questionsAndAnswers[1][0]}
          answer={questionsAndAnswers[1][1]}
          isOpen={openQuestionId === 1}
          onOpen={(action) => handleOpenQuestion(1, action)}
        />
        <QuestionAndAnswer
          question={questionsAndAnswers[2][0]}
          answer={questionsAndAnswers[2][1]}
          isOpen={openQuestionId === 2}
          onOpen={(action) => handleOpenQuestion(2, action)}
        />
      </div>
    </section>
  );
}

export default FAQsection;
