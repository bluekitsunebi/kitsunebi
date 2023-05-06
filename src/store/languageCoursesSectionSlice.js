import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
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
  },
});

export const { setHeight, setYaxisPosition } = languageCoursesSectionSlice.actions;

export default languageCoursesSectionSlice.reducer;
