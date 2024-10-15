// FavoritesPage.tsx
import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Favorite Movies</h1>
      <div className="grid grid-cols-3 gap-6">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
