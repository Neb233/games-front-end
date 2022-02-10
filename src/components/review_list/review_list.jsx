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
  const [ sortBy, setSortBy ] = useState("")
  const [ order, setOrder ] = useState("desc")

  const category = searchParams.get("category");

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviews) => {
      setReviews(reviews);
    });
  }, [category, sortBy, order]);
  return (
    <main>
      <h2 className="dynamicheader">{category ? category : "All Games"}</h2>
      <div>
     
      <nav className="sortbybuttons">{order === "asc" ? (<button onClick={() => {
        setSortBy("votes")
        setOrder("desc")
        
        }  }>Votes ⇩</button> ) : <button onClick={() => {
          setSortBy("votes")
          setOrder("asc")
   
          }  }>Votes ⇧</button>}

      {order === "asc" ? (<button onClick={() => {
        setSortBy("created_at")
        setOrder("desc")
      }  }>Date ⇩</button> ) : <button onClick={() => {
        setSortBy("created_at")
        setOrder("asc")
      }  }>Date ⇧</button>}


      </nav>
      
      </div>
    {/* comments, votes, dates */}
      <ul className="reviewslist">
        {reviews.map((review) => {
          return <ReviewCard review={review} />
        })}
      </ul>
    </main>
  );
};

export default ReviewList;
