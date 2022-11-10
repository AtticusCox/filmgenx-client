import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./InfoModal.scss";
import ReviewForm from "../ReviewForm/ReviewForm";

const InfoModal = ({ open, onClose, movieInfo, movie }) => {
  const [reviewList, setReviewList] = useState(false);

  const getReviewList = async () => {
    const response = await axios.get(
      `http://localhost:8080/reviews/${movie.id}`
    );
    setReviewList(response.data);
  };

  useEffect(() => {
    getReviewList();
  }, [movie]);
  if (!reviewList) return <p>Reviews Loading</p>;
  if (!open) return null;

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
            <div className="info-modal__button-container">
              <button className="info-modal__button" onClick={onClose}>
                Close
              </button>
              <button onClick={addToWatchList} className="info-modal__button">
                Add movie to your watch list
              </button>
            </div>
            <div className="info-modal__content">
              <h1 className="info-modal__title">{movieInfo.title}</h1>
              <p className="info-modal__plot">{movieInfo.plot}</p>
              <p className="info-modal__date">{movieInfo.releaseDate}</p>
              <p className="info-modal__runtime">{movieInfo.runtimeStr}</p>
            </div>
            <ReviewForm getReviewList={getReviewList} id={movieInfo.id} />
            <div className="info-modal__review-list">
              {reviewList.map((review) => {
                return <ReviewItem review={review} key={review.id} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InfoModal;
