import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';
import homeReducer from './homeSectionSlice';
import heroSectionReducer from './heroSectionSlice';
import aboutSectionReducer from './aboutSectionSlice';
import contactSectionReducer from './contactSectionSlice';
import FAQsectionReducer from './FAQsectionSlice';
import languageCoursesSectionReducer from './languageCoursesSectionSlice';
import programmingSectionReducer from './programmingSectionSlice';
import routerSlice from './routerSlice';

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
    router: routerSlice,
  }
});
