import React from 'react';
import Post from "../Post/Post";
import './PostList.css';

const PostList = ({title, posts, removePost}) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
    }

    return (
        <div className="post-list">
            <h1 className="post-list__title">{title}</h1>
            {posts.map((post, index) => (
                <Post
                    remove={removePost}
                    key={post.id}
                    index={index + 1}
                    post={post}
                />
            ))}
        </div>
    );
};

export default PostList;