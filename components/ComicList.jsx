'use client'

import { useState, useEffect } from 'react';

// requires a hash
import md5 from "md5";

import ComicItem from '@components/comic/ComicItem';
import Pagination from './comicGrid/Pagination';
import styles from '@styles/comic-grid.module.css';

import { usePagination } from '@hooks/usePagination';
import { useFilterContext } from '@app/context/filterContext';

const ComicList = () => {
    const [comics, setComics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // const {
    //     currentPage,
    //     setCurrentPage,
    //     disableRightPagination,
    //     firstComicIndex,
    //     lastComicIndex,
    //     currentComics,
    // } = usePagination(context.comics);

    let apiURL = 'http://gateway.marvel.com/v1/public/comics';

    const { newPath } = useFilterContext();
    if (newPath.length) {
        apiURL = newPath;
    }

    const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC;
    const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE;

    const now = Date.now();
    
    let params = {
        apikey: publicKey,
        ts: now,
        hash: md5(now + privateKey + publicKey)
    }

    let fetchParams = `?apikey=${ params.apikey }&ts=${ params.ts }&hash=${ params.hash }`
    let fetchURL = `${apiURL}${fetchParams}`
    
    // Fetch Comics from the API
    useEffect(() => {
        // need to re-define params because the newPath includes the "?"
        // so we need to strip out the extra "?"
        if (newPath.length) {
            fetchParams = `apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
        }
        fetchURL =
            `${apiURL}${fetchParams}`
            
        const fetchData = async () => {
            try {
                const res = await fetch(fetchURL);
                const data = await res.json();
                setComics(data?.data?.results)
                setIsLoading(false);
            } catch (error){
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [newPath])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error occured: {error.message}</div>
    }

    // Return Comics
    return (
        <div className={styles.grid}>
            {comics && comics.map(
                comic => <ComicItem key={comic.id} comic={comic} className="styles.item"/>
            )}
            {
                (comics === undefined || comics.length === 0) && (
                    <h1 className={styles.noComics}>No comics found. Please try a different selection.</h1>
                )
            }
            <Pagination
                range={{
                    start: 0,
                    end: 15,
                }}
            />
        </div>
    )
}

export default ComicList