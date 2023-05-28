import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeight, setYaxisPosition } from "../../../../store/contactSectionSlice";
import styles from "./ContactSection.module.css";

import SectionTitle from "../../../title/SectionTitle";
import ContactForm from "../../../Form/ContactForm";

function ContactSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const contactSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if(homeWasRendered === "true") {
      dispatch(setHeight(contactSectionRef.current.offsetHeight));
      const rect = contactSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset - parseFloat(getComputedStyle(contactSectionRef.current).paddingTop);
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the contactSection position")
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  return (
    <section id="contactSection" ref={contactSectionRef} className={styles.contactSection}>
      <div className={styles.title}>
        <SectionTitle text="Contact" />
      </div>
      <ContactForm subject="contact" section="contact"/>
    </section>
  );
}

export default ContactSection;
