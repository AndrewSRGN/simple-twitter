import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList/PostList";
import PostForm from "../components/Form/PostForm/PostForm";
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
import { useScroll } from "../hooks/useScroll";
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
    const scrollPageRef = useRef();
    const lastElementRef = useRef();

    const [fetchData, isLoading, error] = useFetch(
        async () => {
            return await PostService.getAll(limit, page);
        }
    );

    const {isIntersecting} = useScroll(lastElementRef, scrollCallback, isEndlessScroll && !isLoading);

    /**
     * Get posts from API and set them to state in useEffect
     * dependencies - limit, page, isIntersecting
     */
    useEffect(() => {
        fetchData().then(response => {
            if (isEndlessScroll) {
                setPosts([...posts, ...response.data]);
            } else {
                setPosts(response.data);
            }
            setPostsCount(response.totalCount);
            setTotalPages(getPageCount(response.totalCount, limit));
        })
    }, [page, limit, isIntersecting]);

    /**
     * Scroll to top on page change
     * dependencies - page
     */
    useEffect(() => {
        if (!isEndlessScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [page]);


    /**
     * Infinite scroll callback
     * dependencies - isEndlessScroll
     */
    function scrollCallback() {
        if (isEndlessScroll && page < totalPages) {
            setPage((prevState) => prevState + 1);
        }
    }

    /**
     * Change limit
     *
     * @param newLimit{number|string}
     */
    const changeLimit = (newLimit) => {
        newLimit = parseInt(newLimit);

        if (isEndlessScroll) {
            setPosts([]);
            setLimit(newLimit);
            setPage(1);
            return;
        }

        if (!isEndlessScroll) {
            const lastPost = (page * limit) - 1;
            const newPage = Math.ceil(lastPost / newLimit);
            setLimit(newLimit);
            setPage(newPage);
        }
    }

    /**
     * Switch Infinity scroll and reset page
     * @param value {boolean|string}
     */
    const HandleSwitchEndlessScroll = (value) => {
        // Convert string from e.target.value to boolean
        if (typeof value === 'string') {
            value = value === 'true';
        }

        // Reset page if endless scroll
        if (page !== 1) {
            setPosts([]);
            // If endless scroll turn on - set page to 0, observer set page (page + 1)
            // IF endless scroll turn off - set page to 1, observer was turned off
            setPage( value ? 0 : 1);
        }

        setIsEndlessScroll(value);
    }

    const createPost = (post) => {
        setPosts([...posts, post]);
    };

    const removePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));

    };

    return (
        <div className="App" ref={scrollPageRef}>
            <Button onClick={() => setModal(true)}>Create Post</Button>

            <hr />

            <PostFilter filter={filter} setFilter={setFilter} />
            <Select
                defaultValue={"Count of posts"}
                value={limit}
                name="count-of-posts"
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
                name="endless-scroll"
                onChange={e => HandleSwitchEndlessScroll(e.target.value)}
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

            {isLoading && <Loader center={true} />}

            <div ref={lastElementRef} style={{ height: 20 }}></div>

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
