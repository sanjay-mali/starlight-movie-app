import { useEffect, useState } from "react";
import { API_KEY } from "./Apikey";
import Moviecard from "./MovieCard";
import Pagination from "./Pagination";
import ShimerUI from "./ShimerUI";

const Tvshow = () => {
  const [tvShow, setTvShow] = useState([]);
  const [page, setPage] = useState(1);

  async function getTvShowData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?page=${page}&api_key=${API_KEY}`
    );
    const data = await response.json();
    setTvShow(data.results);
  }

  useEffect(() => {
    getTvShowData();
  }, [page]);

  return tvShow.length < 1 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="movie-container">
        <h3 className="all_movie">All TV Shows</h3>
        {tvShow && (
          <div className="movie-container">
            {tvShow.map((tvshow) => {
              return <Moviecard key={tvshow.id} {...tvshow} />; // Added return statement
            })}
          </div>
        )}
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Tvshow;
