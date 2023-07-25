import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: undefined,
  underlined: "home",
  color: undefined,
  isOpen: false,
  slideDown: false,
  wasAnimated: false,
  previousLocation: false,
  currentLocation: false,
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
      if (state.isOpen === true) {
        state.isOpen = false;
      } else if (state.isOpen === false) {
        state.isOpen = true;
      }
    },
    closeMenu: (state) => {
      if (state.isOpen === true) {
        state.isOpen = false;
      }
    },
    setSlideDown: (state, action) => {
      state.slideDown = action.payload;
    },
    setWasAnimated: (state, action) => {
      state.wasAnimated = action.payload;
    },
    setPreviousLocation: (state, action) => {
      state.previousLocation = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
});

export const {
  setHeight,
  setUnderlined,
  setColor,
  setMenu,
  closeMenu,
  setSlideDown,
  setWasAnimated,
  setPreviousLocation,
  setCurrentLocation,
} = headerSlice.actions;

export default headerSlice.reducer;
