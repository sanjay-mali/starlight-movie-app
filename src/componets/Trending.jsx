import { useState, useEffect } from "react";
import { API_KEY } from "./Apikey";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import ShimerUI from "./ShimerUI";

function Trending() {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies();
  }, [page]);
  async function getTrendingMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    setTrending(data.results);
  }

  return trending.length < 1 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="movie-container">
        <h3 className="all_movie">Trending</h3>
        {trending && (
          <div className="movie-container">
            {trending.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        )}
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default Trending;
