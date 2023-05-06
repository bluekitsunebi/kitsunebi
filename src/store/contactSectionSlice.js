import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  yAxisPosition: undefined,
};

export const contactSectionSlice = createSlice({
  name: "contactSection",
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

export const { setHeight, setYaxisPosition } = contactSectionSlice.actions;

export default contactSectionSlice.reducer;
