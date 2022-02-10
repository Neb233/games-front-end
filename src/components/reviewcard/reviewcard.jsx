import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { patchReviewVotes } from "../../utils/api"

const ReviewCard = ({ review }) => {
const [votes, setVotes] = useState(review.votes)

const onPatch = (review_id) => {
    setVotes((votes) => votes +1)
 patchReviewVotes(review_id)
     {review.votes +=1}


}
    return (
        <div className="reviewcontainer">
          <li key={review.title} className="votebox">
            <button onClick={()=> {
                onPatch(review.review_id)
            }}>Like</button>
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
          
}

export default ReviewCard