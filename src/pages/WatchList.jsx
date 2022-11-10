import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import InfoModal from "../components/InfoModal/InfoModal";
import WatchListItem from "../components/WatchListItem/WatchListItem";
import WatchListModal from "../components/WatchListModal/WatchListModal";
import "./WatchList.scss";

const WatchList = () => {
  const [watchList, setWatchList] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getWatchList = async () => {
      const response = await axios.get("http://localhost:8080/watchlist");
      setWatchList(response.data);
    };
    getWatchList();
  }, []);
  if (!watchList) return <p>Loading</p>;
  return (
    <>
      <section className="watch-list">
        {watchList.map((movie) => {
          console.log(movie);
          return (
            <WatchListItem
              key={movie.id}
              movie={movie}
              setMovieInfo={setMovieInfo}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          );
        })}
        <WatchListModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          movieInfo={movieInfo}
        />
      </section>
      <div className="clear"></div>
    </>
  );
};

export default WatchList;
