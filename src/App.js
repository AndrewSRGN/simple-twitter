import "./styles/App.css";
import React, {useEffect, useState} from "react";

import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {useFilterPosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import {useFetch} from "./hooks/useFetch";
import {getPageCount} from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({sortBy: '', query: ''});
    const [modal, setModal] = useState(false);

    const [fetchData, isLoading, error] = useFetch(
        async () => {
            const posts = await PostService.getAll(limit, page);
            setPosts(posts.data);
            setTotalPages(getPageCount(posts.totalCount, limit));
        }
    );

    const searchedAndSortedPosts = useFilterPosts(posts, filter);

    useEffect(() => {
        fetchData()
    }, [page]);

    const createPost = (post) => {
        setPosts([...posts, post]);
    };

    const removePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    return (
        <div className="App">
            <Button onClick={() => setModal(true)}>
                Create Post
            </Button>

            <Button onClick={fetchData}>
                Fetch Posts
            </Button>

            <hr />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>

            <hr />

            {error && <Error error={error} />}
            {isLoading
                ? <Loader center={true} />
                : <PostList
                    removePost={removePost}
                    title={"Post List 1"}
                    posts={searchedAndSortedPosts}
                />
            }

            <Pagination totalPages={totalPages}
                        currentPage={page}
                        setCurrentPage={setPage}/>

        </div>
    );
}

export default App;
