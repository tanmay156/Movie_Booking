import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, onEdit, onDelete, isAdmin = false }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map(movie => (
        <div key={movie.id} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                  {movie.title}
                </Link>
              </h5>
              <p className="card-text"><strong>Director:</strong> {movie.director}</p>
              <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
              <p className="card-text"><strong>Date:</strong> {new Date(movie.date).toLocaleDateString()}</p>
              <p className="card-text"><strong>Location:</strong> {movie.location}</p>
              <p className="card-text"><strong>Available Seats:</strong> {movie.availableSeats}</p>
              <p className="card-text"><strong>Price:</strong> ${movie.price}</p>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between">
                <Link to={`/booking/${movie.id}`} className="btn btn-primary">
                  Book Tickets
                </Link>
                {isAdmin && (
                  <div>
                    <button 
                      onClick={() => onEdit(movie)} 
                      className="btn btn-warning me-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => onDelete(movie.id)} 
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;