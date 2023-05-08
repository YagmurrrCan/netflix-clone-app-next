import Link from 'next/link';
import React from 'react'

import styles from './footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/YagmurrrCan" target="_blank">
        Yağmur Can
      </Link>
    </footer>
  );
}

export default Footer