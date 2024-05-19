import React, {useEffect, useState} from 'react';
import classes from './PostList.module.css';
import PostService from "../../API/PostService";
import Post from "../Post/Post";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const PostList = ({limit = 10}) => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);


    const fetchPosts = async () => {
        const posts = await PostService.getAll(limit, page);
        setPosts(posts);
    }

    const [fetchData, isLoading, error] = useFetch([fetchPosts]);
    const Posts = posts.map(post => <Post key={post.id} post={post}/>)

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={classes.container}>
            {isLoading && <Loader center/>}
            {error && <Error error={error} />}
            {Posts}
        </div>
    );
};

export default PostList;