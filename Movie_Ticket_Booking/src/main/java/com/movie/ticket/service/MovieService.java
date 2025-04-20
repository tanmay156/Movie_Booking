package com.movie.ticket.service;
import com.movie.ticket.model.BookingHistory;
import com.movie.ticket.model.Movie;
import java.time.LocalDate;
import java.util.List;

public interface MovieService {

	public List<Movie> filterMovies(String title, LocalDate date, String location, String genre);

	public List<Movie> getAllMovies(String title, LocalDate date, String location, String genre);

	public Movie getMovieById(Integer id);

	public List<BookingHistory> getBookingHistory();

	public void bookTickets(Integer id, Integer tickets, Integer payment);

	public Movie addMovie(Movie movie);

	public void deleteMovie(Integer id);

	public void updateMovie(Integer id, Movie movie);
}