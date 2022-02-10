import React, { useContext } from "react";
import { useState, UserContext } from "../../userContext"
import { deleteComment } from "../../utils/api"


const CommentsList = ({ comments, setComments }) => {
const { user } = useContext(UserContext)

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
        console.log(comments)
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
    )
}

export default CommentsList