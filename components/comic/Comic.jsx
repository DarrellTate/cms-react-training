import AddToFavoritesButton from './AddToFavoritesButton';
import ComicDetail from './ComicDetail';
import Image from 'next/image';

const ComicItem = ({comic}) => {
    return (
    <div className='comic-item'>
        <div className="image-cont">
            <Image
                src={comic.thumbnail}
                height={276}
                width={183}
                alt={comic.title}
            />

            <AddToFavoritesButton comic={comic} />
        </div>

        <ComicDetail comic={comic} />
    </div>
  )
}

export default ComicItem
