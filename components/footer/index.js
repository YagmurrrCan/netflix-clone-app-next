import Link from 'next/link';
import React from 'react'

import styles from './footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ❤️ by Yağmur Can
        <span className={styles.terms}>
          <Link href="/terms">Terms of Use</Link>
        </span>
        <span className={styles.contact}>
          <Link href="/contact">Contact Us</Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;