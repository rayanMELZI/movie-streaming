// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4b02471d6d9edb219c86b1437335f528`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
