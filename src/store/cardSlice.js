import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yAxisPosition: undefined,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setYaxisPosition: (state, action) => {
      state.yAxisPosition = action.payload;
    },
  },
});

export const { setYaxisPosition } = cardSlice.actions;

export default cardSlice.reducer;
