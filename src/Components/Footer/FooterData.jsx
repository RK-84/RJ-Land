"use client";
import React, { useTransition } from "react";
import styles from "./FooterData.module.scss";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";

const FooterData = () => {
  const rout = useRouter();
  
  const mobileLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=mobile`);
  };
  const tabletLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=tablet`);
  };
  const laptopLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=laptop`);
  };
  const handsfreeLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=handsfree`);
  };

  const [isPending, startTransition] = useTransition();
  const Link = (url) => {
    startTransition(() => {
      rout.push(url);
    });
  };
  return (
    <aside>
      {isPending && <Loading/>}
      <div className={styles.footerData}>
        <div className={styles.rightSideFooter}>
          <div className={styles.Addresses}>
            <FiPhone className={styles.phoneIcon} />
            <span>تلفن :</span>
            <p>021-36355980</p>
          </div>
          <div className={styles.Addresses}>
            <CgMail className={styles.gmailIcon} />
            <span>ایمیل :</span>
            <p>rezj.iv @ gmail . com</p>
          </div>
        </div>

        <div className={styles.leftSideFooter}>
          <div className={styles.leftSideContent}>
            <h3>دسترسی سریع</h3>
            <ul>
              <li>
                <div onClick={() => Link("Product/categoryType/سامسونگ/?class=mobile")}>گوشی سامسونگ</div>
              </li>
              <li>
                <div onClick={() => Link("Product/categoryType/اپل/?class=mobile")}>گوشی آیفون</div>
              </li>
              <li>
                <div onClick={() => Link("Product/categoryType/شیائومی/?class=mobile")}>گوشی شیائومی</div>
              </li>
              <li>
                <div onClick={() => Link("/Product/Class/laptop")}>
                  قیمت لپ تاپ
                </div>
              </li>
              <li>
                <div onClick={() => Link("/Product/Class/handsfree")}>
                  هندزفری{" "}
                </div>
              </li>
              <li>
                <div onClick={() => Link("/Product/categoryType/ایسوس/?class=laptop") }>لپ تاپ ایسوس</div>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContent}>
            <h3>پرفروش ترین محصولات</h3>
            <ul>
              <li>
                <div onClick={() => Link("/Product/categoryType/سامسونگ/?class=tablet")}>تبلت سامسونگ</div>
              </li>
              <li>
                <div onClick={() =>Link("/Product/categoryType/مک بوک/?class=laptop")}>مک بوک</div>
              </li>
              <li>
                <div onClick={() => Link("/Product/Class/smartWatch")}>
                  ساعت هوشمند
                </div>
              </li>
              <li>
                <div onClick={() => Link("/Product/Class/console")}>کنسول</div>
              </li>
              <li>
                <div onClick={() => Link("/Product/categoryType/اپل/?class=handsfree") }>Airpods</div>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContentDisabled}>
            <h3>درباره ما</h3>
            <ul>
              <li>
                <p>اهداف و تعهدهای ما</p>
              </li>
              <li>
                <p>سوالات متداول</p>
              </li>
              <li>
                <p>فروشگاه های حضوری</p>
              </li>
              <li>
                <p>تماس با ما</p>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContentDisabled}>
            <h3>قوانین و مقررات</h3>
            <ul>
              <li>
                <p>قوانین و مقررات</p>
              </li>
              <li>
                <p>حریم خصوصی کاربران</p>
              </li>
              <li>
                <p>چرا آر جی لند؟</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.symbols}>
        <div className={styles.symbolImage}>
          <Image width={50} height={50} alt="" src="/Symbol/etemad.png" />
        </div>
        <div className={styles.symbolImage}>
          <Image
            className={styles.NationalSymbol}
            width={35}
            height={50}
            alt=""
            src="/Symbol/National Union.svg"
          />
        </div>
        <div className={styles.symbolImage}>
          <Image width={50} height={50} alt="" src="/Symbol/c5.png" />
        </div>
      </div>
      <div className={styles.foundation}>
        <span>۱۴۰۳</span>
        <p>تمامی حقوق مادی و معنوی این سایت متعلق به Rj Land می‌باشد.</p>
      </div>
    </aside>
  );
};

export default FooterData;
