import {useMemo} from "react";

export const useSortPosts = (posts, sortBy) => {

    const sortedPosts = useMemo(() => {
        if (sortBy === "") {
            return posts;
        }
        return [...posts].sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy]),
        );
    }, [posts, sortBy]);

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

export const useFilterPosts = (posts, filter) => {
    const sortedPosts = useSortPosts(posts, filter.sortBy);
    return useSearchPosts(sortedPosts, filter.query);
};
