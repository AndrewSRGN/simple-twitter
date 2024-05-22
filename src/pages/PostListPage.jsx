import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import Modal from "../components/Modal/Modal";
import Button from "../components/UI/Button/Button";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Pagination from "../components/UI/Pagination/Pagination";
import PostService from "../API/PostService";
import {useFilterPosts} from "../hooks/usePost";
import {useFetch} from "../hooks/useFetch";
import {getPageCount} from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import Select from "../components/UI/Select/Select";

function PostListPage() {
    const [posts, setPosts] = useState([]);
    const [postsCount, setPostsCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({sortBy: '', query: ''});
    const [modal, setModal] = useState(false);
    const [isEndlessScroll, setIsEndlessScroll] = useState(false);
    const searchedAndSortedPosts = useFilterPosts(posts, filter);
    const lastElement = useRef();

    const [fetchData, isLoading, error] = useFetch(
        async (isHardRefresh) => {
            const response = await PostService.getAll(limit, page);
            isHardRefresh
                ? setPosts(response.data) :
                setPosts([...posts, ...response.data]);
            setPostsCount(response.totalCount);
            setTotalPages(getPageCount(response.totalCount, limit));
        }
    );

    useObserver(lastElement, page < totalPages, isLoading, () => {
        isEndlessScroll && setPage(page + 1);
    });

    useEffect(() => {
        if (isEndlessScroll) {
            fetchData(false);
        } else {
            fetchData(true);
        }
    }, [page, limit, isEndlessScroll]);

    const changeLimit = (newLimit) => {
        newLimit = parseInt(newLimit);

        if (isEndlessScroll) {
            setLimit(newLimit);
            setPosts([]);
            setPage(1);
            return;
        }

        if (newLimit === totalPages) {
            setLimit(newLimit);
            setPage(1);
            return;
        }
        const lastPost = page * limit;
        const newPage = Math.ceil(lastPost / newLimit);
        setLimit(newLimit);
        setPage(newPage);
    }

    /**
     * Change endless scroll
     *
     * @param endlessScroll {boolean|string}
     */
    const changeEndlessScroll = (endlessScroll) => {
        if (typeof endlessScroll === 'string') {
            endlessScroll = endlessScroll === 'true';
        }

        if (endlessScroll) {
            setPosts([]);
            setPage(1);
        }

        setIsEndlessScroll(endlessScroll);
    }

    const createPost = (post) => {
        setPosts([...posts, post]);
    };

    const removePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    return (
        <div className="App">
            <Button onClick={() => setModal(true)}>Create Post</Button>

            <Button onClick={fetchData}>Fetch Posts</Button>

            <hr />

            <PostFilter filter={filter} setFilter={setFilter} />
            <Select
                defaultValue={"Count of posts"}
                value={limit}
                onChange={e => changeLimit(e.target.value)}
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 25, name: "25" },
                    { value: 50, name: "50" },
                    { value: postsCount, name: `Show all (${postsCount})` }
                ]}
            />
            <Select
                defaultValue={"Endless scroll"}
                value={isEndlessScroll}
                onChange={e => changeEndlessScroll(e.target.value)}
                options={[
                    { value: false, name: "Off" },
                    { value: true, name: "On" },
                ]}
            />

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>

            <hr />

            {error && <Error error={error} />}

            <PostList
                removePost={removePost}
                title={"Post List 1"}
                posts={searchedAndSortedPosts}
            />
            <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>

            {isLoading && <Loader center={true} />}

            {!isEndlessScroll && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    setCurrentPage={setPage}
                />
            )}
        </div>
    );
}

export default PostListPage;
