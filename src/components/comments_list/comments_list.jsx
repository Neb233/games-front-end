import React, { useContext } from "react";
import { useState, UserContext } from "../../contexts/userContext";
import { deleteComment } from "../../utils/api";
import dayjs from "dayjs";

const CommentsList = ({ comments, setComments }) => {
  const { user } = useContext(UserContext);

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
        console.log(comments);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <ul className="commentslist">
      {comments.map((comment) => {
        return (
          <>
            <div className="commentcomponent">
              <div className="num-display">{comment.votes}</div>
              <li key={comment.comment_id} className="commentbox">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>{dayjs(comment.created_at).format("DD/MM/YYYY HH:mm A")}</p>
              </li>
              <div className="footer">
                {/* <div className="likebox"> */}
                <button>Like</button>

                {/* </div> */}
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
              </div>
            </div>
          </>
        );
      })}
    </ul>
  );
};

export default CommentsList;
