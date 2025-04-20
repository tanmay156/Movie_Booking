import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
      <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-3">
        &larr; Back to Movies
      </button>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="bg-light p-5 rounded">
                <h1 className="display-4">{movie.title.charAt(0)}</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="text-muted">Directed by: {movie.director}</p>
              
              <div className="mb-3">
                <span className="badge bg-primary me-2">{movie.genre}</span>
                <span className="badge bg-success me-2">{new Date(movie.date).toLocaleDateString()}</span>
                <span className="badge bg-info">{movie.location}</span>
              </div>
              
              <div className="mb-3">
                <h5>Details</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Available Seats:</strong> {movie.availableSeats}
                  </li>
                  <li className="list-group-item">
                    <strong>Price:</strong> ${movie.price}
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h5>Description</h5>
                <p className="card-text">{movie.description}</p>
              </div>
              
              <Link to={`/booking/${movie.id}`} className="btn btn-primary btn-lg">
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;