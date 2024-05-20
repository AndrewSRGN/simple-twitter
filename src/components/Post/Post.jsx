import React, {forwardRef} from "react";
import "./Post.css";

import Button from "../UI/Button/Button";

const Post = forwardRef(({ remove, ...props }, ref) => {
    const removePost = () => {
        const postId = props.post.id;
        remove(postId)
    }

    return (
        <section className={"post"} ref={ref}>
            <article className="post__content">
                <strong>
                    {props.index}. {props.post.title}
                </strong>

                <div>{props.post.body}</div>
            </article>
            <div className="post__buttons">
                <Button onClick={removePost}>
                    Delete
                </Button>
            </div>
        </section>
    );
});

export default Post;
