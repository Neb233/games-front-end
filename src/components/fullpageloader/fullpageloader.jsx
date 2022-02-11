import React from "react";
import Spinner from "../../assets/loading.gif";
import "./fullpageloader.css";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-container" alt="Loading" />
    </div>
  );
};

export default FullPageLoader;
