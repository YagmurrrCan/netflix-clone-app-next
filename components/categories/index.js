import React from "react";
import Link from "next/link";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import styles from "./categories.module.scss";

function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories
