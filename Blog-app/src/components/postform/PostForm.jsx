

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/postSlice";

export default function PostForm() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and Description are required!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: currentUser.username,
      date: new Date().toISOString().split("T")[0],
      category,
      image,
      likes: 0,
    };

    dispatch(addPost(newPost));
    setTitle("");
    setContent("");
    setCategory("");
    setImage("");
    setError("");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 text-primary">Create New Blog Post</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control form-control-lg shadow-sm"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter blog description"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Image URL</label>
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste image URL here"
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary btn-lg shadow-sm" type="submit">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
