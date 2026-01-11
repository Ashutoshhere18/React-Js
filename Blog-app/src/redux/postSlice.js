// src/slices/postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post",
      content: "Hello World!",
      author: "ashu",
      date: "2025-11-28",
      likes: 5,
      category: "Category1",
    },
    {
      id: 2,
      title: "Second Post",
      content: "Redux is cool!",
      author: "rama",
      date: "2025-11-27",
      likes: 3,
      category: "Category2",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.posts.find((p) => p.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
