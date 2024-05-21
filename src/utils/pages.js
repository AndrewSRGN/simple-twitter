/**
 * Calculates the number of pages based on the total number of elements and the number of elements per page
 *
 * @param {number} totalElements - Total number of elements
 * @param {number} elementsPerPage - Number of elements per page
 * @return {number} - Number of pages
 */
export const getPageCount = (totalElements, elementsPerPage) => {
    return Math.ceil(totalElements / elementsPerPage);
}