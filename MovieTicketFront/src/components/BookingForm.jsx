import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookTickets } from '../services/MovieService';

const BookingForm = ({ movie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalPrice = quantity * movie.price;
      await bookTickets(id, quantity, totalPrice);
      navigate('/', { state: { bookingSuccess: true } });
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Book Tickets for {movie.title}</h3>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">Quantity:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    min="1"
                    max={movie.availableSeats}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Total Price:</label>
                  <div className="form-control-plaintext fs-4">
                    ${quantity * movie.price}
                  </div>
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;