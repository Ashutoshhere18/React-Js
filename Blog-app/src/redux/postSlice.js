import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/posts";



// Fetch all posts
export const fetchPostsThunk = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// Add a new post
export const addPostThunk = createAsyncThunk(
  "posts/addPost",
  async (newPost) => {
    const res = await axios.post(API_URL, newPost);
    return res.data;
  }
);

// Update post
export const updatePostThunk = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedData }) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedData);
    return res.data;
  }
);

// Delete post
export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);



const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH POSTS
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      })

      // ADD POST
      .addCase(addPostThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })

      // UPDATE POST
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })

      // DELETE POST
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postSlice.reducer;
