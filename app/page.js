import styles from '@styles/page.module.css'

import ComicList from '@components/ComicList'
import FavoriteList from '@components/FavoriteList'
import Filter from '@components/Filter'
import Intro from '@components/Intro'

export default function Home() {
  return (
    <main>
      <div className={styles.layoutList}>

        <div className={styles.introContainer}>
          <Intro />
        </div>

        <div className={styles.filterContainer}>
          <Filter />
        </div>

        <div className={styles.comicsContainer}>
          <ComicList />
        </div>

        <div className={`${styles.hideOnMobile} ${styles.favoritesContainer}`}>
          <FavoriteList />
        </div>
      
      </div>
    </main>
  )
}
