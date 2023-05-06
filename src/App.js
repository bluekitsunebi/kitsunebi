import React from "react";
import { Fragment } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from "./components/mobile/Mobile";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import LanguageCoursesSection from "./components/sections/LanguageCoursesSection";
import FAQsection from "./components/sections/FAQsection";
import "./App.css";
import ProgrammingSection from "./components/sections/ProgrammingSection";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


function App() {
  return (
    <Fragment>
      <BrowserView>
        <Header />
        <HeroSection />
        <AboutSection />
        <LanguageCoursesSection />
        <ProgrammingSection />
        <FAQsection />
        <ContactSection />
      </BrowserView>

      <MobileView>
        <Mobile />
      </MobileView>
    </Fragment>
  );
}

export default App;
