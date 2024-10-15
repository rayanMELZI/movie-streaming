// src/pages/MoviePlayerPage.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviePlayerPage: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4b02471d6d9edb219c86b1437335f528`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        Movie not found
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Video Player Section */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="w-full max-w-4xl">
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            controls
            autoPlay
          >
            {/* Placeholder video source - replace with your own video */}
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Movie Title Overlay */}
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-lg">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MoviePlayerPage;
