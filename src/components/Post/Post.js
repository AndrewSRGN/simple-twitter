import React, {useState} from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    const initialStatistic = {
        like: 0,
        dislike: 0,
        comment: 0,
        share: 0
    }
    const [statistic, setStatistic] = useState(initialStatistic);


    return (
        <section className={classes.container}>
            <div className={classes.info}>
                <div className={classes.author}>
                    <img className={classes.author_avatar}
                         src="https://via.placeholder.com/50"
                         alt="Author"/>
                    <div className={classes.author_info}>
                        <div className={classes.author_name}>Name</div>
                        <div className={classes.author_status}>Status</div>
                        <div className={classes.author_date}>Date</div>
                    </div>
                </div>

                <div className={classes.options}>
                    <button className={classes.btn_delete}>Delete</button>
                </div>
            </div>

            <article className={classes.content}>
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </article>

            <div className={classes.statistic}>
                <div className={classes.statistic_commentsCount}>
                    {statistic.comment} Comments
                </div>

                <div className={classes.statistic_reactions}>
                    <div className={classes.statistics_likesCount}>
                        {statistic.like} Likes
                    </div>

                    <div className={classes.statistic_dislikesCount}>
                        {statistic.dislike} Disliked
                    </div>
                </div>

                <div className={classes.statistic_shareCount}>
                    {statistic.share} Replies
                </div>
            </div>

            <div className={classes.actions}>
                <button className={classes.btn_comment}>Comment</button>

                <div className={classes.statistics_reactions}>
                    <button className={classes.btn_like}>Like</button>
                    <button className={classes.btn_dislike}>Dislike</button>
                </div>

                <button className={classes.btn_share}>Share</button>
            </div>
        </section>
    );
};

export default Post;