import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child}>

      <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loading;
