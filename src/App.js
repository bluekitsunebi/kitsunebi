import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setLanguage } from "./store/websiteLanguageSlice";
import "./App.css";

// ROUTES
import Home from "./components/routes/home/Home";
import NotFound from "./components/routes/notFound/NotFound";
import LanguageCustomCourses from "./components/routes/languageCourses/LanguageCustomCourses";

function App() {
  // get the preffered language of the user
  const dispatch = useDispatch();
  const userLanguages = navigator.languages;
  
  // if (
  //   userLanguages.some((lang) => lang.startsWith("ro") || lang.startsWith("mo"))
  // ) {
  //   dispatch(setLanguage("ro"));
  // } else if (userLanguages[0].startsWith("ja")) {
  //   dispatch(setLanguage("ja"));
  // } else {
  //   dispatch(setLanguage("en"));
  // }

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Home />} />}

          {/* ------------------------------- EN ------------------------------- */}
          <Route
            path="/en-individual-custom-japanese"
            element={
              <LanguageCustomCourses
                module="individualCustomJapanese"
                courseLanguage="courseInEnglish"
              />
            }
          />
          <Route
            path="/en-group-custom-japanese"
            element={
              <LanguageCustomCourses
                module="groupCustomJapanese"
                courseLanguage="courseInEnglish"
              />
            }
          />
          <Route
            path="/en-individual-custom-japanese-intensive"
            element={
              <LanguageCustomCourses
                module="individualCustomJapaneseIntensive"
                courseLanguage="courseInEnglish"
              />
            }
          />
          <Route
            path="/en-group-custom-japanese-intensive"
            element={
              <LanguageCustomCourses
                module="groupCustomJapaneseIntensive"
                courseLanguage="courseInEnglish"
              />
            }
          />

          {/* ------------------------------- JP ------------------------------- */}
          <Route
            path="/jp-individual-custom-english"
            element={
              <LanguageCustomCourses
                module="individualCustomEnglish"
                courseLanguage="courseInJapanese"
              />
            }
          />
          <Route
            path="/jp-group-custom-english"
            element={
              <LanguageCustomCourses
                module="groupCustomEnglish"
                courseLanguage="courseInJapanese"
              />
            }
          />
          <Route
            path="/jp-individual-custom-english-intensive"
            element={
              <LanguageCustomCourses
                module="individualCustomEnglishIntensive"
                courseLanguage="courseInJapanese"
              />
            }
          />
          <Route
            path="/jp-group-custom-english-intensive"
            element={
              <LanguageCustomCourses
                module="groupCustomEnglishIntensive"
                courseLanguage="courseInJapanese"
              />
            }
          />

          {/* ------------------------------- RO ------------------------------- */}
          <Route
            path="/ro-individual-custom-japanese"
            element={
              <LanguageCustomCourses
                module="individualCustomJapanese"
                courseLanguage="courseInRomanian"
              />
            }
          />
          <Route
            path="/ro-group-custom-japanese"
            element={
              <LanguageCustomCourses
                module="groupCustomJapanese"
                courseLanguage="courseInRomanian"
              />
            }
          />
          <Route
            path="/ro-individual-custom-japanese-intensive"
            element={
              <LanguageCustomCourses
                module="individualCustomJapaneseIntensive"
                courseLanguage="courseInRomanian"
              />
            }
          />
          <Route
            path="/ro-group-custom-japanese-intensive"
            element={
              <LanguageCustomCourses
                module="groupCustomJapaneseIntensive"
                courseLanguage="courseInRomanian"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
