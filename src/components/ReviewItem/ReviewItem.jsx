import React from "react";
import { formatDate } from "../../utils/formatDate";
import "./ReviewItem.scss";

const ReviewItem = ({ review }) => {
  return (
    <>
      <div className="reviews">
        <h3 className="reviews__text">{review.name}</h3>
        <p className="reviews__text">{review.content}</p>
        <p className="reviews__text">{review.rating}/10</p>
        <p className="reviews__text">{formatDate(review.timestamp)}</p>
      </div>
    </>
  );
};

export default ReviewItem;
