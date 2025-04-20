import React, { useState, useEffect } from 'react';
import { updateMovie } from '../services/MovieService';

const EditMovieForm = ({ movie, onClose, onMovieUpdated }) => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    description: '',
    genre: '',
    date: '',
    location: '',
    totalSeats: 0,
    availableSeats: 0,
    price: 0
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title || '',
        director: movie.director || '',
        description: movie.description || '',
        genre: movie.genre || '',
        date: movie.date ? movie.date.split('T')[0] : '',
        location: movie.location || '',
        totalSeats: movie.totalSeats || 0,
        availableSeats: movie.availableSeats || 0,
        price: movie.price || 0
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Seats') || name === 'price' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (formData.availableSeats > formData.totalSeats) {
        throw new Error('Available seats cannot exceed total seats');
      }

      await updateMovie(movie.id, formData);
      onMovieUpdated();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update movie');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!movie) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Edit Movie</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              disabled={isSubmitting}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="director" className="form-label">Director</label>
                <input
                  type="text"
                  className="form-control"
                  id="director"
                  name="director"
                  value={formData.director}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="genre" className="form-label">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">Release Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="totalSeats" className="form-label">Total Seats</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalSeats"
                    name="totalSeats"
                    min="1"
                    value={formData.totalSeats}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="availableSeats" className="form-label">Available Seats</label>
                  <input
                    type="number"
                    className="form-control"
                    id="availableSeats"
                    name="availableSeats"
                    min="0"
                    max={formData.totalSeats}
                    value={formData.availableSeats}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="price" className="form-label">Price ($)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Saving...
                    </>
                  ) : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMovieForm;