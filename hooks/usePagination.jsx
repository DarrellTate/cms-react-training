'use client'
import { useEffect, useState } from "react";

export const usePagination = ({

}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(15);
    const comics = comicsData;

    // First page resets when user changes page or filter is changed
    useEffect(() => {
        setCurrentPage(1);
    }, [comics]);

    // Here we are getting the current comics
    const lastComicIndex = currentPage * productsPerPage;
    const firstComicIndex = lastComicIndex - productsPerPage;
    const disableRightPagination = lastComicIndex < comics.length;

    // Map through currentComics instead of comics
    const currentComics = comics.slice(
        firstComicIndex,
        lastComicIndex
    );
    // returning the variables defined so they can be used in the comic grid
    return {

    };
};