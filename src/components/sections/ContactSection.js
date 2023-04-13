import React from "react";
import styles from "./ContactSection.module.css";
import SectionTitle from "../SectionTitle"

function ContactSection() {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <SectionTitle text="Contact" />
    </section>
  );
}

export default ContactSection;
