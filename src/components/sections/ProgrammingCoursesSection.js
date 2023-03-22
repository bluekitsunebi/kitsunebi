import React from "react";
import styles from "./ProgrammingCoursesSection.module.css";

function ProgrammingCoursesSection() {
  return (
    <section id="programmingCoursesSection" className={styles.programmingCoursesSection}>
        <div className={styles.title}>
            <h1 className={styles.title__text}>Programming Courses</h1>
        </div>
    </section>
  );
}

export default ProgrammingCoursesSection;
