
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePostThunk, deletePostThunk } from "../../redux/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    category: "",
  });

  // Fetch selected post
  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  // Handle change
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // Update post
  const updatePost = () => {
    dispatch(updatePostThunk({ id, updatedData: post }));
    alert("Post Updated!");
    navigate("/");
  };

  // Delete post
  const deletePost = () => {
    dispatch(deletePostThunk(id));
    alert("Post Deleted!");
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 text-primary">Edit Blog Post</h2>

        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input
            type="text"
            name="title"
            className="form-control form-control-lg shadow-sm"
            value={post.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea
            name="description"
            className="form-control form-control-lg shadow-sm"
            rows="5"
            value={post.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Date</label>
          <input
            type="date"
            name="date"
            className="form-control form-control-lg shadow-sm"
            value={post.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control form-control-lg shadow-sm"
            value={post.image}
            onChange={handleChange}
            placeholder="Paste image URL"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Category</label>
          <input
            type="text"
            name="category"
            className="form-control form-control-lg shadow-sm"
            value={post.category}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-primary btn-lg shadow-sm"
            onClick={updatePost}
          >
            Update Post
          </button>
          <button
            className="btn btn-danger btn-lg shadow-sm"
            onClick={deletePost}
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
}
