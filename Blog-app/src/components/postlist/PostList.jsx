// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updatePost, deletePost } from "../../redux/postSlice";

// export default function PostList() {
//   const { posts } = useSelector((state) => state.post);
//   const dispatch = useDispatch();

//   const [editId, setEditId] = useState(null);
//   const [newTitle, setNewTitle] = useState("");
//   const [newContent, setNewContent] = useState("");

//   const handleEdit = (post) => {
//     setEditId(post.id);
//     setNewTitle(post.title);
//     setNewContent(post.content);
//   };

//   const handleUpdate = () => {
//     dispatch(updatePost({ id: editId, title: newTitle, content: newContent }));
//     setEditId(null);
//     setNewTitle("");
//     setNewContent("");
//   };

//   const handleDelete = (id) => {
//     dispatch(deletePost(id));
//   };

//   return (
//     <div className="container">
//       <h2>Posts</h2>
//       {posts.map((post) => (
//         <div key={post.id} className="card mb-3 p-3">
//           {editId === post.id ? (
//             <>
//               <input
//                 className="form-control mb-2"
//                 value={newTitle}
//                 onChange={(e) => setNewTitle(e.target.value)}
//               />
//               <textarea
//                 className="form-control mb-2"
//                 value={newContent}
//                 onChange={(e) => setNewContent(e.target.value)}
//               />
//               <button className="btn btn-success me-2" onClick={handleUpdate}>
//                 Save
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setEditId(null)}
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <>
//               <h4>{post.title}</h4>
//               <p>{post.content}</p>
//               <p>
//                 Author: {post.author} | Date: {post.date} | Likes: {post.likes}
//               </p>
//               <button
//                 className="btn btn-primary me-2"
//                 onClick={() => handleEdit(post)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleDelete(post.id)}
//               >
//                 Delete
//               </button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost, deletePost } from "../../redux/postSlice";

export default function PostList() {
  const { posts } = useSelector((state) => state.post);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleEdit = (post) => {
    setEditId(post.id);
    setNewTitle(post.title);
    setNewContent(post.content);
  };

  const handleUpdate = () => {
    dispatch(updatePost({ id: editId, title: newTitle, content: newContent }));
    setEditId(null);
    setNewTitle("");
    setNewContent("");
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">All Posts</h2>
      {posts.length === 0 && <p className="text-center">No posts available.</p>}

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              {editId === post.id ? (
                <div className="card-body">
                  <input
                    className="form-control mb-2"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Edit Title"
                  />
                  <textarea
                    className="form-control mb-2"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Edit Content"
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={handleUpdate}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {post.image && (
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <p className="text-muted mb-2">
                      Author: {post.author} | Date: {post.date} | Likes: {post.likes}
                    </p>
                    
                      <div className="mt-auto d-flex gap-2">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleEdit(post)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </button>
                      </div>
                    
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
