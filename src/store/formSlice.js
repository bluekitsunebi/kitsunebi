import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilling: false,
  isSend: false,
  isSending: false,
  isSending: false,
  recaptchaNeeded: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsFilling: (state, action) => {
      state.isFilling = action.payload;
    },
    setIsSend: (state, action) => {
      state.isSend = action.payload;
    },
    setIsSending: (state, action) => {
      state.isSending = action.payload;
    },
    setRecaptchaNeeded: (state, action) => {
      state.recaptchaNeeded = action.payload;
    },
  },
});

export const { setIsFilling, setIsSend, setIsSending, setRecaptchaNeeded } = formSlice.actions;

export default formSlice.reducer;
// 
