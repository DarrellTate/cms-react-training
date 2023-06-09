import AddToFavoritesButton from './AddToFavoritesButton';
import ComicDetail from './ComicDetail';
import Image from 'next/image';
import styles from '@styles/comic/comic.module.css';


const ComicItem = (comic) => {
    const currentComic = comic.comic;
    
    return (
    <div className={styles.comicItem}>
        <div className={styles.imageCont}>
            <Image
                src={`${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`}
                width={125}
                height={188}
                alt={currentComic.title}
                className={`${styles.image} ${styles.smallImage}`}
                />

            <Image
                src={`${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`}
                width={183}
                height={276}
                alt={currentComic.title}
                className={`${styles.image} ${styles.largeImage}`}
            />


            <AddToFavoritesButton comic={currentComic} />
        </div>

        <ComicDetail comic={currentComic} />
    </div>
  )
}

export default ComicItem
