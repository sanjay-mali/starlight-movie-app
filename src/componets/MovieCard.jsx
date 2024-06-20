import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMAGE_NOT_FOUND } from "./ImageNotFound";

const MovieCard = ({
  title,
  overview,
  name,
  poster_path,
  release_date,
  popularity,
  vote_average,
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : IMAGE_NOT_FOUND;

  return (
    <div className="movie-card">
      <img className="movie-poster" src={imageUrl} alt={title} />
      <div className="movie-info">
        <h2 className="movie-title">{title || name}  </h2>
        <p className="movie-overview">{overview.slice(0, 150)}...</p>
        <div className="movie-details">
          <span className="detail-item">{" "}
            {new Date(release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="detail-item">
            <FontAwesomeIcon icon={faStar} /> {vote_average}
          </span>
          <span className="detail-item">
            {popularity.toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
