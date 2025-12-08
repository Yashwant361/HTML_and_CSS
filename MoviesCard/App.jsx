import React from "react";
import MovieList from "./MovieList";

function App() {
  const movies = [
    { id: 1, title: "Inception", rating: 9, genre: "Sci-Fi", desc: "A mind-bending thriller." },
    { id: 2, title: "Interstellar", rating: 8, genre: "Sci-Fi", desc: "Space & love story." },
    { id: 3, title: "Joker", rating: 9, genre: "Drama", desc: "A dark character study." },
    { id: 4, title: "KGF", rating: 8, genre: "Action", desc: "Rocky bhai mass entertainer" },
    { id: 4, title: "KGF", rating: 8, genre: "Action", desc: "Rocky bhai mass entertainer" },
  ];

  return <MovieList movies={movies} />;
}

export default App;
