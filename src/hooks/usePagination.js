import {useMemo} from "react";

/**
 * Returns an array of pages in the form of [1, 2, 3, ...]
 *
 * @param {number} totalPages - Total number of pages
 * @returns {Array<number>} - Array of pages
 */
export const usePagination = ( totalPages ) => {
    const pagesArray = useMemo(() => {
        const pagesArray = [];
        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i);
        }
        return pagesArray
    }, [totalPages]);

    return pagesArray;
}