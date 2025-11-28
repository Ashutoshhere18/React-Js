import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    dispatch(signIn({ username, password }));
  };

  // Navigate to posts if login is successful
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <div className="mb-3">
        <label>Username</label>
        <input
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}
