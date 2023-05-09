import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";

// ROUTES
import Home from "./components/routes/home/Home";
import NotFound from "./components/routes/notFound/NotFound";
import LanguageCustomCourses from "./components/routes/languageCourses/LanguageCustomCourses";

// mobile (temporary)
import Mobile from "./components/mobile/Mobile";

// SCROLL TO TOP ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// SCROLL TO TOP ON PATHNAME CHANGE
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Fragment>
      <BrowserView>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ------------------------------- EN ------------------------------- */}
            <Route
              path="/en-individual-custom-japanese"
              element={
                <LanguageCustomCourses module="individualCustomJapanese__en" />
              }
            />
            <Route
              path="/en-group-custom-japanese"
              element={
                <LanguageCustomCourses module="groupCustomJapanese__en" />
              }
            />
            <Route
              path="/en-individual-custom-japanese-intensive"
              element={
                <LanguageCustomCourses module="individualCustomJapaneseIntensive__en" />
              }
            />
            <Route
              path="/en-group-custom-japanese-intensive"
              element={
                <LanguageCustomCourses module="groupCustomJapaneseIntensive__en" />
              }
            />

            {/* ------------------------------- JP ------------------------------- */}
            <Route
              path="/jp-individual-custom-english"
              element={
                <LanguageCustomCourses module="individualCustomEnglish__jp" />
              }
            />
            <Route
              path="/jp-group-custom-english"
              element={
                <LanguageCustomCourses module="groupCustomEnglish__jp" />
              }
            />
            <Route
              path="/jp-individual-custom-english-intensive"
              element={
                <LanguageCustomCourses module="individualCustomEnglishIntensive__jp" />
              }
            />
            <Route
              path="/jp-group-custom-english-intensive"
              element={
                <LanguageCustomCourses module="groupCustomEnglishIntensive__jp" />
              }
            />

            {/* ------------------------------- RO ------------------------------- */}
            <Route
              path="/ro-individual-custom-japanese"
              element={
                <LanguageCustomCourses module="individualCustomJapanese__ro" />
              }
            />
            <Route
              path="/ro-group-custom-japanese"
              element={
                <LanguageCustomCourses module="groupCustomJapanese__ro" />
              }
            />
            <Route
              path="/ro-individual-custom-japanese-intensive"
              element={
                <LanguageCustomCourses module="individualCustomJapaneseIntensive__ro" />
              }
            />
            <Route
              path="/ro-group-custom-japanese-intensive"
              element={
                <LanguageCustomCourses module="groupCustomJapaneseIntensive__ro" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>

      {/* mobile (temporary) */}
      <MobileView>
        <Mobile />
      </MobileView>
    </Fragment>
  );
}

export default App;
