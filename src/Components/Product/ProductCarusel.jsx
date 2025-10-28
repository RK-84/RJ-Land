import React, { Suspense } from "react";
import styles from "./ProductCarusel.module.scss";
import Carusel from "../Carusel/Carusel";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { FaBloggerB } from "react-icons/fa";
import {
  HomeImagesEighthSection,
  HomeImagesEleventhSection,
  HomeImagesFifthSection,
  HomeImagesFirstSection,
  HomeImagesFourthSection,
  HomeImagesNinthSection,
  HomeImagesSecondSection,
  HomeImagesSeventhSection,
  HomeImagesSixthSection,
  HomeImagesTenthSection,
  HomeImagesThirdSection,
} from "./HomeImages";
import Loading from "../Loading/Loading";

const ProductCarusel = ({ data, homeImages }) => {
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

  return (
    <div>
      
      <HomeImagesFirstSection images={homeImages} id={1} linkName="سامسونگ"/>
      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>پرچمداران هوشمند</p>
            <Link
              href="/Product/specialCategory/flagBearer"
              className={styles.ShowAll}
            >
              <span>نمایش همه</span>
              <AiOutlineLeft className={styles.AiOutlineLeft} />
            </Link>
          </div>

          <Carusel data={result} />
        </div>
      </Suspense>
      <HomeImagesSecondSection images={homeImages} />
      <HomeImagesFirstSection images={homeImages} id={21} linkName="شیائومی"/>
      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <span>
              {" "}
              لپ‌ تاپ‌ها در
              <span className={styles.rjLand}>ار جی لند</span>
            </span>

            <Link href="/Product/Class/laptop" className={styles.ShowAll}>
              <span> نمایش همه</span>
              <AiOutlineLeft className={styles.AiOutlineLeft} />
            </Link>
          </div>
          <Carusel data={result2} />
        </div>
      </Suspense>

      <HomeImagesFourthSection images={homeImages} />
      <HomeImagesFifthSection images={homeImages} />
      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>کامپیوتر و تجهیزات</p>
            <Link href="/Product/Class/computer" className={styles.ShowAll}>
              <span> نمایش همه</span>
              <AiOutlineLeft className={styles.AiOutlineLeft} />
            </Link>
          </div>
          <Carusel data={result3} />
        </div>
      </Suspense>

      <HomeImagesSixthSection images={homeImages} />
      <HomeImagesSeventhSection images={homeImages} />
      <HomeImagesEighthSection images={homeImages} />
      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <span>
              تجربه گیم با
              <span className={styles.rjLand}>ار جی لند</span>
            </span>
            <Link href="/Product/Class/console" className={styles.ShowAll}>
              <span> نمایش همه</span>
              <AiOutlineLeft className={styles.AiOutlineLeft} />
            </Link>
          </div>
          <Carusel data={result4} />
        </div>
      </Suspense>

      <HomeImagesNinthSection images={homeImages} />

      <HomeImagesTenthSection images={homeImages} />

      <Suspense>
        <div className={styles.caruselContainer}>
          <div className={styles.titleCarusel}>
            <p>پر فروش ترین ها</p>
            <Link
              href="/Product/specialCategory/bestSelling"
              className={styles.ShowAll}
            >
              <span> نمایش همه</span>
              <AiOutlineLeft className={styles.AiOutlineLeft} />
            </Link>
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
        {}
        <HomeImagesEleventhSection images={homeImages} />
      </div>
    </div>
  );
};

export default ProductCarusel;
