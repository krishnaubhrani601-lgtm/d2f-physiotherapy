import "./ReviewCard.css";

/**
 * ReviewCard — Displays a single patient review with star rating,
 * reviewer name, and review text.
 *
 * Props:
 *  - review: { reviewer_name, rating, review_text }
 */
function ReviewCard({ review }) {
  // Generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star star--filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-card card-custom">
      <div className="review-card__stars">{renderStars(review.rating)}</div>
      <p className="review-card__text">"{review.review_text}"</p>
      <div className="review-card__author">
        <div className="review-card__avatar">
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>
        <span className="review-card__name">{review.reviewer_name}</span>
      </div>
    </div>
  );
}

export default ReviewCard;
