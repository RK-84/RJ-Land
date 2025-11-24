import React from "react";
import styles from "./Bill.module.css";
import { PurchaseRegistrationToast } from "../Product/Toast";
const Bill = ({ totalAmount, discountProducts  }) => {
  const totalSum = totalAmount - discountProducts;

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>صورتحساب</h3>
      <div className={styles.bill}>
        <div className={styles.offPrcentNumber}>
          <div className={styles.ProductPrice}>
            <p className={styles.ProductPriceText}>قیمت محصولات</p>
            <span className={styles.ProductPriceText}>
              
              {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span className={styles.toman}>تومان</span>

            </span>
          </div>
           <div className={styles.ProductPrice}>
            <p className={styles.productDiscountText}>تخفیف محصولات</p>
            <span className={styles.productDiscountText}>
              {discountProducts
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span className={styles.toman}>تومان</span>
            </span>
          </div>
          <div className={styles.ProductPrice}>
            <p className={styles.totalSumText}>جمع کل</p>
            <span className={styles.totalSumText}>
              {totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span className={styles.toman}>تومان</span>

            </span>
          </div>
        </div>
       <PurchaseRegistrationToast/>
      </div>
    </section>
  );
};

export default Bill;
