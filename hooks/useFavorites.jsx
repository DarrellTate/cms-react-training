import { useEffect, useState } from 'react';

const useFavorites = (initialFavorites, comic) => {

    // favoriteList is initialized as [] from ./context/favorites.jsx
    const [favoriteList, setFavoriteList] = useState(initialFavorites);

    // append to favorites
    const addComic = () => {
        setFavoriteList(prev => {
            if (prev !== undefined) {
                return prev.includes(comic) ? prev : prev.push(comic)
            } else {
                const newList = [];
                return newList.push(comic)
            }
        })
        console.log({favoriteList})
    };

    // todo remove from favorites

    // print out favorites
    const printComic = () => {
        console.log(favoriteList);
    }

    return [ favoriteList, { addComic, printComic } ];
}

export { useFavorites }