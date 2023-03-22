import React from "react";
import styles from "./FAQsection.module.css";

function FAQsection() {
  return (
    <section id="FAQsection" className={styles.faqSection}>
        <div className={styles.title}>
            <h1 className={styles.title__text}>FAQ</h1>
        </div>
    </section>
  );
}

export default FAQsection;
