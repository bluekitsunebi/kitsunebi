import React from "react";
import styles from "./LanguageCoursesSection.module.css";
import SectionTitle from "../title/SectionTitle"
import CardsSubsection from "../Cards/CardsSubsection";
import { languageModulesDescription } from "../../helpers/data/generalData"

export default function LanguageCoursesSection() {
  const description = languageModulesDescription();
  return (
    <section
      id="languageCoursesSection"
      className={styles.languageCoursesSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Language Courses" />
      </div>

      <div className={styles.description}>{description}</div>

      <CardsSubsection id="CardsSubsectionEnglish"/>
    </section>
  );
}
