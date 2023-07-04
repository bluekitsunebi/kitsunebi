import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./store/websiteLanguageSlice";
import "./App.css";

// ROUTES
import Home from "./components/routes/home/Home";
import NotFound from "./components/routes/notFound/NotFound";
import LanguageCustomCourses from "./components/routes/languageCourses/LanguageCustomCourses";

function App() {
  // get the preffered language of the user
  const dispatch = useDispatch();
  const userLanguages = navigator.languages;
  if ( userLanguages.some(lang => lang.startsWith('ro') || lang.startsWith('mo'))) {
    dispatch(setLanguage('ro'));
  } else if (userLanguages[0].startsWith('ja')) {
    dispatch(setLanguage('ja'));
  } else {
    dispatch(setLanguage('en'));
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Home />} />}

          {/* ------------------------------- EN ------------------------------- */}
          <Route
            path="/en-individual-custom-japanese"
            element={
              <LanguageCustomCourses module="individualCustomJapanese__en" />
            }
          />
          <Route
            path="/en-group-custom-japanese"
            element={<LanguageCustomCourses module="groupCustomJapanese__en" />}
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
            element={<LanguageCustomCourses module="groupCustomEnglish__jp" />}
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
            element={<LanguageCustomCourses module="groupCustomJapanese__ro" />}
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
    </Fragment>
  );
}

export default App;
