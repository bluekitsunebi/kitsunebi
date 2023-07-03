import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "eng",
};

export const websiteLanguageSlice = createSlice({
  name: "websiteLanguage",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = websiteLanguageSlice;

export default websiteLanguageSlice.reducer;
