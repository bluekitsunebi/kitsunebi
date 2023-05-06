import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const engSubsectionSlice = createSlice({
  name: "engSubsection",
  initialState,
  reducers: {
    setHeight__eng: (state, action) => {
      state.height = action.payload;
    },
    setYaxisPosition__eng: (state, action) => {
      state.yAxisPosition = action.payload;
    },
  },
});

export const { setHeight__eng, setYaxisPosition__eng } = engSubsectionSlice.actions;

export default engSubsectionSlice.reducer;
