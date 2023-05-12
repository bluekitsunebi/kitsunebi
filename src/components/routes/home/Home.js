import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../store/headerSlice";
import styles from "./Home.module.css";
import { switchWasClicked } from "../../../store/routerSlice";

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

export default function Home() {
  const headerHeight = useSelector((state) => state.header.height);
  const aboutSectionRef = useRef(null);
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
      aboutSectionRef.current &&
      faqSectionRef.current &&
      contactSectionRef.current
    ) {
      setIsAllRendered(true);
    }
  };

  useEffect(() => {
    if (wasClicked && link === "/" && previousLocation !== "/" && isAllRendered) {
      let element;
      if (toSection === "about") {
        element = aboutSectionRef.current;     
      } else if (toSection === "faq") {
        element = faqSectionRef.current;
      } else if (toSection === "contact") {
        element = contactSectionRef.current;
      }
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({ top: rect.top + scrollTop - headerHeight, behavior: "smooth" });
        dispatch(switchWasClicked());
      }
    }
  }, [isAllRendered, wasClicked, link, previousLocation, toSection, headerHeight, dispatch]);

  useEffect(() => {
    dispatch(setColor("transparent"));
  }, [window.onbeforeunload]);

  return (
    <section className={styles.Home}>
      <Header />
      <HeroSection />
      <section ref={aboutSectionRef}>
        <AboutSection onRender={handleComponentRender} />
      </section>
      <LanguageCoursesSection />
      <ProgrammingSection />
      <section ref={faqSectionRef}>
        <FAQsection onRender={handleComponentRender} />
      </section>
      <section ref={contactSectionRef}>
        <ContactSection onRender={handleComponentRender} />
      </section>
      <Footer />
    </section>
  );
}
