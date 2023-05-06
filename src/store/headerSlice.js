import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  underlined: "home",
  color: "transparent",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setUnderlined: (state, action) => {
      state.underlined = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setHeight, setUnderlined, setColor } = headerSlice.actions;

export default headerSlice.reducer;
