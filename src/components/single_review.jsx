import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById, getCommentsByReviewId } from "../utils/api";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getReviewById(review_id).then((review) => {
      console.log(review);
      setReview(review);
    });
  }, []);
  useEffect(() => {
    getCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
    });
  }, []);
  return (
    <main>
      <div>
        <h2 className="reviewtitle">{review.title}</h2>
      </div>

      <div className="reviewbox">
        <h3>{review.owner}</h3>
        <h3>{review.designer}</h3>
        <h3>{review.votes}</h3>
        <p>{review.body}</p>
        <img
          src={
            review.review_img_url
              ? review.review_img_url
              : "../../placeholder.png"
          }
          alt=""
        />
        <p>{review.created_at}</p>
        <button>Post Comment</button>
      </div>
      <div>
        <h2>{review.commment_count}</h2>
      </div>
      <div>
        <ul className="commentslist">
          {comments.map((comment) => {
            return (
              <>
                <div>
                  <li className="votebox">
                    <button>Up</button>
                    <h3>{comment.votes}</h3>
                    <button>Down</button>
                  </li>
                </div>
                <div>
                  <li key={comment.comment_id} className="commentbox">
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    <p>{comment.created_at}</p>
                    <button>Delete</button>
                  </li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default SingleReview;
