import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Movie.scss";

// const { default: MovieCard } = require("../components/MovieCard/MovieCard");

const MovieList = () => {
  const [movieList, setMovieList] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getRandomMovie = async () => {
      const response = await axios.get(`http://localhost:8080/movies`);
      setMovieList(response.data);
      // console.log(response.data);
      console.log(response.data[0]);
      console.log(movieList);
    };
    getRandomMovie();
  }, []);
  if (!movieList) return <p>Loading</p>;
  return (
    <>
      <div className="movie-list">
        {movieList.map((movie) => {
          console.log(movie);
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <button>Randomize</button>
    </>
  );
};

export default MovieList;
