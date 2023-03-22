import React from "react";
import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <section id="contactSection" className={styles.contactSection}>
        <div className={styles.title}>
            <h1 className={styles.title__text}>Contact</h1>
        </div>
    </section>
  );
}

export default ContactSection;
