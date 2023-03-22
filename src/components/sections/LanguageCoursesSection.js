import React from "react";
import styles from "./LanguageCoursesSection.module.css";

function LanguageCoursesSection() {
  return (
    <section id="languageCoursesSection" className={styles.languageCoursesSection}>
        <div className={styles.title}>
            <h1 className={styles.title__text}>Language Courses</h1>
        </div>
    </section>
  );
}

export default LanguageCoursesSection;
