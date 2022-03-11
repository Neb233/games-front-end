import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import {
  getReviewById,
  getCommentsByReviewId,
  deleteComment,
} from "../../utils/api";
import CommentBox from "../commentbox/commentbox";
import CommentsList from "../comments_list/comments_list";
import "../single_review/single_review.css";
import dayjs from "dayjs";
const SingleReview = () => {
  const { user, setUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  const onDelete = (comment_id) => {
    deleteComment(comment_id)
      .then((res) => {
        const newComments = comments.map((comment) => {
          return { ...comment };
        });
        const updatedComments = newComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
        setComments(updatedComments);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
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
    <>
      <div className="reviewbox">
        <div className="ownerdesignerbox">
          <div className="num-display">{review.votes}</div>
          <p className="reivewowner">Owner: {review.owner}</p>
        </div>
        <h2 className="reviewtitle">{review.title}</h2>
        <p className="reviewbody">{review.review_body}</p>

        <p className="reviewdesigner">Designer: {review.designer}</p>

        <img
          className="reviewimage"
          src={
            review.review_img_url
              ? review.review_img_url
              : "../../placeholder.png"
          }
          alt=""
        />
        <p>
          Review created {dayjs(review.created_at).format("DD/MM/YYYY HH:mm A")}
        </p>

        <CommentBox
          review={review}
          comments={comments}
          setComments={setComments}
        />
      </div>
      <div>
        <h2 className="commentcount">
          <span>{comments.length}</span> Comment
          {comments.length === 1 ? "" : "s"}
        </h2>
      </div>
      {comments.length === 0 ? (
        <p className="commentcount">Be the first to comment!</p>
      ) : null}

      <div>
        <ul className="commentslist">
          {comments.map((comment) => {
            return (
              <>
                <div className="commentcomponent">
                  <li className="votebox">
                    <button>Like</button>
                    <h3>{comment.votes}</h3>
                  </li>

                  <li key={comment.comment_id} className="commentbox">
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    <p>{comment.created_at}</p>
                    {comment.author === user.username ? (
                      <button
                        type="button"
                        className="deletebutton"
                        onClick={() => {
                          onDelete(comment.comment_id);
                        }}
                      >
                        Delete
                      </button>
                    ) : null}
                  </li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SingleReview;
