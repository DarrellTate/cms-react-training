import { useEffect, useState } from 'react';

import styles from '@styles/comic/comic.module.css';

// FavoriteContext
import { useFavoriteContext } from '@app/context/favoriteContext';

// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

const AddToFavoritesButton = ({comic}) => {

  const { setFavoriteList } = useFavoriteContext();
  const [ isFavorited, setIsFavorited ] = useState(false);

  const addComic = () => {
    setFavoriteList(prev => {
      let newFavorites = [...prev];
      if (prev.includes(comic)){
        let comicIndex = prev.findIndex(favorite => favorite.id === comic.id);
        newFavorites.splice(comicIndex, 1);
        localStorage.setItem("currentFavorites", JSON.stringify(newFavorites));
        setIsFavorited(false);
        return newFavorites;
      }
      newFavorites = [...prev, comic];
      setIsFavorited(true);
      localStorage.setItem("currentFavorites", JSON.stringify(newFavorites))
      return newFavorites;
    })
  }

  useEffect(() => {
    setFavoriteList((prev) => {
      if(!prev.includes(comic)) {
        setIsFavorited(false);
      }
      return prev;
    })
  })

  // render the button
  return (
    <button
      type='button'
      onClick={addComic}
      className={`${styles.addToFavorites} ${isFavorited && styles.favorited}`}
    >
      <FontAwesomeIcon
        className={styles.bolt}
        icon={faBoltLightning}
      />
    </button>
  )
}

export default AddToFavoritesButton