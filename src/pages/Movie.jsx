import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";

// const { default: MovieCard } = require("../components/MovieCard/MovieCard");

const MovieList = () => {
  const [movieList, setMovieList] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getRandomMovie = async () => {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Title/${apiKey}/tt0100502`
      );
      setMovieList(response.data);
      console.log(response.data);
    };
    getRandomMovie();
  }, []);
  return (
    <>
      <MovieCard movieList={movieList} />
      <button>Randomize</button>
    </>
  );
};

export default MovieList;
