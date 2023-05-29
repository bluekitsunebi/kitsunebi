import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  underlined: "home",
  color: undefined,
  isOpen: false,
  width: undefined,
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
    setMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    checkWidth: (state, action) => {
      state.width = action.payload;
    }
  },
});

export const { setHeight, setUnderlined, setColor, setMenu, checkWidth } = headerSlice.actions;

export default headerSlice.reducer;
