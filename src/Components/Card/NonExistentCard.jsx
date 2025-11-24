import React from "react";
import styles from "./NonExistentCard.module.scss";
import Image from "next/image";
const NonExistentCard = ({ product }) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <Image
          className={styles.PrdImage}
          alt={product.name}
          src={product.indexImageUrl}
          width={195}
          height={195}
        />

        <div className={`${styles.productNameContainer}`}>
          <p align="justify" className={`${styles.productName}`}>
            {" "}
            {product.name.substring(0, 60)}
            {product.name.length > 60 ? "..." : null}
          </p>
        </div>
      </div>

      <div className={styles.nonExistentContainer}>

        <div className={styles.line1}></div>
        <div>
        <span className={styles.non}>ناموجود</span>
        </div>
        <div className={styles.line2}></div>
       
      </div>
    </main>
  );
};

export default NonExistentCard;
