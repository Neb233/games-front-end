import React from "react";

import ReviewList from "./review_list";

const HOME = ({ reviews }) => {
  return (
    <>
      <ReviewList reviews={reviews} />
    </>
  );
};

export default HOME;
