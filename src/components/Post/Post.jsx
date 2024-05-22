import React, {forwardRef} from "react";
import "./Post.css";

import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

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
                <Link to={`/posts/${props.post.id}`}>
                    <Button>
                        Open
                    </Button>
                </Link>
                <Button onClick={removePost}>
                    Delete
                </Button>
            </div>
        </section>
    );
});

export default Post;
