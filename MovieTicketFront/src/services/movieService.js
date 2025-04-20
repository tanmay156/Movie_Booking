import axios from 'axios';

const API_URL = 'http://localhost:8080/movie';

export const getMovies = async (filters = {}) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  return await axios.get(`${API_URL}?${params.toString()}`);
};

export const getMovieById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const getBookingHistory = async () => {
  return await axios.get(`${API_URL}/booking/history`);
};

export const addMovie = async (movie) => {
  return await axios.post(API_URL, movie);
};

export const bookTickets = async (movieId, quantity, totalPrice) => {
  return await axios.post(`${API_URL}/booking/${movieId}/${quantity}/${totalPrice}`);
};

export const deleteMovie = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const updateMovie = async (id, movie) => {
  return await axios.put(`${API_URL}/${id}`, movie);
};