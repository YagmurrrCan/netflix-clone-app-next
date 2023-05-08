import React from "react";
import styles from "./skeleton.module.scss";

function Skeleton({ width, height }) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export default Skeleton;
