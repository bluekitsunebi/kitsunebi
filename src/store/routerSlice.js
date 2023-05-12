import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLocation: undefined,
  link: undefined,
  toSection: undefined,
  wasClicked: false,
};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setLink: (state, action) => {
      state.link = action.payload;
    },
    setSection: (state, action) => {
      state.toSection = action.payload;
    },
    switchWasClicked: (state) => {
      state.wasClicked = !state.wasClicked;
    },
  },
});

export const { setLocation, setLink, setSection, switchWasClicked } = routerSlice.actions;

export default routerSlice.reducer;
