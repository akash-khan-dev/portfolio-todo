import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
