import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = false; // temporary (authentication logic will replace this)

  return isLoggedIn ? children : <Navigate to="/" />;
}
