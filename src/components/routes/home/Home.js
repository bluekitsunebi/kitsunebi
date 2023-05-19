import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../store/headerSlice";
import styles from "./Home.module.css";
import { switchWasClicked } from "../../../store/routerSlice";

// SECTIONS
import Header from "../../../components/Header";
import HeroSection from "./sections/HeroSectionV2";
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

export default function Home() {
  const headerHeight = useSelector((state) => state.header.height);

  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const languageCoursesSectionRef = useRef(null);
  const programmingSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const dispatch = useDispatch();

  const previousLocation = useSelector((state) => state.router.currentLocation);
  const link = useSelector((state) => state.router.link);
  const toSection = useSelector((state) => state.router.toSection);
  const wasClicked = useSelector((state) => state.router.wasClicked);

  const [isAllRendered, setIsAllRendered] = useState(false);
  const handleComponentRender = () => {
    if (
      heroSectionRef.current &&
      aboutSectionRef.current &&
      languageCoursesSectionRef.current &&
      programmingSectionRef.current &&
      faqSectionRef.current &&
      contactSectionRef.current
    ) {
      setIsAllRendered(true);
    }
  };

  useEffect(() => {
    if (
      wasClicked &&
      link === "/" &&
      previousLocation !== "/" &&
      isAllRendered
    ) {
      let element;
      if (toSection === "heroSection") {
        element = heroSectionRef.current;
      } else if (toSection === "aboutSection") {
        element = aboutSectionRef.current;
      } else if (toSection === "languageCoursesSection") {
        element = languageCoursesSectionRef.current;
      } else if (toSection === "programmingSection") {
        element = programmingSectionRef.current;
      } else if (toSection === "FAQsection") {
        element = faqSectionRef.current;
      } else if (toSection === "contactSection") {
        element = contactSectionRef.current;
      }

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - headerHeight,
          behavior: "smooth",
        });
        dispatch(switchWasClicked());
      }
    }
  }, [
    isAllRendered,
    wasClicked,
    link,
    previousLocation,
    toSection,
    headerHeight,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(setColor("transparent"));
  }, [window.onbeforeunload]);

  return (
    <section className={styles.Home}>
      <Header />
      <section ref={heroSectionRef}>
        <HeroSection onRender={handleComponentRender} />
      </section>
      <section ref={aboutSectionRef}>
        <AboutSection onRender={handleComponentRender} />
      </section>
      <section ref={languageCoursesSectionRef}>
        <LanguageCoursesSection onRender={handleComponentRender} />
      </section>
      <section ref={programmingSectionRef}>
        <ProgrammingSection onRender={handleComponentRender} />
      </section>
      <section ref={faqSectionRef}>
        <FAQsection onRender={handleComponentRender} />
      </section>
      <section ref={contactSectionRef}>
        <ContactSection onRender={handleComponentRender} />
      </section >
      <Footer />
    </section>
  );
}
