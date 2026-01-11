import axios from "axios";
import { FETCH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from "./postTypes";

// === Thunks (Async Operations) ===

// Fetch all posts
export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/posts");
  dispatch({ type: FETCH_POSTS, payload: res.data });
};

// Add a new post
export const addPost = (post) => async (dispatch) => {
  const res = await axios.post("http://localhost:3001/posts", post);
  dispatch({ type: ADD_POST, payload: res.data });
};

// Update a post
export const updatePost = (id, updatedData) => async (dispatch) => {
  const res = await axios.put(`http://localhost:3001/posts/${id}`, updatedData);
  dispatch({ type: UPDATE_POST, payload: res.data });
};

// Delete a post
export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};
