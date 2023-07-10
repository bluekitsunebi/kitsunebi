import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/contactSectionSlice";
import styles from "./ContactSection.module.css";

import SectionTitle from "../../../title/SectionTitle";
import ContactForm from "../../../Form/ContactForm";
import enData from "../../../../helpers/data/lang/en.json";
import jaData from "../../../../helpers/data/lang/ja.json";
import roData from "../../../../helpers/data/lang/ro.json";

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

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let companyDetails = [...langData.ContactSection.companyDetails.details];

  return (
    <section
      id="contactSection"
      ref={contactSectionRef}
      className={styles.contactSection}
    >
      <div className={styles.title}>
        <SectionTitle text={langData.ContactSection.title} />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <ContactForm
            subject={langData.ContactSection.ContactForm.subject}
            section="contact"
            answer={langData.ContactSection.ContactForm.answer}
          />
        </div>
        <div className={`${styles.subtitle} ${styles.subtitle__form}`}>
          {langData.ContactSection.ContactForm.subtitle}
        </div>
        <div className={styles.companyDetails}>
          <div>{companyDetails[0]}</div>
          <div>{companyDetails[1]}</div>
          <div>{companyDetails[2]}</div>
          <div>{companyDetails[3]}</div>
          <div>{companyDetails[4]}</div>
          <div>{companyDetails[5]}</div>
          <div className={styles.IBAN}>{companyDetails[6]}</div>
        </div>
        <div
          className={`${styles.subtitle} ${styles.subtitle__companyDetails}`}
        >
          {langData.ContactSection.companyDetails.subtitle}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
