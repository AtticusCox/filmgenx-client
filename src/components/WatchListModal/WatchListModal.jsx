import React from "react";

const WatchListModal = ({ open, onClose, movieInfo }) => {
  if (!open) return null;
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
          </div>
        </section>
      </main>
    </>
  );
};

export default WatchListModal;
