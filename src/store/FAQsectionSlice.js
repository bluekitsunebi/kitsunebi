import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
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
  },
});

export const { setHeight, setYaxisPosition } = FAQsectionSlice.actions;

export default FAQsectionSlice.reducer;
