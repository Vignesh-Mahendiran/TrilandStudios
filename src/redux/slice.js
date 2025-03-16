import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackBar: {
    severity: "",
    message: "",
  },
};

const { reducer, actions } = createSlice({
  name: "app",
  initialState,
  reducers: {
    snackBarAction: (state, action) => {
      state.snackBar = action.payload;
    },
  },
});

export default reducer;
export const { snackBarAction } = actions;
