import React from "react";
import styles from "./BasketModal.module.css";
import ShoppingCartItemCountB from "../ShoppingCart/ShoppingCartItemCountB";
import Image from "next/image";
import { BsShopWindow } from "react-icons/bs";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TransitionWrapper } from "../Loading/TransitionWrapper";

const BasketModal = ({ data }) => {
  return (
    <section>
      <div>
        {data.map((item) => {
          return (
            <div className={styles.basketModal} key={crypto.randomUUID()}>
              <div className={styles.rightSlide}>
                <div className={styles.productNameContainer}>
                  <div className={styles.incredibleOffersLogo}>
                    {item.incredibleOffers === true ? (
                      <pre className={styles.offerText}>
                        𝓡𝓙
                        <br />
                        𝕆𝕗𝕗
                        <i>％ </i>
                      </pre>
                    ) : null}
                  </div>
                  <p align="justify" className={styles.productName}>
                    {" "}
                    {item.name.substring(0, 45)}
                    {item.name.length > 45 ? "..." : null}
                  </p>
                </div>

                <div className={styles.sellerContainer}>
                  <div className={styles.seller}>
                    <BsShopWindow className={styles.iconShop} />
                    <span>{item.seller}</span>
                  </div>

                  <div className={styles.store}>
                    <TbBuildingWarehouse className={styles.iconShop} />
                    <span>موجود در انبار</span>
                    <span className={styles.sellerText}>{item.seller}</span>
                  </div>
                </div>

                <div className={styles.colorContainer}></div>

                <div className={styles.ShoppingCartItemCount}>
                  <ShoppingCartItemCountB PrdId={item.id} />
                </div>
              </div>

              <div className={styles.leftSlide}>
                <TransitionWrapper href={`/Product/${item.id}`}>
                    <div
                  className={styles.productImage}
                >
                  <Image
                    width={105}
                    height={105}
                    alt={item.name}
                    src={item.indexImageUrl}
                  />
                </div>
                </TransitionWrapper>
              
                {item.priceWithDiscount === 0 ? (
                  <div className={`${styles.priceContainer}`}>
                    <div className={styles.mainPrice}>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      <span className={styles.tomanOffIcon}>تومان</span>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.priceDetail}`}>
                    <div className={`${styles.offPrcentContainer}`}>
                      <div className={`${styles.offPrcent}`}>
                        <span>
                          {" "}
                          {Math.floor(
                            ((item.price - item.priceWithDiscount) /
                              item.price) *
                              100
                          )}
                        </span>
                        <span className={styles.prcent}>%</span>
                      </div>
                    </div>

                    <div className={`${styles.priceContainer}`}>
                      <div>
                        <div className={`${styles.price}`}>
                          {item.price
                            .toString()

                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <span className={styles.tomanIcon}>تومان</span>
                      </div>
                      <div>
                        <div className={styles.OffPrice}>
                          {item.priceWithDiscount
                            .toString()

                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>

                        <span className={styles.tomanOffIcon}>تومان</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BasketModal;
