import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PostList() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { currentUser } = useSelector((state) => state.user);

  const [sortBy, setSortBy] = useState(""); // "date" or "popularity"
  const [filterBy, setFilterBy] = useState(""); // category or author

  // Sorting function
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date); // newest first
    } else if (sortBy === "popularity") {
      return b.likes - a.likes; // most liked first
    }
    return 0;
  });

  // Filtering function
  const filteredPosts = sortedPosts.filter((post) => {
    if (!filterBy) return true;
    return post.category === filterBy || post.author === filterBy;
  });

  // Edit post function
  const handleEdit = (post) => {
    if (!currentUser || currentUser.username !== post.author) {
      alert("You can only edit your own posts!");
      return;
    }
    // TODO: Add edit logic here
    console.log("Editing post:", post.id);
  };

  // Delete post function
  const handleDelete = (post) => {
    if (!currentUser || currentUser.username !== post.author) {
      alert("You can only delete your own posts!");
      return;
    }
    // TODO: Add delete logic here
    console.log("Deleting post:", post.id);
  };

  return (
    <div>
      {/* Sorting Controls */}
      <div className="container">
  <div className="row mb-3">
    <div className="col-md-6">
      <label>Sort By:</label>
      <select className="form-select" onChange={(e) => setSortBy(e.target.value)}>
        <option value="">None</option>
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
    <div className="col-md-6">
      <label>Filter By:</label>
      <select className="form-select" onChange={(e) => setFilterBy(e.target.value)}>
        <option value="">All</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
        <option value="Author1">Author1</option>
        <option value="Author2">Author2</option>
      </select>
    </div>
  </div>

  <div className="row">
    {filteredPosts.map((post) => (
      <div className="col-md-4 mb-3" key={post.id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Author: {post.author} | Date: {post.date} | Likes: {post.likes}
            </small>
            {currentUser && currentUser.username === post.author && (
              <div className="mt-2">
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(post)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
