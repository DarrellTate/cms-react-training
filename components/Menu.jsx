import Link from 'next/link';
import styles from '@styles/header.module.css'

const Menu = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
    </nav>
  )
}

export default Menu