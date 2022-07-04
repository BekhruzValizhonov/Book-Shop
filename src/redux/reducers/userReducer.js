import { createSlice } from "@reduxjs/toolkit";

export const isLoggedIn = createSlice({
  name: "USER_LOGIN",
  initialState: false,

  reducers: {
    userLogin: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { userLogin } = isLoggedIn.actions;
export default isLoggedIn.reducer;
