import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loadingpage.css";

const LoadingPage = () => {
  return (
    <div className="fp-container">
      <Spinner animation="border" />
    </div>
  );
};

export default LoadingPage;
