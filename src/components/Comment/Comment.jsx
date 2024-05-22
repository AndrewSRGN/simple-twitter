import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <strong className="comment__email">{comment.email}</strong>
            <div className="comment__body">{comment.body}</div>
        </div>
    );
};

export default Comment;