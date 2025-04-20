import React, { useState } from "react";
import { addMovie } from "../services/MovieService";
import "bootstrap/dist/css/bootstrap.min.css";

const AddMovieForm = ({ onClose, onMovieAdded }) => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    description: "",
    genre: "",
    date: "",
    location: "",
    totalSeats: 0,
    availableSeats: 0,
    price: 0,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]:
        name.includes("Seats") || name === "price"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie(movie);
      onMovieAdded();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add movie");
    }
  };

  return (
    <div className="modal show fade d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Movie</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={movie.title}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Director</label>
                <input
                  type="text"
                  name="director"
                  value={movie.director}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  value={movie.description}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Genre</label>
                <input
                  type="text"
                  name="genre"
                  value={movie.genre}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  value={movie.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={movie.location}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  name="totalSeats"
                  value={movie.totalSeats}
                  onChange={handleChange}
                  className="form-control"
                  required
                  min="1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Available Seats</label>
                <input
                  type="number"
                  name="availableSeats"
                  value={movie.availableSeats}
                  onChange={handleChange}
                  className="form-control"
                  required
                  min="0"
                  max={movie.totalSeats}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  value={movie.price}
                  onChange={handleChange}
                  className="form-control"
                  required
                  min="0"
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
