import React from "react";
import "./WatchListItem.scss";

const WatchListItem = ({ movie, setIsOpen, setMovieInfo }) => {
  const openHandler = () => {
    setIsOpen(true);
    setMovieInfo(movie);
  };
  return (
    <section onClick={openHandler} className="movie-card">
      <div className="movie-card__container">
        <h1 className="movie-card__title">{movie.title}</h1>
        <div className="movie-card__image-container">
          <img
            src={movie.image}
            alt="movie poster"
            className="movie-card__image"
          />
        </div>
        {/* <p className="movie-card__description">{movieList.plot}</p> */}
      </div>
    </section>
  );
};

export default WatchListItem;
