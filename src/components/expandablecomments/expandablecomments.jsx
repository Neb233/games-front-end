import React, { useState } from "react";

const Expandable = ({ children, comments }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen)

    return (
        <div>
            <button onClick={toggleOpen}><div>
        <h2>
          <span>{comments.length}</span> Comment
          {comments.length === 1 ? "" : "s"}
        </h2>
      </div>
      {comments.length === 0 ? <div>Be the first to comment</div> : null}
      </button>
        </div>
    )
}

export default Expandable