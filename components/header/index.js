import React from 'react'
import Link from 'next/link'

import { FaPlayCircle } from "react-icons/fa";

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> NETFLIX
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">HOME</Link>
          <Link href="#">MOVIES</Link>
          <Link href="#">SERIES</Link>
          <Link href="#">KIDS</Link>
          <Link href="#">MY LIST</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header ;