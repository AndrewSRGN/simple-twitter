import React from 'react';
import classes from "./Post.module.css";

const PostActions = () => {
    return (
        <div className={classes.actions}>
            <button className={classes.btn_comment}>
                Comment
            </button>
        </div>
    );
};

export default PostActions;