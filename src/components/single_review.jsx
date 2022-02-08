import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";

const SingleReview = () => {
  const { review_id } = useParams();
  const { review, setReview } = useState();
  useEffect(() => {
    getReviewById(review_id).then((review) => {
      console.log(review);
      setReview(review);
    });
  }, []);
  return (
    <div>
      <h2>{review.titile}</h2>
    </div>
  );
};

export default SingleReview;
