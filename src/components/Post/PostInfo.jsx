import React from "react";
import classes from "./Post.module.css";

const PostInfo = ({user}) => {
    return (
        <div className={classes.info}>
            <div className={classes.author}>
                <img
                    className={classes.author_avatar}
                    src={user.photoUrl}
                    alt="Author"
                />
                <div className={classes.author_info}>
                    <div className={classes.author_name}>{user.name}</div>
                    <div className={classes.author_username}>
                        @{user.username}
                    </div>
                </div>
            </div>

            <div className={classes.options}>
                <button className={classes.btn_delete}>Delete</button>
            </div>
        </div>
    );
};

export default PostInfo;
