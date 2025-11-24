import React from "react";
import styles from "./EmptyShoppingCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiSealPercent } from "react-icons/pi";
import { MdOutlineChevronLeft } from "react-icons/md";
import { TransitionWrapper } from "../Loading/TransitionWrapper";
const EmptyShoppingCart = () => {
  return (
    <section className={styles.emptyBasketContainer}>
      <div className={styles.emptyBasketContent}>
        <Image
          priority
          src="/images/mptyBasket.png"
          alt="EmptyShoppingCart"
          height={300}
          width={300}
          className={styles.EmptyShoppingCartImg}
        />
        <h2>سبد خرید شما خالیه!</h2>
        <p>برای مشاهده تخفیف‌های امروز، روی لینک زیر کلیک کنید.</p>
        <div className={styles.mostDiscounts}>
          <PiSealPercent className={styles.percentIcon} />

          <TransitionWrapper href="/Product/specialCategory/incredibleOffers">
            <div className={styles.goToIncredibleOffer}>
              بیشترین تخفیف های امروز
            </div>
          </TransitionWrapper>
          <MdOutlineChevronLeft className={styles.lefyIcon} />
        </div>
      </div>
    </section>
  );
};

export default EmptyShoppingCart;
