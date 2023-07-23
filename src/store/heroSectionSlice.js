import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroSection__entered: "true",
  backgroundLeft__entered: "true",
  titleLeft__entered: "true",
  descriptionLeft__entered: "true",
  videosLoaded: false,
};

export const heroSectionSlice = createSlice({
  name: "heroSection",
  initialState,
  reducers: {
    setHeroSection__entered: (state, action) => {
      state.heroSection__entered = action.payload;
    },
    setBackgroundLeft__entered: (state, action) => {
      state.backgroundLeft__entered = action.payload;
    },
    setTitleLeft__entered: (state, action) => {
      state.titleLeft__entered = action.payload;
    },
    setDescriptionLeft__entered: (state, action) => {
      state.descriptionLeft__entered = action.payload;
    },
    setVideosLoaded: (state, action) => {
      state.videosLoaded = action.payload;
    },
  },
});

export const {
  setBackgroundLeft__entered,
  setTitleLeft__entered,
  setDescriptionLeft__entered,
  setHeroSection__entered,
  setVideosLoaded,
} = heroSectionSlice.actions;

export default heroSectionSlice.reducer;
