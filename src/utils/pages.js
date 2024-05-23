/**
 * Calculates the number of pages based on the total number of elements and the number of elements per page
 *
 * @param {number} totalElements - Total number of elements
 * @param {number|boolean} elementsPerPage - Number of elements per page
 * @return {number} - Number of pages
 */
export const getPageCount = (totalElements, elementsPerPage) => {
    if (elementsPerPage < 0) {
        return 1;
    }
    if (elementsPerPage === false) {
        return 1;
    }
    return Math.ceil(totalElements / elementsPerPage);
}