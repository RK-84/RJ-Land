"use client"
import React, { useTransition } from "react";
import styles from "./HomeImages.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsPatchCheck } from "react-icons/bs";
import Loading from "../Loading/Loading";

export const SingleImage = ({ imageUrl,name, url, specify }) => {
  const rout = useRouter();
  const [isPending, startTransition] = useTransition();
  const clickHandler = () => {
    startTransition(() => {
      rout.push(`/Product/${url}`);
    });
  };
  return (
    <>
      {isPending && <Loading />}
      <div onClick={clickHandler} className={styles.ImageContainer}>
        <Image
          className={specify ? styles.LongImage : styles.Image}
          fill
          alt={name}
          sizes="100%"
          priority
          src={imageUrl}
        />
      </div>
    </>
  );
};

export const TheBest = ({ images, type, title }) => {
  const rout = useRouter();
  const [isPending, startTransition] = useTransition();
  const clickHandler = (linkName) => {
    startTransition(() => {
      rout.push(`/Product/categoryType/${linkName}/?class=${type}`);
    });
  };
  return (
    <aside className={styles.mainContainer}>
      {isPending && <Loading />}
      <h3 className={styles.bestMobile}>{title}</h3>

      <div className={styles.SecondSectionContainer}>
        {images.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => clickHandler(item.name)}
              className={styles.SecondSection}
            >
              <Image
                priority
                className={styles.SecondHomeImage}
                width={180}
                height={180}
                alt={item.name}
                sizes="100%"
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export const Brands = ({ images }) => {
  let result = images.filter((item) => {
    return item.selectedBrands === true;
  });
  const rout = useRouter();
  const [isPending, startTransition] = useTransition();
  const clickHandler = (name) => {
    startTransition(() => {
      rout.push(`/Product/categoryType/${name}`);
    });
  };

  return (
    <section className={styles.BarndsContainer}>
      {isPending && <Loading />}
      <div className={styles.BrandsChild}>
        <div className={styles.BrandTitle}>
          <BsPatchCheck className={styles.Check} />
          <h3>برندهای منتخب</h3>
        </div>
        {result.map((item) => {
          return (
            <div
              onClick={() => clickHandler(item.name)}
              className={styles.Brand}
              key={item.id}
            >
              <Image
                width={130}
                sizes="100%"
                height={100}
                alt={item.name}
                src={item.indexImageUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const DigitalGoods = ({ images }) => {
  let result = images.filter((item) => {
    return item.digital === true;
  });
  const rout = useRouter();
  const [isPending, startTransition] = useTransition();
  const clickHandler = (url) => {
    startTransition(() => {
      rout.push(url);
    });
  };
  return (
    <section className={styles.DigitalGoodsContainer}>
      {isPending && <Loading />}
      <h3 className={styles.title}>کالا های دیجیتال </h3>
      <div className={styles.DigitalGoodsChild}>
        {result.map((item) => {
          return (
            <div key={item.id}>
              {item.id === 24 ||
              item.id === 25 ||
              item.id === 26 ||
              item.id === 27 ||
              item.id === 28 ||
              item.id === 29 ? (
                <div
                  onClick={() =>
                    clickHandler(`/Product/Class/${item.linkName}`)
                  }
                  className={styles.Digital}
                >
                  <Image
                    sizes="100%"
                    width={120}
                    height={120}
                    alt={item.name}
                    src={`/Digital/${item.indexImageUrl}`}
                  />

                  <div className={styles.textDigital}>
                    <span>{item.name}</span>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => clickHandler(`/Product/categoryType/${item.linkName}`)}
                  className={styles.Digital}
                >
                  <Image
                    width={120}
                    sizes="100%"
                    height={120}
                    alt={item.name}
                    src={`/Digital/${item.indexImageUrl}`}
                  />

                  <div className={styles.textDigital}>
                    <span>{item.name}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const BlogImages = ({ images }) => {
  let result = images.filter((item) => {
    return item.linkName === "weblog";
  });

  return (
    <article className={styles.MainEleventhSectionContainer}>
      <div className={styles.EleventhSectionContainer}>
        {result.map((item) => {
          return (
            <div key={item.id} className={styles.EleventhSection}>
              <Image
                className={styles.EleventhHomeImage}
                fill
                sizes="100%"
                alt={item.name}
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};
