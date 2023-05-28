import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wasRendered: "false",
  isResizing: "false",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setWasRendered: (state, action) => {
      state.wasRendered = action.payload;
    },
    setIsResizing: (state, action) => {
      state.isResizing = action.payload;
    },
  },
});

export const {
  setWasRendered, setIsResizing,
} = homeSlice.actions;

export default homeSlice.reducer;
