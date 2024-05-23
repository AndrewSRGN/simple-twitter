import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error"
import Post from "../components/Post/Post";
import CommentsService from "../API/CommentsService";
import Comment from "../components/Comment/Comment";

const PostPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const params = useParams();
    const [fetchData, isLoading, error] = useFetch([getPost, getComments]);

    async function getPost() {
        return await PostService.getById(params.id);
    }

    async function getComments() {
        return await CommentsService.getCommentsByPostId(params.id);
    }

    useEffect( () => {
        fetchData()
            .then(response => {
                setPost(response[0]);
                setComments(response[1]);
            });
    }, []);

    return (
        <div>
            {error && <Error error={error} />}
            {isLoading ?
                <Loader /> :
                <>
                    <Post post={post} />
                    {comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </>
            }

        </div>
    );
};

export default PostPage;