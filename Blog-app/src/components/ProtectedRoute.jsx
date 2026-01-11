// src/components/ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    // If not logged in, redirect to SignIn
    return <Navigate to="/signin" replace />;
  }

  return children;
}
