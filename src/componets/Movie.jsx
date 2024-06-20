import { useEffect, useState } from "react";
import { API_KEY } from "./Apikey";
import Moviecard from "./MovieCard";
import Pagination from "./Pagination";
import ShimerUI from "./ShimerUI";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  async function getMovieData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    setMovie(data.results);
  }

  useEffect(() => {
    getMovieData();
  }, [page]);

  return movie.length < 1 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="movie-container">
        <h3 className="all_movie">All Movies</h3>
        {movie && (
          <div className="movie-container">
            {movie.map((movies) => {
              return <Moviecard key={movies.id} {...movies} />;
            })}
          </div>
        )}
        {page > 1 && <Pagination page={page} setPage={setPage} />}
      </div>
    </>
  );
};

export default Movie;
