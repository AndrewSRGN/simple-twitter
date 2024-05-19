import React, {useEffect, useState} from "react";
import classes from "./Post.module.css";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import PostStatistic from "./PostStatistic";
import PostActions from "./PostActions";
import UserService from "../../API/UserService";
import CommentsService from "../../API/CommentsService";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {useFetch} from "../../hooks/useFetch";

const Post = ({post, handleDeletePost}) => {
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);

    const fetchUser = async () => {
        const user = await UserService.getUserById(post.userId);
        user.photoUrl = `https://api.dicebear.com/8.x/pixel-art/svg`;
        setUser(user);
    }

    const fetchComments = async () => {
        const comments = await CommentsService.getCommentsByPostId(post.id);
        setComments(comments);
    }

    const callbacks = [fetchUser, fetchComments];

    const [fetchData, isLoading, error] = useFetch(callbacks);

    useEffect(() => {
        fetchData();
    }, []);

    const statistic = {
        comments: comments.length
    }

    if (isLoading) {
        return (
            <section className={classes.container}>
                <Loader center={true}/>
            </section>
        );
    }

    if (error) {
        return (
            <section className={classes.container}>
                <Error error={error} />
            </section>
        );
    }

    return (
        <section className={classes.container}>
            <PostInfo user={user} />

            <PostContent post={post} />

            <PostStatistic statistic={statistic} />

            <PostActions delete={handleDeletePost}/>
        </section>
    );
};

export default Post;
