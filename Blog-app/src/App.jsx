import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/postlist/PostList";
import SignIn from "./components/SignIn";

import PostForm from "./components/postform/PostForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// inside <Routes>


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PostList />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
  path="/create"
  element={
    <ProtectedRoute>
      <PostForm />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
