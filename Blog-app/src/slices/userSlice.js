// src/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // store logged-in user
  users: [
    { id: 1, username: "ashu", password: "1234" },
    { id: 2, username: "rama", password: "abcd" },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
