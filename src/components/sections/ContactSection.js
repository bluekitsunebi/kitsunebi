import React from "react";
import styles from "./ContactSection.module.css";

import SectionTitle from "../title/SectionTitle"
import ContactForm from "../Form/ContactForm";

function ContactSection() {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <div className={styles.title}>
        <SectionTitle text="Contact" />
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
