import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/contactSectionSlice";
import styles from "./ContactSection.module.css";

import SectionTitle from "../../../title/SectionTitle";
import ContactForm from "../../../Form/ContactForm";

function ContactSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const contactSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(contactSectionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        contactSectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));
      const rect = contactSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset;
      dispatch(setYaxisPosition(yPosition));
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  return (
    <section
      id="contactSection"
      ref={contactSectionRef}
      className={styles.contactSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Contact" />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <ContactForm
            subject="contact"
            section="contact"
            answer="mesajul tău"
          />
        </div>
        <div className={`${styles.subtitle} ${styles.subtitle__form}`}>Formular de contact</div>
        <div className={styles.companyDetails}>
          <div>Kitsunebi Miyabi SRL</div>
          <div>Nr. ord. registrul com.: J29/63/2023</div>
          <div>C.I.F.: 47442947</div>
          <div>
            Sediu social: Str. Penes Curcanul, nr. 8, bl. 151C, sc. A, et. P,
            ap. 1, Ploiesti, Prahova, 100511, Romania
          </div>
          <div>Tel: +40745984726</div>
          <div>Email: bluekitsunebi@gmail.com</div>
          <div className={styles.IBAN}>Cont LEI: RO84CECEB00030RON2569171</div>
        </div>
        <div className={`${styles.subtitle} ${styles.subtitle__companyDetails}`}>Detalii companie</div>
      </div>
    </section>
  );
}

export default ContactSection;
