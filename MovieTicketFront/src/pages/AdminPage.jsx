import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import AddMovieForm from '../components/AddMovieForm';
import EditMovieForm from '../components/EditMovieForm';
import BookingHistory from '../components/BookingHistory';
import { deleteMovie, getBookingHistory, getMovies } from '../services/MovieService'  ;

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovies();
    fetchBookingHistory();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await getMovies();
      setMovies(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingHistory = async () => {
    try {
      const response = await getBookingHistory();
      setBookingHistory(response.data);
    } catch (err) {
      console.error('Failed to fetch booking history:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      fetchMovies();
    } catch (err) {
      setError('Failed to delete movie. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      
      {error && <div className="error">{error}</div>}
      
      <div className="admin-actions">
        <button onClick={() => setShowAddForm(true)} className="btn add-btn">
          Add New Movie
        </button>
      </div>

      {showAddForm && (
        <AddMovieForm 
          onClose={() => setShowAddForm(false)} 
          onMovieAdded={fetchMovies} 
        />
      )}

      {editingMovie && (
        <EditMovieForm 
          movie={editingMovie} 
          onClose={() => setEditingMovie(null)} 
          onMovieUpdated={fetchMovies} 
        />
      )}

      <div className="movie-management">
        <h2>Movies</h2>
        {loading ? (
          <div className="loading">Loading movies...</div>
        ) : (
          <MovieList 
            movies={movies} 
            onEdit={setEditingMovie} 
            onDelete={handleDelete} 
            isAdmin={true} 
          />
        )}
      </div>

      <div className="booking-history">
        <h2>Booking History</h2>
        <BookingHistory history={bookingHistory} />
      </div>
    </div>
  );
};

export default AdminPage;