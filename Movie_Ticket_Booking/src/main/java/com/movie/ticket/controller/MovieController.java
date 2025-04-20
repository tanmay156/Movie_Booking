package com.movie.ticket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.movie.ticket.model.BookingHistory;
import com.movie.ticket.model.Movie;
import com.movie.ticket.service.MovieService;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin
public class MovieController {
	
	@Autowired
	private MovieService movieService;

	@GetMapping
	public List<Movie> getMovies(@RequestParam(required = false) String title,
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
			@RequestParam(required = false) String location, @RequestParam(required = false) String genre

	) {
		return movieService.getAllMovies(title, date, location, genre);
	}

	@GetMapping("/{id}")
	public Movie getMovieById(@PathVariable Integer id) {
		return movieService.getMovieById(id);
	}

	@GetMapping("/booking/history")
	public List<BookingHistory> getBookingHistory() {
		return movieService.getBookingHistory();
	}

	@PostMapping
	public void addMovie(@RequestBody Movie movie) {
		movieService.addMovie(movie);
	}

	@PostMapping("/booking/{movieId}/{quantity}/{totalPrice}")
	public void createBooking(@PathVariable("movieId") Integer id, @PathVariable Integer quantity,
			@PathVariable Integer totalPrice) {
		movieService.bookTickets(id, quantity, totalPrice);
	}

	@DeleteMapping("/{movieId}")
	public void deleteMovie(@PathVariable("movieId") Integer id) {
		movieService.deleteMovie(id);
	}

	@PutMapping("/{movieId}")
	public void updateMovie(@PathVariable("movieId") Integer id, @RequestBody Movie movie) {
		movieService.updateMovie(id, movie);
	}

}