"use client";
import React from "react";
import Image from "next/image";
import styles from "./HomeImages.module.scss";
import Link from "next/link";
import { BsPatchCheck } from "react-icons/bs";
import { useRouter } from "next/navigation";

export const HomeImagesFirstSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.id === 1;
  });
  const params = new URL(
    "https://rjland.vercel.app/Product/categoryType/سامسونگ/?class=mobile"
  );
  return (
    <div>
      <Link href={params}>
        <div className={styles.FirstSectionContainer}>
          <Image
            priority
            className={styles.homeImage}
            fill
            alt={result[0].name}
            src={result[0].indexImageUrl}
            sizes="100%"
          />
        </div>
      </Link>
    </div>
  );
};

export const HomeImagesSecondSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.bestMobile === true;
  });
  const rout = useRouter();

  const clickHandler = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=mobile`);
  };
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.bestMobile}>برترین‌های موبایل</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
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
    </div>
  );
};

export const HomeImagesThirdSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.id === 21;
  });
  const params = new URL(
    "https://rjland.vercel.app/Product/categoryType/شیائومی /?class=mobile"
  );
  return (
    <div>
      <Link href={params}>
        <div className={styles.FirstSectionContainer}>
          <Image
            priority
            className={styles.homeImage}
            fill
            alt={result[0].name}
            sizes="100%"
            src={result[0].indexImageUrl}
          />
        </div>
      </Link>
    </div>
  );
};
export const HomeImagesFourthSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.bestLaptop === true;
  });
  const rout = useRouter();

  const clickHandler = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=laptop`);
  };
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.bestMobile}>برترین‌های لپ‌تاپ</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => clickHandler(item.name)}
              className={styles.SecondSection}
            >
              <Image
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
    </div>
  );
};

export const HomeImagesFifthSection = ({ images }) => {
  let result1 = images.filter((item) => {
    return item.id === 2;
  });
  let result2 = images.filter((item) => {
    return item.id === 3;
  });

  const params = new URL(
    "https://rjland.vercel.app/Product/categoryType/اپل /?class=handsfree"
  );
  return (
    <div className={`${styles.FifthSectionContainer} `}>
      <Link href={params} className={styles.FifthSection}>
        <Image
          className={styles.FifthHomeImage}
          fill
          alt={result1[0].name}
          sizes="100%"
          src={result1[0].indexImageUrl}
        />
      </Link>
      <Link href="Product/Class/console" className={styles.FifthSection}>
        <Image
          className={styles.FifthHomeImage}
          fill
          alt={result2[0].name}
          sizes="100%"
          src={result2[0].indexImageUrl}
        />
      </Link>
    </div>
  );
};

export const HomeImagesSixthSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.bestHandFree === true;
  });

  const rout = useRouter();

  const clickHandler = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=handsfree`);
  };
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.bestMobile}>برترین‌های هندزفری</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => clickHandler(item.name)}
              className={styles.SecondSection}
            >
              <Image
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
    </div>
  );
};

export const HomeImagesSeventhSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.id === 4 || item.id === 5;
  });
  const rout = useRouter();

  const clickHandler = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=laptop`);
  };
  return (
    <div>
      <div className={`${styles.FifthSectionContainer} ${styles.double} `}>
        {result.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.FifthSection}
              onClick={() => clickHandler(item.name)}
            >
              <Image
                sizes="100%"
                className={styles.FifthHomeImage}
                fill
                alt={item.name}
                src={item.indexImageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesEighthSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.selectedBrands === true;
  });

  return (
    <div className={styles.EighthSectionContainer}>
      <div className={styles.selectedBrandsContainer}>
        <div className={styles.selectedBrands}>
          <BsPatchCheck className={styles.Check} />
          <h3>برندهای منتخب</h3>
        </div>
        {result.map((item) => {
          return (
            <Link href={`/brand/${item.name}`} key={item.id}>
              <div className={styles.EighthSection}>
                <Image
                  width={130}
                  sizes="100%"
                  height={100}
                  alt={item.name}
                  src={item.indexImageUrl}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesNinthSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.digital === true;
  });

  return (
    <div className={styles.mainContainerNinthSection}>
      <h3 className={styles.title}>کالا های دیجیتال </h3>

      <div className={styles.DigitalContainer}>
        {result.map((item) => {
          return (
            <div key={item.id}>
              {item.id === 24 ||
              item.id === 25 ||
              item.id === 26 ||
              item.id === 27 ||
              item.id === 28 ? (
                <Link href={`/Product/Class/${item.linkName}`}>
                  <div className={styles.Digital}>
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
                </Link>
              ) : (
                <Link href={`/brand/${item.linkName}`}>
                  <div className={styles.Digital}>
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
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesTenthSection = ({ images }) => {
  let result1 = images.filter((item) => {
    return item.id === 22;
  });
  let result2 = images.filter((item) => {
    return item.id === 23;
  });
  const rout=useRouter()
  const clickHandler = (props) => {
    rout.push(`/Product/Class/laptop/?tl=${props}`);
  };
  return (
    <div>
      <div className={`${styles.FifthSectionContainer} ${styles.double} `}>
        <div
          className={styles.FifthSection}
          onClick={() => clickHandler("Xgaming")}
        >
          <Image
            sizes="100%"
            className={styles.FifthHomeImage}
            fill
            alt={result1[0].name}
            src={result1[0].indexImageUrl}
          />
        </div>

        <Link href="/Product/Class/handsfree" className={styles.FifthSection}>
          <Image
            className={styles.FifthHomeImage}
            sizes="100%"
            fill
            alt={result2[0].name}
            src={result2[0].indexImageUrl}
          />
        </Link>
      </div>
    </div>
  );
};

export const HomeImagesEleventhSection = ({ images }) => {
  let result = images.filter((item) => {
    return item.linkName === "weblog";
  });

  return (
    <div className={styles.MainEleventhSectionContainer}>
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
    </div>
  );
};
