import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getReviews, patchReviewVotes } from "../../utils/api";
import "../review_list/review_list.css";


const ReviewList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const category = searchParams.get("category");
  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);
  return (
    <main>
      <h2 className="dynamicheader">{category ? category : "All Games"}</h2>
      <ul className="reviewslist">
        {reviews.map((review) => {
          return (
            <div className="reviewcontainer">
              <li key={review.title} className="votebox">
                <button>Like</button>
                <h3>{review.votes}</h3>
                
              </li>

              <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
                <li key={review.review_id} className="reviewbox">
                  <h3>Title: {review.title}</h3>
                  <p>Category: {review.category}</p>
                  <p>Owner: {review.owner}</p>
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
          );
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
