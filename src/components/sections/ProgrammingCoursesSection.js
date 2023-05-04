import React from "react";
import styles from "./ProgrammingCoursesSection.module.css";
import SectionTitle from "../title/SectionTitle"
import CardsGrid from "../Cards/CardsGrid";
import Card from "../Cards/Card";

export default function ProgrammingCoursesSection() {
  return (
    <section id="programmingCoursesSection" className={styles.programmingCoursesSection}>
      <SectionTitle text="Programming" />
      <CardsGrid>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardsGrid>
    </section>
  );
}
