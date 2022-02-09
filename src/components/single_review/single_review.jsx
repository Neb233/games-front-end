import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import { getReviewById, getCommentsByReviewId } from "../../utils/api";
import CommentBox from "../commentbox/commentbox";
import "../single_review/single_review.css";
const SingleReview = () => {
  const { user, setUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getReviewById(review_id).then((review) => {
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
          className="reviewimage"
          src={
            review.review_img_url
              ? review.review_img_url
              : "../../placeholder.png"
          }
          alt=""
        />
        <p>{review.created_at}</p>
        <CommentBox review={review} />
      </div>
      <div>
        <h2>
          <span>{comments.length}</span> Comment
          {comments.length === 1 ? "" : "s"}
        </h2>
      </div>
      {comments.length === 0 ? <div>Be the first to comment</div> : null}
      <div>
        <ul className="commentslist">
          {comments.map((comment) => {
            return (
              <>
                <div className="commentcomponent">
                  <li className="votebox">
                    <button>Up</button>
                    <h3>{comment.votes}</h3>
                    <button>Down</button>
                  </li>

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
