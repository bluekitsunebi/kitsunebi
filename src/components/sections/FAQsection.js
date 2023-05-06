import { React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHeight, setYaxisPosition } from "../../store/FAQsectionSlice";
import styles from "./FAQsection.module.css";
import SectionTitle from "../title/SectionTitle";

function FAQsection() {
  const FAQsectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(FAQsectionRef.current.offsetHeight));
    dispatch(setYaxisPosition(FAQsectionRef.current.getBoundingClientRect().top + window.pageYOffset));
  }, [dispatch]);

  return (
    <section id="faqSection" ref={FAQsectionRef} className={styles.faqSection}>
      <SectionTitle text="FAQ" />
    </section>
  );
}

export default FAQsection;
