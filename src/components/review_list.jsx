import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <main>
      <h2>All reviews</h2>
      <ul className="reviewslist">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewbox">
              <h3>Title: {review.title}</h3>
              <h3>Category: {review.category}</h3>
              <h3>Owner: {review.owner}</h3>
              <p>{review.created_at}</p>
              <img className="reviewthumbnail" src={review.review_img_url} />
              <button>Up</button>
              <h3>{review.votes}</h3>
              <button>Down</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
