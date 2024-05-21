import React from 'react';

import './Pagination.css';
import {usePagination} from "../../../hooks/usePagination";

/**
 * Pagination
 * @param pagesArray<Array<number>>
 * @param currentPage<number>
 * @param setCurrentPage<Callback>
 * @returns {Element}
 * @constructor
 */
const Pagination = ({totalPages, currentPage, setCurrentPage}) => {

    const pagesArray = usePagination(totalPages);

    const handleClickOnNumber = (page) => {
        setCurrentPage(page);
    }

    const handleClickNext = () => {
        if (currentPage < pagesArray.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleClickPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <ul className="page">
            <li className="page__btn"
                onClick={handleClickPrev}>
                <span>{'<'}</span>
            </li>
            {pagesArray.map(page => (
                <li key={page}
                    onClick={() => handleClickOnNumber(page)}
                    className={"page__numbers" + (page === currentPage ? " page__numbers--active" : "")}>
                        {page}
                </li>
            ))}
            <li className="page__dots">...</li>
            <li className="page__btn"
                onClick={handleClickNext}>
                <span>{'>'}</span>
            </li>
        </ul>
    );
};

export default Pagination;