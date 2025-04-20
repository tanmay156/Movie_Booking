package com.movie.ticket.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.ticket.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
}