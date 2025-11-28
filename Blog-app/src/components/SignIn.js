// src/components/SignIn.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../slices/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    dispatch(signIn({ username, password }));
    if (!currentUser) setError("Invalid credentials!");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {currentUser && <p>Welcome, {currentUser.username}!</p>}
    </div>
  );
}
