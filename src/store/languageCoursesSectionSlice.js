import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
  selectedButton: "romanian",
};

export const languageCoursesSectionSlice = createSlice({
  name: "languageCoursesSection",
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setYaxisPosition: (state, action) => {
      state.yAxisPosition = action.payload;
    },
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
    },
  },
});

export const { setHeight, setYaxisPosition, setSelectedButton } = languageCoursesSectionSlice.actions;

export default languageCoursesSectionSlice.reducer;
