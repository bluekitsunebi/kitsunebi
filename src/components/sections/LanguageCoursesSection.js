import { React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../store/languageCoursesSectionSlice";
import {
  setHeight__eng,
  setYaxisPosition__eng,
} from "../../store/engSubsectionSlice";
import {
  setHeight__jp,
  setYaxisPosition__jp,
} from "../../store/jpSubsectionSlice";
import {
  setHeight__ro,
  setYaxisPosition__ro,
} from "../../store/roSubsectionSlice";
import styles from "./LanguageCoursesSection.module.css";
import SectionTitle from "../title/SectionTitle";
import CardsSubsection from "../Cards/CardsSubsection";
import { languageModulesDescription } from "../../helpers/data/generalData";

export default function LanguageCoursesSection() {
  const languageCoursesSectionRef = useRef(null);
  const engSubsectionRef = useRef(null);
  const jpSubsectionRef = useRef(null);
  const roSubsectionRef = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(languageCoursesSectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition(
        languageCoursesSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset
      )
    );

    dispatch(setHeight__eng(engSubsectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition__eng(
        engSubsectionRef.current.getBoundingClientRect().top +
          window.pageYOffset
      )
    );
    dispatch(setHeight__jp(jpSubsectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition__jp(
        jpSubsectionRef.current.getBoundingClientRect().top + window.pageYOffset
      )
    );
    dispatch(setHeight__ro(roSubsectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition__ro(
        roSubsectionRef.current.getBoundingClientRect().top + window.pageYOffset
      )
    );
  }, [dispatch]);

  const description = languageModulesDescription();
  return (
    <section
      id="languageCoursesSection"
      ref={languageCoursesSectionRef}
      className={styles.languageCoursesSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Language Courses" />
      </div>

      <div className={styles.description}>{description}</div>

      <CardsSubsection id="CardsSubsectionEnglish" ref={engSubsectionRef} />

      <CardsSubsection id="CardsSubsectionJapanese" ref={jpSubsectionRef} />

      <CardsSubsection id="CardsSubsectionRomanian" ref={roSubsectionRef} />
    </section>
  );
}
