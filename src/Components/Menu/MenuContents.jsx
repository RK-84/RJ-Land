"use client";
import React, { useTransition } from "react";
import styles from "./MenuContents.module.css";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";

const MenuContents = ({ itemId }) => {
  const rout = useRouter();
  const [isPending, startTransition] = useTransition();

  const handlerClick = (props) => {
    startTransition(() => {
      rout.push(`/Product/categoryType/${props.name}/?class=${props.class}`);
    });
  };
  const Link = (url) => {
    startTransition(() => {
      rout.push(url);
    });
  };
  return (
    <>
      {isPending && <Loading />}
      {itemId === 1 ? (
        <nav className={`${styles.contentsContainer} ${styles.gap}`}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>
              <div
                onClick={() => Link("/Product/Class/mobile")}
                className={styles.headerContent}
              >
                موبایل
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "اپل", class: "mobile" })}
            >
              اپل
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "سامسونگ", class: "mobile" })}
            >
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "شیائومی", class: "mobile" })}
            >
              شیائومی
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                className={styles.headerContent}
                onClick={() => Link("/Product/Class/tablet")}
              >
                تبلت
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "اپل", class: "tablet" })}
            >
              اپل
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "سامسونگ", class: "tablet" })}
            >
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "شیائومی", class: "tablet" })}
            >
              شیائومی
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                className={styles.headerContent}
                onClick={() => Link("/Product/Class/smartWatch")}
              >
                ساعت هوشمند
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "اپل", class: "smartWatch" })}
            >
              اپل
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "سامسونگ", class: "smartWatch" })
              }
            >
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "شیائومی", class: "smartWatch" })
              }
            >
              شیائومی
            </div>
          </div>
        </nav>
      ) : null}

      {itemId === 2 ? (
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                className={styles.headerContent}
                onClick={() => Link("/Product/Class/laptop")}
              >
                لپ تاپ
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "مک بوک", class: "laptop" })}
            >
              مک بوک
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "msi", class: "laptop" })}
            >
              لپ‌ تاپ ام س آی
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "ایسوس", class: "laptop" })}
            >
              لپ‌ تاپ ایسوس
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                className={styles.headerContent}
                onClick={() => Link("/Product/Class/computer")}
              >
                کامپیوتر
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "Hp", class: "allInOne" })}
            >
              All in one
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "miniPc", class: "computer" })
              }
            >
              Mini pc
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "assembledCase", class: "computer" })
              }
            >
              کیس اسمبل شده
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                className={styles.headerContent}
                onClick={() => Link("/Product/Class/console")}
              >
                کنسول بازی
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "ps5", class: "console" })}
            >
              Ps5
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "ps4", class: "console" })}
            >
              Ps4
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "xbox", class: "console" })}
            >
              Xbox
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <div
                onClick={() => Link("/Product/Class/handsfree")}
                className={styles.headerContent}
              >
                هندزفری
              </div>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "اپل", class: "handsfree" })}
            >
              اپل
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "سامسونگ", class: "handsfree" })
              }
            >
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() =>
                handlerClick({ name: "شیائومی", class: "handsfree" })
              }
            >
              شیائومی
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handlerClick({ name: "انکر", class: "handsfree" })}
            >
              انکر
            </div>
          </div>
        </div>
      ) : null}

      {itemId > 2 ? (
        <div className={styles.Developing}>
          <div className={styles.notification}>
            <h3>وب سایت در حال توسعه هست</h3>
            <h4>ممنون از صبر و شکیبایی شما</h4>
          </div>
        </div>
      ) : null}
      <div></div>
    </>
  );
};

export default MenuContents;
