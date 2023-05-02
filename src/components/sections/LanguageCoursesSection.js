import React from "react";
import styles from "./LanguageCoursesSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { languageModulesCards } from "../../helpers/cardsData";

export default function LanguageCoursesSection() {
  const cards = languageModulesCards();
  return (
    <section
      id="languageCoursesSection"
      className={styles.languageCoursesSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Language Courses" />
      </div>
      <CardsGrid cards={cards} category="language" />
    </section>
  );
}
