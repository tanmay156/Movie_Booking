import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/MovieService';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(id);
        setMovie(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch movie details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="booking-page">
      <BookingForm movie={movie} />
    </div>
  );
};

export default BookingPage;