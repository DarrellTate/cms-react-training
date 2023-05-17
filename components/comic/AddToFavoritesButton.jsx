import React from 'react';
import styles from '@styles/comic/comic.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faBoltLightning
} from "@fortawesome/free-solid-svg-icons";


const AddToFavoritesButton = ({comic}) => {
  return (
      <button
        type='button'
        onClick={() => {
            console.log(`${comic.title} added to favorites`)
        }}
        className={styles.addToFavorites}
        >
            <FontAwesomeIcon className={styles.bolt} icon={faBoltLightning} />
        </button>
  )
}

export default AddToFavoritesButton