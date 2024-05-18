import React from 'react';
import classes from "./Post.module.css";

const PostContent = ({post}) => {
    return (
        <article className={classes.content}>
            <h3 className={classes.title}>
                {post.title}
            </h3>
            <p className={classes.body}>
                {post.body}
            </p>
        </article>
    );
};

export default PostContent;