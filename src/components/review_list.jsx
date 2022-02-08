import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ReviewList = ({ reviews }) => {
  const { category } = useParams();
  return (
    <main>
      <h2>{category ? category : "All Games"}</h2>
      <ul className="reviewslist">
        {reviews.map((review) => {
          return (
            <>
              <div>
                <li key={review.title} className="votebox">
                  <button>Up</button>
                  <h3>{review.votes}</h3>
                  <button>Down</button>
                </li>
              </div>

              <div>
                <Link
                  key={review.review_id}
                  to={`/reviews/${review.review_id}`}
                >
                  <li key={review.review_id} className="reviewbox">
                    <h3>Title: {review.title}</h3>
                    <h3>Category: {review.category}</h3>
                    <h3>Owner: {review.owner}</h3>
                    <p>{review.created_at}</p>
                    <img
                      className="reviewthumbnail"
                      src={
                        review.review_img_url
                          ? review.review_img_url
                          : "../../placeholder.png"
                      }
                      alt=""
                    />
                  </li>
                </Link>
              </div>
            </>
          );
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
