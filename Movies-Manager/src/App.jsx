import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import UserSession from "./components/UserSession";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);

  // Load movies from Local Storage on mount
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(savedMovies);
  }, []);

  // Save to Local Storage whenever movies change
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  // Add new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Delete movie
  const deleteMovie = (index) => {
    const updated = movies.filter((_, i) => i !== index);
    setMovies(updated);
  };

  // Edit movie
  const editMovie = (index, updatedMovie) => {
    const updated = [...movies];
    updated[index] = updatedMovie;
    setMovies(updated);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">🎬 Favorite Movies Manager</h1>
      <UserSession />
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} />
    </div>
  );
}
