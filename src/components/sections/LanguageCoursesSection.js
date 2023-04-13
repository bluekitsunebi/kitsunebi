import React from "react";
import styles from "./LanguageCoursesSection.module.css";
import SectionTitle from "../SectionTitle"
import CardsGrid from "../Cards/CardsGrid";
import Card from "../Cards/Card";

export default function LanguageCoursesSection() {
  return (
    <section id="languageCoursesSection" className={styles.languageCoursesSection}>
      <SectionTitle text="Language Courses" />
      <CardsGrid>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </CardsGrid>
    </section>
  );
}
