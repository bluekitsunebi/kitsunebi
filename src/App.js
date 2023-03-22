import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import LanguageCoursesSection from "./components/sections/LanguageCoursesSection";
import FAQsection from "./components/sections/FAQsection";
import "./App.css";
import ProgrammingCoursesSection from "./components/sections/ProgrammingCoursesSection";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutSection />
      <LanguageCoursesSection />
      <ProgrammingCoursesSection />
      <FAQsection />
      <ContactSection />
      {/* <FreeAppointment /> */}
    </Fragment>
  );
}

export default App;
