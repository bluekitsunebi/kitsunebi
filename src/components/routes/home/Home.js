import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWasRendered, setIsResizing } from "../../../store/homeSectionSlice";
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

  const headerRef = useRef(null);
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
      headerRef.current &&
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
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
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

  useEffect(() => {
    dispatch(setWasRendered("true"));
  }, [isAllRendered]);

  // DETECT WINDOW RESIZE

  const isResizing = useSelector((state) => state.home.isResizing);

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleResizeStart = () => {
      if (!isResizing) {
        dispatch(setIsResizing(true));
      }
    };
    const handleResizeEnd = debounce(() => {
      if (isResizing) {
        dispatch(setIsResizing(false));
      }
    }, 50);
    window.addEventListener('resize', handleResizeStart);
    window.addEventListener('resize', handleResizeEnd);
    return () => {
      window.removeEventListener('resize', handleResizeStart);
      window.removeEventListener('resize', handleResizeEnd);
    };
  }, [isResizing, dispatch]);

  return (
    <section className={styles.Home}>
      <div ref={headerRef}>
        <Header onRender={handleComponentRender} />
      </div>
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
      </section>
      <Footer />
    </section>
  );
}
