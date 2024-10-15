// src/pages/FavoritesPage.tsx
import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

const FavoritesPage: React.FC = () => {
  const [trending, setTrending] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=4b02471d6d9edb219c86b1437335f528`
      );
      const data = await response.json();
      setTrending(data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Favorite Movies</h1>
      <div className="grid grid-cols-3 gap-6">
        {trending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
