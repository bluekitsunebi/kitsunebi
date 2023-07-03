import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';
import homeReducer from './homeSectionSlice';

import heroSectionReducer from './heroSectionSlice';
import aboutSectionReducer from './aboutSectionSlice';
import contactSectionReducer from './contactSectionSlice';
import FAQsectionReducer from './FAQsectionSlice';
import languageCoursesSectionReducer from './languageCoursesSectionSlice';
import programmingSectionReducer from './programmingSectionSlice';

import cardSlice from './cardSlice';

import routerSlice from './routerSlice';
import websiteLanguageSlice from './websiteLanguageSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    home: homeReducer,
    heroSection: heroSectionReducer,
    aboutSection: aboutSectionReducer,
    contactSection: contactSectionReducer,
    FAQsection: FAQsectionReducer,
    languageCoursesSection: languageCoursesSectionReducer,
    programmingSection: programmingSectionReducer,
    card: cardSlice,
    router: routerSlice,
    websiteLanguage: websiteLanguageSlice,
  }
});
