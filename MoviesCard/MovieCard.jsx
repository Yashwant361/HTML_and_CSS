import React, { useState } from "react";
import MovieDesc from "./MovieDesc";

function MovieCard({ movie }) {
  const [show, setShow] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card p-3">
        <h4>{movie.title}</h4>
        <p>Rating: {movie.rating}</p>
        <p>Genre: {movie.genre}</p>

        <button
          className="btn btn-primary"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"} Description
        </button>

        {show && <MovieDesc desc={movie.desc} />}
      </div>
    </div>
  );
}

export default MovieCard;
