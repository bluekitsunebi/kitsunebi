import React from "react";
import styles from "./FAQsection.module.css";
import SectionTitle from "../SectionTitle"

function FAQsection() {
  return (
    <section id="faqSection" className={styles.faqSection}>
      <SectionTitle text="FAQ" />
    </section>
  );
}

export default FAQsection;
