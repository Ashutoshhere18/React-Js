import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePostThunk, deletePostThunk } from "../../redux/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
  const { id } = useParams(); // unique identifier
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

  // UPDATE FUNCTION
  const updatePost = () => {
    dispatch(updatePostThunk({ id, updatedData: post }));
    alert("Post Updated!");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={post.description}
        onChange={handleChange}
      ></textarea>

      <input
        type="date"
        name="date"
        value={post.date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={post.image}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={post.category}
        onChange={handleChange}
      />

      <button onClick={updatePost}>Update Post</button>
      <button
  onClick={() => {
    dispatch(deletePostThunk(id));
    alert("Post Deleted!");
    navigate("/");
  }}
>
  Delete Post
</button>

    </div>
  );
}
