import React from "react";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
  const StarRating = ({ rating }) => (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= rating ? (
          <FaStar key={s} color="#f5a623" />
        ) : (
          <FaRegStar key={s} color="#f5a623" />
        ),
      )}
    </span>
  );

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [allReviews, setAllReviews] = useState([
    {
      id: 1,
      name: "Alice",
      date: "2024-05-01",
      rating: 5,
      comment:
        "Absolutely love this outerwear! The quality is amazing and it fits perfectly.",
    },
    {
      id: 2,
      name: "Bob",
      date: "2024-05-03",
      rating: 4,
      comment:
        "Great design and comfortable to wear. The only downside is that it runs a bit small.",
    },
  ]);
  const submitReview = () => {
    if (reviewRating === 0 || reviewText.trim() === "") {
      alert("Please provide a rating and review text.");
      return;
    }
    const newReview = {
      id: allReviews.length + 1,
      name: "You",
      date: new Date().toISOString().split("T")[0],
      rating: reviewRating,
      comment: reviewText,
    };
    setAllReviews([newReview, ...allReviews]);
    setReviewRating(0);
    setReviewText("");
  };
  return (
    <section className="reviews-section">
      <h2 className="section-title">Customer Reviews</h2>

      {/* Write a review */}
      <div className="write-review">
        <h3>Write a Review</h3>
        <div className="review-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              onClick={() => setReviewRating(s)}
              style={{ cursor: "pointer" }}
            >
              {s <= reviewRating ? (
                <FaStar color="#f5a623" />
              ) : (
                <FaRegStar color="#f5a623" />
              )}
            </span>
          ))}
        </div>
        <textarea
          placeholder="Share your thoughts about this product..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="submit-review" onClick={submitReview}>
          Submit Review
        </button>
      </div>

      {/* Review list */}
      <div className="review-list">
        {allReviews.map((r) => (
          <div key={r.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-avatar">{r.name[0]}</div>
              <div>
                <p className="reviewer-name">{r.name}</p>
                <p className="review-date">{r.date}</p>
              </div>
              <StarRating rating={r.rating} />
            </div>
            <p className="review-comment">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
