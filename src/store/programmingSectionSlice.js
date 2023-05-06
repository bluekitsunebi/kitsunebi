import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const programmingSectionSlice = createSlice({
  name: "programmingSection",
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

export const { setHeight, setYaxisPosition } = programmingSectionSlice.actions;

export default programmingSectionSlice.reducer;
