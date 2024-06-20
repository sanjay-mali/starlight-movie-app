import { API_KEY } from "./Apikey";
import MovieCard from "./MovieCard";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const Body = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/all?page=${page}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovie(data.results);
  };

  useEffect(() => {
    getMovieData();
  }, [page]);

  return (
    <>
      <h3 className="all_movie">All Movies</h3>
      {movie && (
        <div className="movie-container">
          {movie.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
      
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Body;