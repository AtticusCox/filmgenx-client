import axios from "axios";
import React from "react";
import "./InfoModal.scss";

const InfoModal = ({ open, onClose, movieInfo }) => {
  if (!open) return null;
  console.log(movieInfo);

  const addToWatchList = async () => {
    await axios.post("http://localhost:8080/watchList", movieInfo);

    alert("movie successfully added to watch list");

    onClose();
  };

  return (
    <>
      <main className="info-modal">
        <section className="info-modal__container">
          <div className="info-modal__info">
            <button onClick={onClose}>Close</button>
            <h1 className="info-modal__title">{movieInfo.title}</h1>
            <p className="info-modal__plot">{movieInfo.plot}</p>
            <p className="info-modal__date">{movieInfo.releaseDate}</p>
            <p className="info-modal__runtime">{movieInfo.runtimeStr}</p>
            <button onClick={addToWatchList} className="info-modal__add">
              Add movie to your watch list
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default InfoModal;
