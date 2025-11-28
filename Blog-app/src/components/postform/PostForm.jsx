import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostThunk } from "../../redux/postSlice";

export default function PostForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    category: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.image ||
      !formData.category
    ) {
      setError("Please fill all fields!");
      return;
    }

    // Dispatch thunk
    dispatch(addPostThunk(formData));

    // Reset form
    setFormData({
      title: "",
      description: "",
      date: "",
      image: "",
      category: "",
    });
    setError("");
  };

  return (
    <div>
      <h2>Create / Edit Post</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Post Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Tech, Travel)"
          value={formData.category}
          onChange={handleChange}
        />

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
