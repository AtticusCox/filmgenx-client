import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./MovieCard.scss";

const MovieCard = ({ movieList }) => {
  return (
    <section className="movie-card">
      <div className="movie-card__container">
        <h1>{movieList.title}</h1>
        <div className="movie-card__image-container">
          <img
            src={movieList.image}
            alt="movie poster"
            className="movie-card__image"
          />
        </div>
        <p className="movie-card__description">{movieList.plot}</p>
      </div>
    </section>
  );
};

export default MovieCard;
