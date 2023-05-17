import AddToFavoritesButton from './AddToFavoritesButton';
import ComicDetail from './ComicDetail';
import Image from 'next/image';
import styles from '@styles/comic/comic.module.css';


const ComicItem = ({comic}) => {
    return (
    <div className='comic-item'>
        <div className={styles.imageCont}>
            <Image
                src={comic.thumbnail}
                height={276}
                width={183}
                alt={comic.title}
                className={styles.image}
            />

            <AddToFavoritesButton comic={comic} />
        </div>

        <ComicDetail comic={comic} />
    </div>
  )
}

export default ComicItem
