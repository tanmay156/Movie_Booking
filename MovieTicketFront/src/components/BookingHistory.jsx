import React from 'react';

const BookingHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return <div className="no-history">No booking history available</div>;
  }

  return (
    <div className="booking-history">
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Date</th>
            <th>Location</th>
            <th>Tickets</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {history.map(booking => (
            <tr key={booking.id}>
              <td>{booking.title}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.location}</td>
              <td>{booking.bookedTickets}</td>
              <td>${booking.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;