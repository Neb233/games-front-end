import React from "react";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "../reviewcard/reviewcard";
import "../review_list/review_list.css";


const ReviewList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  const [ sortBy, setSortyBy ] = useState("")

  const category = searchParams.get("category");

  useEffect(() => {
    getReviews(category, sortBy).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);
  return (
    <main>
      <h2 className="dynamicheader">{category ? category : "All Games"}</h2>
      {/* <nav><button onClick={() => setSortyBy("") }></button></nav> */}
      <ul className="reviewslist">
        {reviews.map((review) => {
          return <ReviewCard review={review} />
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
