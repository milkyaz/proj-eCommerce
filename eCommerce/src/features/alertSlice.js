import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: { message: "" },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload;
    },
    hideAlert: (state) => {
      state.message = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
