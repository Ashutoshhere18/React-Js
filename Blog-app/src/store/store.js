import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/postSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;
