import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const [ratingFilter, setRatingFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      (ratingFilter === "" || movie.rating >= ratingFilter) &&
      (genreFilter === "" || movie.genre === genreFilter)
    );
  });

  return (
    <div className="container mt-4">
      <h2>Movie List</h2>

      {/* FILTERS */}
      <div className="d-flex gap-3 mb-3">
        <select
          className="form-select w-25"
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option value="">Filter by Rating</option>
          <option value="9">9 & above</option>
          <option value="8">8 & above</option>
        </select>

        <select
          className="form-select w-25"
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">Filter by Genre</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
        </select>
      </div>

      {/* LIST */}
      <div className="row">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
