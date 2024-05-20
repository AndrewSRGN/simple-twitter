import {useMemo} from "react";

export const useSortPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        if (sort === "") {
            return posts;
        }
        return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort]),
        );
    }, [posts, sort]);

    return sortedPosts;
}

export const useSearchPosts = (posts, query) => {
    const searchedPosts = useMemo(() => {
        if (query === "") {
            return posts;
        }
        return posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase()),
        );
    }, [posts, query]);

    return searchedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortPosts(posts, sort);
    return useSearchPosts(sortedPosts, query);
}
