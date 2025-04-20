package com.movie.ticket.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.movie.ticket.model.BookingHistory;
import com.movie.ticket.model.Movie;
import com.movie.ticket.repo.MovieRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService{

	@Autowired
	private MovieRepository movieRepository;

	public List<Movie> filterMovies(String title, LocalDate date, String location, String genre) {
		List<Movie> movies = movieRepository.findAll();
		List<Movie> filteredMovies = new ArrayList<>();

		for (Movie movie : movies) {
			boolean match = true;

			if (title != null && !movie.getTitle().toLowerCase().contains(title.toLowerCase())) {
				match = false;
			}
			if (date != null && !movie.getDate().isEqual(date)) {
				match = false;
			}
			if (location != null && !movie.getLocation().toLowerCase().contains(location.toLowerCase())) {
				match = false;
			}
			if (genre != null && !movie.getGenre().toLowerCase().contains(genre.toLowerCase())) {
				match = false;
			}
			if (match) {
				filteredMovies.add(movie);
			}
		}

		return filteredMovies;
	}

	public List<Movie> getAllMovies(String title, LocalDate date, String location, String genre) {
		if (title == null && date == null && location == null && genre == null) {
			return movieRepository.findAll();
		} else {
			return filterMovies(title, date, location, genre);
		}
	}

	public Movie getMovieById(Integer id) {
		return movieRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid movie ID: " + id));
	}

	public List<BookingHistory> getBookingHistory() {
		List<Movie> movies = movieRepository.findAll();
		List<BookingHistory> bookingHistory = new ArrayList<>();

		for (Movie movie : movies) {
			int bookedTickets = movie.getTotalSeats() - movie.getAvailableSeats();

			if (bookedTickets > 0) {
				int totalPrice = bookedTickets * movie.getPrice();

				BookingHistory booking = new BookingHistory();
				booking.setId(movie.getId());
				booking.setTitle(movie.getTitle());
				booking.setDirector(movie.getDirector());
				booking.setDescription(movie.getDescription());
				booking.setGenre(movie.getGenre());
				booking.setDate(movie.getDate());
				booking.setLocation(movie.getLocation());
				booking.setBookedTickets(bookedTickets);
				booking.setTotalPrice(totalPrice);
				bookingHistory.add(booking);
			}
		}
		return bookingHistory;
	}

	public void bookTickets(Integer id, Integer tickets, Integer payment) {
		Movie movie = getMovieById(id);

		int availableSeats = movie.getAvailableSeats();
		if (tickets > availableSeats) {
			throw new IllegalArgumentException("No seats available at this time.");
		}

		int calculatedTotalPrice = tickets * movie.getPrice();
		if (!payment.equals(calculatedTotalPrice)) {
			throw new IllegalArgumentException("Invalid total price.");
		}

		availableSeats -= tickets;
		movie.setAvailableSeats(availableSeats);

		movieRepository.save(movie);
	}

	public Movie addMovie(Movie movie) {
		return movieRepository.save(movie);
	}

	public void deleteMovie(Integer id) {
		Movie movie = movieRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid movie ID: " + id));

		movieRepository.delete(movie);
	}

	public void updateMovie(Integer id, Movie movie) {

		Movie movie2 = movieRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid movie ID: " + id));

		movie2.setDescription(movie.getDescription());
		movie2.setDirector(movie.getDirector());
		movie2.setGenre(movie.getGenre());
		movie2.setTitle(movie.getTitle());
		movie2.setDate(movie.getDate());
		movie2.setLocation(movie.getLocation());
		movie2.setTotalSeats(movie.getTotalSeats());
		movie2.setAvailableSeats(movie.getAvailableSeats());
		movie2.setPrice(movie.getPrice());
		movieRepository.save(movie2);
	}
}