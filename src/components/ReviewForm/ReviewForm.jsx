import axios from "axios";
import React from "react";
import "./ReviewForm.scss";

const ReviewForm = ({ id, getReviewList }) => {
  const createNewReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const newReview = {
      content: form.review.value,
      rating: form.rating.value,
      videoId: id,
    };
    axios.post("http://localhost:8081/reviews/new", newReview).then(() => {
      getReviewList();
    });
  };

  return (
    <div className="review-form-container">
      <form onSubmit={createNewReview} className="review-form">
        <h3 className="review-form__title">Leave a Review</h3>
        <div className="review-form__wrapper">
          <textarea
            type="textarea"
            className="review-form__input"
            name="review"
            placeholder="Leave your review here..."
            required
          />
          <label className="review-form__rating" htmlFor="rating">
            Rating 1-10
          </label>
          <input
            type="number"
            className="review-form__rating"
            name="rating"
            required
          />
        </div>
        <button className="review-form__button">Click Here to Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
