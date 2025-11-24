import React from "react";
import styles from "./SlideCarouselCard.module.css";
import Image from "next/image";
import Link from "next/link";

const SlideCarouselCard = ({ product }) => {
  
  return (
    <Link href={`/Product/${product.id}`} className={styles.LinkContainer}>
      <main className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
          {product.incredibleOffers === true ? (
            <Image
              className={`${styles.incredibleOfferImage}`}
              alt="IncredibleOffer"
              src="/IconImages/IncredibleOffer.png"
              width={110}
              height={15}
            />
          ) : null}
        </div>

        <Image
          className={styles.PrdImage}
          alt={product.name}
          src={product.indexImageUrl}
          width={165}
          height={165}
        />

        <p align="justify" className={`${styles.productName}`}>
          {" "}
          {product.name.substring(0, 45)}
          {product.name.length > 45 ? "..." : null}
        </p>

        {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            <div className={styles.mainPrice}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              <span className={styles.tomanOffIcon}>تومان</span>
            </div>
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.offPrcent}`}>
              {Math.floor(
                ((product.price - product.priceWithDiscount) / product.price) *
                  100
              )}
              %
            </div>

            <div className={`${styles.priceContainer}`}>
              <div className={styles.OffPriceContainer}>  
                <div className={styles.OffPrice}>
                  {product.priceWithDiscount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>

                <span className={styles.tomanOffIcon}>تومان</span>
              </div>
              <div>
                <div className={`${styles.price}`}>
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <span className={styles.tomanIcon}>تومان</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </Link>
    
  );
};

export default SlideCarouselCard;
