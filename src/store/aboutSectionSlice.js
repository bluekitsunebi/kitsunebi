import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const aboutSectionSlice = createSlice({
  name: "aboutSection",
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

export const { setHeight, setYaxisPosition } = aboutSectionSlice.actions;

export default aboutSectionSlice.reducer;
