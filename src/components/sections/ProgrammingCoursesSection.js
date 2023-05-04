import React from "react";
import styles from "./ProgrammingCoursesSection.module.css";
import SectionTitle from "../title/SectionTitle"

export default function ProgrammingCoursesSection() {
  return (
    <section id="programmingCoursesSection" className={styles.programmingCoursesSection}>
      <SectionTitle text="Programming" />
    </section>
  );
}
