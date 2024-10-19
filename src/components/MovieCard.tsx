// // src/components/MovieCard.tsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// interface MovieCardProps {
//   movie: any;
// }

// export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
//   const [isFavorited, setIsFavorited] = useState(false);

//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setIsFavorited(favorites.some((fav: any) => fav.id === movie.id));
//   }, [movie.id]);

//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

//     if (isFavorited) {
//       const updatedFavorites = favorites.filter(
//         (fav: any) => fav.id !== movie.id
//       );
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     } else {
//       favorites.push(movie);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//     }

//     setIsFavorited(!isFavorited);
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="rounded mb-4"
//       />
//       <h3 className="text-xl font-bold">{movie.title}</h3>
//       <p className="text-sm mb-4">{movie.release_date}</p>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         onClick={toggleFavorite}
//       >
//         {isFavorited ? "Unfavorite" : "Favorite"}
//       </button>

//       <Link to={`/movie/${movie.id}`}>
//         <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
//           Watch Now
//         </button>
//       </Link>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface MovieCardProps {
  movie: any;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorited(favorites.some((fav: any) => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorited) {
      const updatedFavorites = favorites.filter(
        (fav: any) => fav.id !== movie.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorited(!isFavorited);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-gray-600 p-[2px] rounded-3xl shadow-md w-[320px] relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-3xl mb-4"
        onClick={toggleDetails}
      />
      <div className="p-5 pt-0 pb-1">
        <h3 className="text-xl font-bold">{movie.title}</h3>
        <p className="text-sm mb-4">{movie.release_date}</p>

        {/* Favorite Button */}
        <button
          className={`mt-2 p-2 rounded opacity-60 hover:opacity-100 ${
            isFavorited ? "bg-gray-400" : "bg-gray-500"
          } absolute top-2 right-5`}
          onClick={toggleFavorite}
        >
          {isFavorited ? "💜" : "🤍"}
        </button>

        {/* Collapsible Details Section */}
        {showDetails && (
          // <div className="mt-4 bg-white p-4 rounded-lg shadow-inner">
          //   <p className="text-gray-700 mb-2">Overview: {movie.overview}</p>
          //   <p className="text-gray-700">Rating: {movie.vote_average} / 10</p>
          //   <p className="text-gray-700">Runtime: {movie.runtime} minutes</p>
          //   {/* Watch Now Button */}
          //   <Link to={`/movie/${movie.id}`}>
          //     <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          //       Watch Now
          //     </button>
          //   </Link>
          // </div>

          <div className="relative bg-gray-800 rounded-lg p-6 flex gap-10 h-[500px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="House of Wealth"
              className="rounded-lg mb-4 h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> */}
            <div className="relative z-10 p-10">
              <h2 className="text-3xl font-bold">House of Wealth</h2>
              <p className="mt-4 mb-6 text-gray-400">2023 | Drama | 2h 38m</p>
              <p className="mb-8">
                The movie follows the lives of a wealthy family, the Johnsons,
                who appear to have it all: a grand mansion, luxurious cars, and
                expensive designer clothing. However, behind the facade of their
                lavish lifestyle, there are deep-seated tensions and secrets
                that threaten to tear the family apart.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  className="bg-purple-500 hover:bg-purple-700"
                >
                  Watch now
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Add to Favourites
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
