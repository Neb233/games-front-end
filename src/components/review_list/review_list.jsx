import React from "react";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "../reviewcard/reviewcard";
import "../../../src/App.css";
import "../review_list/review_list.css";
import LoadingPage from "../loadingpage/loadingpage";

const ReviewList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);

  const category = searchParams.get("category");

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sortBy, order]);

  return (
    <main>
      <h2 className="dynamicheader">{category ? category : "All Games"}</h2>
      <div>
        <nav className="sortbybuttons">
          {order === "asc" ? (
            <button
              onClick={() => {
                setSortBy("votes");
                setOrder("desc");
              }}
            >
              Votes ⇩
            </button>
          ) : (
            <button
              onClick={() => {
                setSortBy("votes");
                setOrder("asc");
              }}
            >
              Votes ⇧
            </button>
          )}

          {order === "asc" ? (
            <button
              onClick={() => {
                setSortBy("created_at");
                setOrder("desc");
              }}
            >
              Date ⇩
            </button>
          ) : (
            <button
              onClick={() => {
                setSortBy("created_at");
                setOrder("asc");
              }}
            >
              Date ⇧
            </button>
          )}
        </nav>
      </div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <ul className="reviewslist">
          {reviews.map((review) => {
            return <ReviewCard review={review} />;
          })}
        </ul>
      )}
    </main>
  );
};

export default ReviewList;
