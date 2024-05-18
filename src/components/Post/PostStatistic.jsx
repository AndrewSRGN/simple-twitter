import React from 'react';
import classes from "./Post.module.css";

const PostStatistic = ({statistic}) => {
    return (
        <div className={classes.statistic}>
            <div className={classes.statistic_commentsCount}>
                {statistic.comments} Comments
            </div>
        </div>
    );
};

export default PostStatistic;