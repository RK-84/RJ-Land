"use client";
import React, { useTransition } from "react";
import styles from "./Basket.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { useSelector } from "react-redux";
import { MdKeyboardArrowLeft } from "react-icons/md";
import BasketModal from "./BasketModal";
import EmptyBasket from "./EmptyBasket";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";
const Basket = () => {
  const data = useSelector((state) => state.ShoppingCart);
  const [isPending, startTransition] = useTransition();
  const rout = useRouter();
  const ClickHandler = () => {
    startTransition(() => {
      rout.push("/ShoppingCart");
    });
  };
  return (
  

      <section className={styles.ShoppingCartButtonContainer}>      {isPending && <Loading />}
        <div onClick={ClickHandler}>
          <div className={styles.ShoppingCartButton}>
            <RiShoppingCartLine className={styles.ShoppingCartIcon} />
            {data.totalCount === 0 ? null : (
              <span className={styles.basketTotalCount}>{data.totalCount}</span>
            )}
          </div>
        </div>

        <div className={styles.BasketModal}>
          {data.totalCount === 0 ? (
            <div className={styles.EmptyBasket}>
              <EmptyBasket />
            </div>
          ) : (
            <div className={styles.layerModalContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.yourShoppingCartTitle}>
                  <h3>سبد خرید شما</h3>
                  <span>
                    {data.length}
                    <span>عدد کالا</span>
                  </span>
                </div>
                <div>
                  <div onClick={ClickHandler} className={styles.viewCart}>
                    <p>مشاهده سبد خرید</p>
                    <MdKeyboardArrowLeft className={styles.leftIcon} />
                  </div>
                </div>
              </div>

              <div className={styles.layerModal}>
                <BasketModal data={data.items} totalCount={data.totalCount} />
              </div>
              <div
                onClick={ClickHandler}
                className={styles.orderRegistrationContainer}
              >
                <div className={styles.orderRegistration}>
                  <p>ثبت سفارش</p>
                  <span>|</span>
                  <span>
                    {data.totalAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span className={styles.toman}>تومان</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
  );
};

export default Basket;
