import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <Fragment className="app">
      <Header />
      <HeroSection>
      </HeroSection>
      {/* <FreeAppointment /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <FAQ /> */}
    </Fragment>
  );
}

export default App;
