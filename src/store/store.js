import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';
import heroSectionReducer from './heroSectionSlice';
import aboutSectionReducer from './aboutSectionSlice';
import contactSectionReducer from './contactSectionSlice';
import FAQsectionReducer from './FAQsectionSlice';
import languageCoursesSectionReducer from './languageCoursesSectionSlice';
import programmingSectionReducer from './programmingSectionSlice';
import engSubsectionReducer from './engSubsectionSlice';
import jpSubsectionReducer from './jpSubsectionSlice';
import roSubsectionReducer from './roSubsectionSlice';
import routerSlice from './routerSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    heroSection: heroSectionReducer,
    aboutSection: aboutSectionReducer,
    contactSection: contactSectionReducer,
    FAQsection: FAQsectionReducer,
    languageCoursesSection: languageCoursesSectionReducer,
    programmingSection: programmingSectionReducer,
    engSubsection: engSubsectionReducer,
    jpSubsection: jpSubsectionReducer,
    roSubsection: roSubsectionReducer,
    router: routerSlice,
  }
});
