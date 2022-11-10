import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import ReviewForm from "../ReviewForm/ReviewForm";
import axios from "axios";
import { useState, useEffect } from "react";

const WatchListModal = ({ open, onClose, movieInfo }) => {
  const [reviewList, setReviewList] = useState(false);

  const getReviewList = async () => {
    const response = await axios.get(
      `http://localhost:8080/reviews/${movieInfo.id}`
    );
    setReviewList(response.data);
  };

  useEffect(() => {
    getReviewList();
  }, [movieInfo]);
  if (!reviewList) return <p>Reviews Loading</p>;
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

export default WatchListModal;
