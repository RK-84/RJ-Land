import React from "react";
import styles from "./ProductAttribute.module.scss";
const ProductAttribute = ({ Att }) => {
  return (
    <aside>
      <div className={styles.attContainer}>
        <div className={styles.attChild}>
          <span className={styles.attMainText}>سیستم عامل :</span>

          <span className={styles.attName}>{Att.operatingsystem}</span>
        </div>

        <div className={styles.attChild}>
          <span className={styles.attMainText}>سایز صفحه نمایش :</span>

          <span className={styles.attName}>{Att.screensize}</span>
        </div>

        <div className={styles.attChild}>
          <span className={styles.attMainText}>تراشه:</span>

          <span className={styles.attName}>{Att.chip}</span>
        </div>

        <div className={styles.attChild}>
          <span className={styles.attMainText}>پردازنده‌:</span>

          <span className={styles.attName}>{Att.processor}</span>
        </div>

        <div className={styles.attChild}>
          <span className={styles.attMainText}>حافظه داخلی:</span>

          <span className={styles.attName}>{Att.internalmemory}</span>
        </div>

        <div className={styles.attChildEnd}>
          <span className={styles.attMainText}>حافظه رم:</span>

          <span className={styles.attName}>{Att.ram}</span>
        </div>
      </div>
    </aside>
  );
};

export default ProductAttribute;
