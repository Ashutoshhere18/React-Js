// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { signOut } from "../../slices/userSlice";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);

//   const handleSignOut = () => {
//     dispatch(signOut());
//     navigate("/signin");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           MyBlogApp
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Posts
//               </Link>
//             </li>
//             {currentUser && (
//   <li className="nav-item">
//     <Link className="nav-link" to="/create">
//       Create Post
//     </Link>
//   </li>
// )}
//             {currentUser && (
//               <>
                
            
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-danger nav-link"
//                     onClick={handleSignOut}
//                   >
//                     Sign Out
//                   </button>
//                 </li>
//               </>
//             )}
//             {!currentUser && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signin">
//                   Sign In
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../slices/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          MyBlogApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Posts
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/create">
                  Create Post
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <button
                  className="btn btn-danger ms-2"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            )}

            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light ms-2" to="/signin">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
