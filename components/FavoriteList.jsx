'use client'

import FavoriteItem from '@components/favorite/FavoriteItem';
import styles from '@styles/favorite/favorite.module.css';

// FavoriteContext
import { useFavoriteContext } from '@app/context/favoriteContext';

const FavoriteList = () => {
    const { favorites } = useFavoriteContext();

    let currentFavorites;

    if (localStorage && localStorage.getItem('currentFavorites')) {
        currentFavorites = JSON.parse(localStorage.getItem('currentFavorites'));
    }
    
    return (
        <div className={styles.favoritesListGrid}>
            <div className={styles.inner}>
                {
                    currentFavorites.length
                    ? <h2 className={styles.title}>Favorites</h2>
                    : <h2 className={styles.title}>No Favorites</h2>
                }

                {
                    currentFavorites && currentFavorites.map(comic => {
                        return(
                            <FavoriteItem key={comic.id} className={styles.favorites} comic={comic} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FavoriteList