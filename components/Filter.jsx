'use client'
import { useEffect, useState } from 'react';

// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faBoltLightning } from "@fortawesome/free-solid-svg-icons";

import FavoriteList from "@components/FavoriteList";
import { useFilterContext } from '@app/context/filterContext';
import styles from "@styles/filter.module.css"

const Filter = () => {

  const [ showFavorites, setShowFavorites ] = useState(false);
  const [ showFilters, setShowFilters ] = useState(false);

  // define the selected characters/creators from useFilterContext;
  const {
      characterFilter,
      selectedCharacter,
      setSelectedCharacter,

      creatorFilter,
      selectedCreator,
      setSelectedCreator,
} = useFilterContext();

  const selectCharactor = (e) => {
    e.preventDefault();
    setSelectedCharacter(e.target.value)
  }

  const selectCreator = (e) => {
    e.preventDefault();
    setSelectedCreator(e.target.value)
  }

  useEffect(() => {
    // console.log('selected charactor is: ', selectedCharacter)
  }, [selectedCharacter])

  useEffect(() => {
    // console.log('selected creator is: ', selectedCreator)
  }, [selectedCreator])

  return (
    <div className={`${styles.filterContainer} ${styles.hideOnDesktop}`}>
        <div className={styles.labelContainer} >
            {/* filters label */}
            <div
                className={styles.iconLabel}
                onClick={() => setShowFilters(prev => !prev)}
            >
                Filter <FontAwesomeIcon icon={faFilter} className={`${styles.icon}`} />
            </div>

            {/* favorites label */}
            <div
                className={`${styles.iconLabel} ${styles.toggleFilter}` }
                onClick={() => setShowFavorites(prev => !prev)}
            >

            {(
                <div className={`${styles.iconLabel} ${styles.toggleFavorites}`}>
                    { !showFavorites && ( <span>Show Favorites</span> ) }
                    { showFavorites && ( <span>Hide Favorites</span> ) }
                    <FontAwesomeIcon icon={faBoltLightning} className={`${styles.icon}`}/>
                </div>
            )}
            </div>
        </div>

        <div className={`${styles.filters} ${showFilters && styles.showFiltersOnMobile}`}>
            <select
                className={styles.pathFilter}
                onChange={(e) => selectCharactor(e)}
            >
                {
                    characterFilter.map(char => {
                        return (
                            <option
                                className={styles.pathFilterOption}
                                key={char.value}
                                value={char.value}
                            >
                                {char.text}
                            </option>
                        )
                    })
                }
            </select>

            <select
                className={styles.pathFilter}
                onChange={(e) => selectCreator(e)}
            >
                {
                    creatorFilter.map(creator => {
                        return (
                            <option
                                className={styles.pathFilterOption}
                                key={creator.value}
                                value={creator.value}
                            >
                                {creator.text}
                            </option>
                        )
                    })
                }
            </select>
        </div>

        <div className={styles.toggledContent}>
            { showFavorites && (
                <>
                    <FavoriteList />
                    <button
                        className={styles.hideFavorites}
                        onClick={() => setShowFavorites(false)}
                    >
                        Hide Favorites
                        <FontAwesomeIcon
                            icon={faBoltLightning}
                            className={`${styles.icon}`}
                        />
                    </button>
                </>
            ) }
        </div>
    </div>
  )
}

export default Filter