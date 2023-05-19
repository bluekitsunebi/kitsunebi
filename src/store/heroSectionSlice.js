import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroSection__entered: "true",
  backgroundLeft__entered: "true",
  backgroundRight__entered: "true",
  titleLeft__entered: "true",
  titleRight__entered: "true",
  descriptionLeft__entered: "true",
  descriptionRight__entered: "true",
};

export const heroSectionSlice = createSlice({
  name: "heroSection",
  initialState,
  reducers: {
    setBackgroundLeft__entered: (state, action) => {
      state.backgroundLeft__entered = action.payload;
    },
    setBackgroundRight__entered: (state, action) => {
      state.backgroundRight__entered = action.payload;
    },
    setTitleLeft__entered: (state, action) => {
      state.titleLeft__entered = action.payload;
    },
    setTitleRight__entered: (state, action) => {
      state.titleRight__entered = action.payload;
    },
    setDescriptionLeft__entered: (state, action) => {
      state.descriptionLeft__entered = action.payload;
    },
    setDescriptionRight__entered: (state, action) => {
      state.descriptionRight__entered = action.payload;
    },
    setHeroSection__entered: (state, action) => {
      state.heroSection__entered = action.payload;
    },
  },
});

export const {
  setBackgroundLeft__entered,
  setBackgroundRight__entered,
  setTitleLeft__entered,
  setTitleRight__entered,
  setDescriptionLeft__entered,
  setDescriptionRight__entered,
  setHeroSection__entered,
} = heroSectionSlice.actions;

export default heroSectionSlice.reducer;
