import React, { createRef, useState } from "react";
import Post from "../Post/Post";
import './PostList.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, removePost}) => {
    const [removingPostId, setRemovingPostId] = useState(null);

    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
    }

    const handleRemovePost = (postId) => {
        setRemovingPostId(postId);
        removePost(postId);
    };

    return (
        <div className="post-list">
            <h1 className="post-list__title">{title}</h1>
            <TransitionGroup className="post-list__body">
                {posts.map((post, index) => {
                    const nodeRef = createRef();
                    const isRemoving = removingPostId === post.id;
                    return (
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                            in={!isRemoving}
                        >
                            <Post
                                ref={nodeRef}
                                remove={() => handleRemovePost(post.id)}
                                key={post.id}
                                index={index + 1}
                                post={post}
                            />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;