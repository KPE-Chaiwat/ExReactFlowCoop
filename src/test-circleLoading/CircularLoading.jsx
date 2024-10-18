import React from "react";
import styles from "./CircularLoading.module.css";

const CircularLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default CircularLoading;
