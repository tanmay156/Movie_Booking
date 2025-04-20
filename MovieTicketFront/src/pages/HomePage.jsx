import React, { useState, useEffect } from "react";
import { getMovies } from "../services/MovieService";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (filters = {}) => {
    try {
      setLoading(true);
      const response = await getMovies(filters);
      setMovies(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Now Showing</h1>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
