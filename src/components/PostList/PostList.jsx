import React, { createRef } from "react";
import Post from "../Post/Post";
import './PostList.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, removePost}) => {

    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
    }

    return (
        <div className="post-list">
            <h1 className="post-list__title">{title}</h1>
            <TransitionGroup className="post-list__body">
                {posts.map((post, index) => {
                    const nodeRef = createRef();
                    return (
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                        >
                            <Post
                                ref={nodeRef}
                                remove={removePost}
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