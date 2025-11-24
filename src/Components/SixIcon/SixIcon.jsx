import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import Image from "next/image";
import styles from "./SixIcon.module.scss";
import { TransitionWrapper } from "../Loading/TransitionWrapper";
async function getAllSixIcon() {
  const response = await repository.Get("SixIcon");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const SixIcon = async () => {
  const data = await getAllSixIcon();
  return (
    <section className={styles.mainContainer}>
      <div className={styles.sixIconContainer}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              {item.id === 6 ? (
                <div className={styles.sixIcon} key={item.id}>
                  <Image
                    width={80}
                    height={80}
                    src={`/SixIcon/${item.url}`}
                    alt={item.iconName}
                    priority
                  />
                  <p>{item.iconName}</p>
                </div>
              ) : (
                <TransitionWrapper
                  href={`/Product/specialCategory/${item.label}`}
                >
                  <div className={styles.sixIcon} key={item.id}>
                    <div className={styles.sixIconLink}>
                      <Image
                        width={80}
                        height={80}
                        src={`/SixIcon/${item.url}`}
                        alt={item.iconName}
                        priority
                      />
                      <p>{item.iconName}</p>
                    </div>
                  </div>
                </TransitionWrapper>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SixIcon;
