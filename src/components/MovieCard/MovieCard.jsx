import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./MovieCard.scss";
import ReactCardFlip from "react-card-flip";

const MovieCard = ({ movie, setIsOpen, setMovieInfo }) => {
  const openHandler = () => {
    setIsOpen(true);
    setMovieInfo(movie);
  };

  return (
    <>
      <section onClick={openHandler} className="movie-card">
        <div className="movie-card__container">
          <div className="movie-card__front">
            <h1 className="movie-card__title">{movie.title}</h1>
            <div className="movie-card__image-container">
              <img
                src={movie.image}
                alt="movie poster"
                className="movie-card__image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
