import "../commentbox/commentbox.css";
import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../../userContext";
import cn from "classnames";
import useDynamicHeightField from "../../utils/useDynamicHeightField";
import { postNewComment } from "../../utils/api";

const INITIAL_HEIGHT = 24;

const CommentBox = ({ review, comments, setComments }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const { user } = useContext(UserContext);

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.username) {
      return;
    }
    postNewComment(review.review_id, {
      username: user.username,
      body: commentValue,
    })
      .then((res) => {
        setCommentValue("");

        const newComments = comments.map((comment) => {
          return { ...comment };
        });
        newComments.push(res);
        setComments(newComments);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
      >
        <div className="header">
          <div className="user">
            <img src={user.avatar_url} alt="User avatar" />
            <span>{user.username}</span>
          </div>
        </div>

        <label htmlFor="comment">Leave a comment</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Leave a comment"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Comment
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentBox;
