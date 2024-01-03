import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
  openQuestionId: null,
};

export const FAQsectionSlice = createSlice({
  name: "FAQsection",
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setYaxisPosition: (state, action) => {
      state.yAxisPosition = action.payload;
    },
    setOpenQuestionId: (state, action) => {
      state.openQuestionId = action.payload;
    },
  },
});

export const { setHeight, setYaxisPosition, setOpenQuestionId } = FAQsectionSlice.actions;

export default FAQsectionSlice.reducer;
