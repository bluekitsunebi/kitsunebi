import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wasRendered: "false",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setWasRendered: (state, action) => {
      state.wasRendered = action.payload;
    },
  },
});

export const {
  setWasRendered,
} = homeSlice.actions;

export default homeSlice.reducer;
