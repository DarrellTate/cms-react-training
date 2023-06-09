'use client'
import Image from 'next/image';
import styles from '@styles/header.module.css';

// Nav
import { useState } from 'react';
import Link from 'next/link';

// favoriteContext
import { useFavoriteContext } from '@app/context/favoriteContext';

// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBoltLightning,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import Menu from './Menu';

const Header = () => {
    const { favoriteList } = useFavoriteContext();
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

  return (
    <header className={styles.header}>
        <Link href="/">
            <Image
                src='/assets/logo.svg'
                alt="app logo"
                height={53}
                width={53}
                className={`${styles.logo} ${styles.logoMobile}`}
                />

            <Image
                src='/assets/logo.svg'
                alt="app logo"
                height={106}
                width={106}
                className={`${styles.logo} ${styles.logoDesktop}`}
            />
        </Link>

        <div className={styles.headerRight}>

            {/* Mobile Nav */}
            <div className={styles.navMoblieContainer}>
                <Link href="/myfavorites">
                    <div className="favoriteCounter">
                        <FontAwesomeIcon className={styles.bolt} icon={faBoltLightning} />({favoriteList && favoriteList.length})
                    </div>
                </Link>
                <div
                    className={styles.navMobileToggle}
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={faBars} />

                    {
                        isMenuOpen && (
                            <div className={styles.navMobile}>
                                <Menu />
                            </div>
                        )
                    }
                </div>
            </div>
            
            {/* Desktop Nav */}
            <div className={styles.navDesktop}>
                <Menu />
                <Link href="/myfavorites">
                    <div className="favoriteCounter">
                        <FontAwesomeIcon
                            className={styles.bolt}
                            icon={faBoltLightning}
                        />My Favorites ({favoriteList && favoriteList.length})
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header