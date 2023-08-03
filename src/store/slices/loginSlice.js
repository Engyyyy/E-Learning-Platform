import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    login(state, action) {
      return true;
    },
  },
});

export { loginSlice };
export const { login } = loginSlice.actions;
