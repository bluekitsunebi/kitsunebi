import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../../../store/headerSlice";
import styles from "./Home.module.css";

// SECTIONS
import Header from "../../../components/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import LanguageCoursesSection from "./sections/LanguageCoursesSection";
import ProgrammingSection from "./sections/ProgrammingSection";
import FAQsection from "./sections/FAQsection";
import ContactSection from "./sections/ContactSection";
import Footer from "../../../components/Footer";

// SCROLL TO TOP ON PAGE RELOAD 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
window.scrollTo(0, 0);


export default function Home() {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setColor("transparent"));
    }, [window.onbeforeunload]);

  return (
    <section className={styles.home}>
      <Header />
      <HeroSection />
      <AboutSection />
      <LanguageCoursesSection />
      <ProgrammingSection />
      <FAQsection />
      <ContactSection />
      <Footer />
    </section>
  );
}
