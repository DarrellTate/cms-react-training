import Image from 'next/image'
import styles from './page.module.css'

import ComicList from '@components/ComicItemList'

export default function Home() {
  return (
    <div>
      <ComicList />
    </div>
  )
}
