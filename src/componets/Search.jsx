import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { API_KEY } from "./Apikey";
import MovieCard from "./MovieCard";
import ShimerUI from "./ShimerUI";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    const { results } = await data.json();
    setContent(results);
  };
  useEffect(() => {
    fetchSearch();
  }, []);
  const Search = () => {
    fetchSearch();
  };
  const Trigger = (e) => {
    setSearchText(e.target.value);
  };

  return content.length < 1 ? (
    <ShimerUI />
  ) :(
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search..."
          className="search-box"
          onChange={Trigger}
        />
        <button
          className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2"
          onClick={Search}
        >
          Search
        </button>
      </div>
      {content && (
        <div className="movie-container">
          {content.map((Val) => {
            return <MovieCard key={Val.id} {...Val} />;
          })}
        </div>
      )}
      {page > 1 && <Pagination page={page} setPage={setPage} />}
    </>
  );
};

export default Search;
