import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Movie.scss";
import InfoModal from "../components/InfoModal/InfoModal";

// const { default: MovieCard } = require("../components/MovieCard/MovieCard");

const MovieList = () => {
  const [movie, setMovie] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      const response = await axios.get(`http://localhost:8080/random`);
      setMovie(response.data);
    };
    getRandomMovie();
  }, []);
  if (!movie) return <p>Loading</p>;

  const randomizerHandler = async () => {
    const response = await axios.get(`http://localhost:8080/random`);
    setMovie(response.data);
  };
  return (
    <>
      <div className="movie-list">
        {/* {movieList.map((movie) => {
          console.log(movie);
          return (
            
          );
        })} */}
        <MovieCard
          key={movie.id}
          movie={movie}
          setMovieInfo={setMovieInfo}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <InfoModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          movieInfo={movieInfo}
          movie={movie}
        />
        <button className="movie-button" onClick={randomizerHandler}>
          RANDOMIZE
        </button>
      </div>
    </>
  );
};

export default MovieList;
