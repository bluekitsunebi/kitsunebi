import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "ro",
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

export const { setLanguage } = websiteLanguageSlice.actions;

export default websiteLanguageSlice.reducer;
