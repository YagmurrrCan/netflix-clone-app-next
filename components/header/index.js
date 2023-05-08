import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/Logonetflix.png"
import { FaPlayCircle } from 'react-icons/fa';

import styles from './header.module.scss';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <Image src={logo} alt="Netflix Logo" width={200} height={80} />
          </a>
        </Link>       
        <nav className={styles.navigationMenu}>
          <Link href="/">HOME</Link>

          <div className={styles.moviesDropdown}>
            <a className={activeLink === 'movies' ? styles.activeLink : ''}>
              <Link href="/" legacyBehavior>
                <a className="dropbtn">MOVIES</a>
              </Link>
            </a>
            <div className={styles.dropdownContent}>
              <a
                onClick={() => {
                  handleClick('movies');
                  window.history.pushState({}, '', '/movies/top-rated');
                }}
              >
                TOP RATED
              </a>
              <a
                onClick={() => {
                  handleClick('movies');
                  window.history.pushState({}, '', '/movies/popular');
                }}
              >
                POPULAR
              </a>
              <Link href="/movies/upcoming">UPCOMING</Link>
            </div>
          </div>

          <Link href="/series">SERIES</Link>
          <Link href="/kids">KIDS</Link>
          <Link href="/my-list">MY LIST</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
