import React from "react";
import ReviewList from "./review_list";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReviews } from "../utils/api.js";
const HOME = ({ reviews, setReviews }) => {
  const { category } = useParams();
  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);
  return (
    <>
      <ReviewList reviews={reviews} />
    </>
  );
};

export default HOME;
