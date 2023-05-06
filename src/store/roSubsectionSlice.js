import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const roSubsectionSlice = createSlice({
  name: "roSubsection",
  initialState,
  reducers: {
    setHeight__ro: (state, action) => {
      state.height = action.payload;
    },
    setYaxisPosition__ro: (state, action) => {
      state.yAxisPosition = action.payload;
    },
  },
});

export const { setHeight__ro, setYaxisPosition__ro } = roSubsectionSlice.actions;

export default roSubsectionSlice.reducer;
