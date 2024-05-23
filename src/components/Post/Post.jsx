import React, {forwardRef} from "react";
import "./Post.css";
import {useNavigate} from "react-router-dom";

import Button from "../UI/Button/Button";


const Post = forwardRef(({ remove, post, ...props }, ref) => {
    const navigate = useNavigate();

    const removePost = () => {
        const postId = post.id;
        remove(postId)
    }

    const handleClickOpen = () => {
        navigate("/posts/" + post.id);
    }

    return (
        <section className={"post"} ref={ref}>
            <article className="post__content">
                <strong>
                    {props.index}. {post.title} | Post ID: {post.id}
                </strong>

                <div>{post.body}</div>
            </article>
            <div className="post__buttons">
                <Button onClick={handleClickOpen}>
                    Open
                </Button>
                <Button onClick={removePost}>
                    Delete
                </Button>
            </div>
        </section>
    );
});

export default Post;
