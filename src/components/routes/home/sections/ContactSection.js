import { React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHeight, setYaxisPosition } from "../../../../store/contactSectionSlice";
import styles from "./ContactSection.module.css";

import SectionTitle from "../../../title/SectionTitle";
import ContactForm from "../../../Form/ContactForm";

function ContactSection() {
  const contactSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(contactSectionRef.current.offsetHeight));
    dispatch(setYaxisPosition(contactSectionRef.current.getBoundingClientRect().top + window.pageYOffset));
  }, [dispatch]);

  return (
    <section id="contactSection" ref={contactSectionRef} className={styles.contactSection}>
      <div className={styles.title}>
        <SectionTitle text="Contact" />
      </div>
      <ContactForm subject="contact"/>
    </section>
  );
}

export default ContactSection;
