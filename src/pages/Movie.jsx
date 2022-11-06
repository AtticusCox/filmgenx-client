import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Movie.scss";
import InfoModal from "../components/InfoModal/InfoModal";

// const { default: MovieCard } = require("../components/MovieCard/MovieCard");

const MovieList = () => {
  const [movie, setMovie] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      const response = await axios.get(`http://localhost:8080/random`);
      setMovie(response.data);
      // console.log(response.data);
      console.log(response.data);
      console.log(movie);
    };
    getRandomMovie();
  }, []);
  if (!movie) return <p>Loading</p>;

  const randomizerHandler = () => {};
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
        />
      </div>
      <button>Randomize</button>
    </>
  );
};

export default MovieList;
