// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
// import { Button } from "shadcn-ui/button";

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
    // <div className="p-8">
    //   <h1 className="text-3xl font-bold mb-6">Movies</h1>
    //   <div className="grid grid-cols-3 gap-6">
    //     {movies.map((movie) => (
    //       <MovieCard key={movie.id} movie={movie} />
    //     ))}
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Trending at this moment</h2>

          <div className="flex flex-wrap gap-10 justify-around content-around">
            {/* Featured Movie */}
            <div className="relative bg-gray-800 rounded-lg p-6 flex gap-10 h-[500px]">
              <img
                // src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`}
                alt="House of Wealth"
                className="rounded-lg mb-4 h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> */}
              <div className="relative z-10 p-10">
                <h2 className="text-3xl font-bold">House of Wealth</h2>
                <p className="mt-4 mb-6 text-gray-400">2023 | Drama | 2h 38m</p>
                <p className="mb-8">
                  The movie follows the lives of a wealthy family, the Johnsons,
                  who appear to have it all: a grand mansion, luxurious cars,
                  and expensive designer clothing. However, behind the facade of
                  their lavish lifestyle, there are deep-seated tensions and
                  secrets that threaten to tear the family apart.
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
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";

// export const HomePage = () => {
//   return (
//     <div className="flex">
//

//       {/* Main Content */}
//       <div className="w-4/5 p-8 bg-gray-800 text-white space-y-8">
//         <h2 className="text-2xl font-bold">Trending at this moment</h2>

//         {/* Trending Movies */}
//         <div className="flex space-x-6 overflow-x-scroll pb-4">
//           <MovieCard title="Tokyo Train" year="2022" genre="Action Comedy" />
//           <MovieCard title="Moonfall Again" year="2022" genre="Sci-Fi" />
//           <MovieCard title="Life in Paris" year="2020" genre="Comedy Drama" />
//           <MovieCard title="House of Gucci" year="2021" genre="Drama" />
//         </div>

//         {/* Selected Movie Detail Section */}
//         <div className="flex space-x-6 bg-gray-900 p-6 rounded-md">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Selected Movie"
//             className="w-1/3 rounded-lg"
//           />
//           <div className="flex flex-col justify-between">
//             <div>
//               <h3 className="text-3xl font-bold">House of Wealth</h3>
//               <p className="text-gray-400">2023 | Drama | {"2h 38m"}</p>
//               <p className="mt-4">
//                 The movie follows the lives of a wealthy family, the Johnsons,
//                 who appear to have it all: a grand mansion, luxurious cars, and
//                 expensive designer clothing. However, behind the facade of their
//                 lavish lifestyle, there are deep-seated tensions and secrets
//                 that threaten to tear the family apart.
//               </p>
//             </div>
//             <div className="flex space-x-4 mt-6">
//               <button className="bg-purple-600 p-3 rounded-md">
//                 Watch Now
//               </button>
//               <button className="bg-gray-700 p-3 rounded-md">❤️</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Reusable MovieCard Component
// const MovieCard = ({ title, year, genre }: any) => {
//   return (
//     <div className="w-48 bg-gray-700 p-4 rounded-lg shadow-md">
//       <img
//         src="https://via.placeholder.com/150"
//         alt={title}
//         className="mb-4 rounded-lg"
//       />
//       <h4 className="font-bold">{title}</h4>
//       <p className="text-gray-400">
//         {year} | {genre}
//       </p>
//     </div>
//   );
// };

// export default HomePage;
