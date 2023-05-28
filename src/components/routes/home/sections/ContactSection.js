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
      const yPosition =
        rect.top +
        yOffset;
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the contactSection position");
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
      <ContactForm subject="contact" section="contact" answer="mesajul tău" />
    </section>
  );
}

export default ContactSection;
