import Image from "next/image";
import React from "react";
import styles from "../../app/Product/[singleProduct]/singleProduct.module.css";
import caruselStyles from "../../Components/Product/ProductCarusel.module.css";
import ImageModal from "../Modal/ImageModal";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Carusel from "../Carusel/Carusel";
import InformationBar from "./InformationBar";
import ProductAttribute from "./ProductAttribute";
import { NonexistentNotificationToast } from "./Toast";

const NonExistentSingleCard = ({ data, category }) => {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.dataProductContainer}>
          <div className={styles.descriptionContainer}>
            <div className={styles.nameContainer}>
              <p className={styles.name}>{data.name}</p>
              <p className={styles.nameb}>{data.nameB}</p>

              <div className={styles.commentContainer}>
                <span className={styles.comment}>نظرات کاربران</span>
                <span className={styles.numberComment}>0نظر</span>
              </div>
              <div className={styles.nonExistentContainer}>
                <div className={styles.line}></div>
                <div>
                  <span className={styles.non}>ناموجود</span>
                </div>
                <div className={styles.line}></div>
              </div>
              {data.attribute.length !== 0 ? (
                <div>
                  <h3 className={styles.mainFeatures}>ویژگی‌های اصلی</h3>
                  <div className={styles.attributeContainer}>
                    {data.attribute.map((item) => {
                      return <ProductAttribute Att={item} key={item.id}/>;
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.prdImage}>
                <Image
                  src={data.indexImageUrl}
                  width={370}
                  height={370}
                  alt={data.name}
                  priority
                />
              </div>
              <div className={styles.otherImage}>
                <ImageModal
                  images={data.images}
                  namePrd={data.name}
                  mainImage={data.indexImageUrl}
                />
              </div>
            </div>
          </div>

          <div className={styles.NonAvailabilityContainer}>
            <div className={styles.NonAvailabilityChild}>
              <div className={styles.DetailsNonExistentContainer}>
                <div className={styles.DetailsLine}></div>
                <div>
                  <span className={styles.DetailsNon}>ناموجود</span>
                </div>
                <div className={styles.DetailsLine}></div>
              </div>
              <div className={styles.DetailsText}>
                <span>این محصول در حال حاضر موجود نیست. می‌توانید </span>

                <span className={styles.substituteText}>
                  {" "}
                  از محصولات جایگزین
                </span>
                <span> در پایین کالا دیدن نمایید .</span>
              </div>

              <NonexistentNotificationToast />
            </div>
          </div>
        </div>

        {data.category === "هوآوی " || data.category === "آنر" ? null : (
          <div
            className={`${caruselStyles.caruselContainer} ${styles.singleProductCarusel}`}
          >
            <div className={caruselStyles.titleCarusel}>
              <p>برند مشابه</p>
              <Link
                href={`/brand/${data.category}`}
                className={caruselStyles.ShowAll}
              >
                <span> نمایش همه</span>
                <AiOutlineLeft className={caruselStyles.AiOutlineLeft} />
              </Link>
            </div>
            <Carusel data={category} />
          </div>
        )}

        <div className={styles.informationProductContainer}>
          <InformationBar Att={data.attribute} data={data} stock={0} />
        </div>
      </div>
    </main>
  );
};

export default NonExistentSingleCard;
