import Image from 'next/image'
import styles from '@styles/favorite/favoriteItem.module.css'

// FavoriteContext
import { useFavoriteContext } from '@app/context/favoriteContext';

const FavoriteItem = ({comic}) => {

    const { favoriteList, setFavoriteList } = useFavoriteContext();

    const removeComic = () => {
        setFavoriteList(prev => {
            const newFavorites = [...prev];

            // search through the array of favorites for the comic
            const comicIndex = prev.findIndex(favorite => favorite.id === comic.id);

            newFavorites.splice(comicIndex, 1);
            localStorage.setItem("currentFavorites", JSON.stringify(newFavorites));
            return newFavorites;
        })
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContent}>
                <Image
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    width={50}
                    height={75}
                    alt={comic.title}
                />
                <button className={styles.close} onClick={removeComic}>x</button>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>{comic.title}</h2>
                <span className={styles.issueNumber}>Issue: {comic.issueNumber}</span>
            </div>
        </div>
    )
}

export default FavoriteItem