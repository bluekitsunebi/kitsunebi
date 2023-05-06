import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const jpSubsectionSlice = createSlice({
  name: "jpSubsection",
  initialState,
  reducers: {
    setHeight__jp: (state, action) => {
      state.height = action.payload;
    },
    setYaxisPosition__jp: (state, action) => {
      state.yAxisPosition = action.payload;
    },
  },
});

export const { setHeight__jp, setYaxisPosition__jp } = jpSubsectionSlice.actions;

export default jpSubsectionSlice.reducer;
