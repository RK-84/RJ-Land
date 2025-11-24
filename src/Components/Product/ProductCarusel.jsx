import React, { Suspense } from "react";
import styles from "./ProductCarusel.module.scss";
import Carusel from "../Carusel/Carusel";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { FaBloggerB } from "react-icons/fa";
import * as HomeImages from "./HomeImages";
import { TransitionWrapper } from "../Loading/TransitionWrapper";

const ProductCarusel = ({ data, homeImagesData }) => {
  let result = data.filter((item) => {
    return item.flagBearer === true && item.stock !== 0;
  });
  let result2 = data.filter((item) => {
    return item.type.includes("laptop") && item.stock !== 0;
  });
  let result3 = data.filter((item) => {
    return item.type.includes("computer") && item.stock !== 0;
  });
  let result4 = data.filter((item) => {
    return item.type.includes("console") && item.stock !== 0;
  });
  let result5 = data.filter((item) => {
    return item.bestSelling === true && item.stock !== 0;
  });
  const bestMobileImages = homeImagesData.filter((item) => {
    return item.bestMobile === true;
  });
  const bestLaptopImages = homeImagesData.filter((item) => {
    return item.bestLaptop === true;
  });
  const bestHandFreeImages = homeImagesData.filter((item) => {
    return item.bestHandFree === true;
  });
  return (
    <div>
      <aside className={styles.SingleImage_homeImages}>
        <HomeImages.SingleImage
          imageUrl={homeImagesData[0].indexImageUrl}
          name={homeImagesData[2].name}
          url="categoryType/سامسونگ/?class=mobile"
          specify={true}
        />
      </aside>

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>پرچمداران هوشمند</p>
            <TransitionWrapper>
              <Link
                href="/Product/specialCategory/flagBearer"
                className={styles.ShowAll}
              >
                <span>نمایش همه</span>
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </TransitionWrapper>
          </div>

          <Carusel data={result} />
        </div>
      </Suspense>

      <Suspense>
        <HomeImages.TheBest
          images={bestMobileImages}
          title="برترین‌های موبایل"
          type="mobile"
        />
        <aside className={styles.homeImageContainer_one}>
          <HomeImages.SingleImage
            imageUrl={homeImagesData[21].indexImageUrl}
            name={homeImagesData[2].name}
            url="Class/laptop/?tl=Xgaming"
          />
          <HomeImages.SingleImage
            imageUrl={homeImagesData[22].indexImageUrl}
            name={homeImagesData[2].name}
            url="Class/handsfree"
          />
        </aside>
      </Suspense>

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <span>
              {" "}
              لپ‌ تاپ‌ها در
              <span className={styles.rjLand}>ار جی لند</span>
            </span>
            <TransitionWrapper>
              <Link href="/Product/Class/laptop" className={styles.ShowAll}>
                <span> نمایش همه</span>
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </TransitionWrapper>
          </div>
          <Carusel data={result2} />
        </div>
      </Suspense>

      <Suspense>
        <HomeImages.TheBest
          images={bestLaptopImages}
          title="برترین‌های لپ‌تاپ"
          type="laptop"
        />
        <aside className={styles.homeImageContainer_one}>
          <HomeImages.SingleImage
            imageUrl={homeImagesData[1].indexImageUrl}
            name={homeImagesData[2].name}
            url="categoryType/اپل/?class=handsfree"
          />
          <HomeImages.SingleImage
            imageUrl={homeImagesData[2].indexImageUrl}
            name={homeImagesData[2].name}
            url="Class/console"
          />
        </aside>
      </Suspense>

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>کامپیوتر و تجهیزات</p>
            <TransitionWrapper>
              <Link href="/Product/Class/computer" className={styles.ShowAll}>
                <span> نمایش همه</span>
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </TransitionWrapper>
          </div>
          <Carusel data={result3} />
        </div>
      </Suspense>

      <Suspense>
        <HomeImages.TheBest
          images={bestHandFreeImages}
          title="برترین‌های هندزفری"
          type="handsfree"
        />

        <aside className={styles.homeImageContainer_one}>
          <HomeImages.SingleImage
            imageUrl={homeImagesData[3].indexImageUrl}
            name={homeImagesData[2].name}
            url="categoryType/msi/?class=laptop"
          />
          <HomeImages.SingleImage
            imageUrl={homeImagesData[4].indexImageUrl}
            name={homeImagesData[2].name}
            url="categoryType/ایسوس/?class=laptop"
          />
        </aside>
        <HomeImages.Brands images={homeImagesData} />
      </Suspense>

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <span>
              تجربه گیم با
              <span className={styles.rjLand}>ار جی لند</span>
            </span>
            <TransitionWrapper>
              <Link href="/Product/Class/console" className={styles.ShowAll}>
                <span> نمایش همه</span>
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </TransitionWrapper>
          </div>
          <Carusel data={result4} />
        </div>
      </Suspense>

      <Suspense>
        <HomeImages.DigitalGoods images={homeImagesData} />
        <div className={styles.SingleImage_homeImages}>
          <HomeImages.SingleImage
            imageUrl={homeImagesData[20].indexImageUrl}
            name={homeImagesData[2].name}
            url="categoryType/شیائومی/?class=mobile"
            specify={true}
          />
        </div>
      </Suspense>

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>پر فروش ترین ها</p>
            <TransitionWrapper>
              <Link
                href="/Product/specialCategory/bestSelling"
                className={styles.ShowAll}
              >
                <span> نمایش همه</span>
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </TransitionWrapper>
          </div>
          <Carusel data={result5} />
        </div>
      </Suspense>

      <div className={`${styles.caruselContainer} ${styles.weblogContainer}`}>
        <div className={styles.titleCarusel}>
          <p>وبلاگ</p>{" "}
          <div className={styles.weblog}>
            <FaBloggerB className={styles.BloggerB} />
            <p className={styles.weblogTitle}>بزودی در ار جی لند</p>
          </div>
          <Link href="" className={styles.ShowAll}>
            <span> نمایش بیشتر در بلاگ</span>
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <HomeImages.BlogImages images={homeImagesData} />
      </div>
    </div>
  );
};

export default ProductCarusel;
