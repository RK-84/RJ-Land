"use client";
import styles from "./LowerPart.module.css";
import { HiHome } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";

const LowerPart = () => {
  const jwt = useSelector((state) => state.Users);

  return (
    <footer className={styles.lowerPartContainer}>
      <Link href="/" className={styles.lowerPart}>
        <HiHome className={styles.icon} />

        <p>خانه</p>
      </Link>

      <Link href="/Categories" className={styles.lowerPart}>
        <BiCategoryAlt className={styles.icon} />

        <p>دسته بندی</p>
      </Link>

      <Link href="/ShoppingCart" className={styles.lowerPart}>
        <RiShoppingCartLine className={styles.icon} />
        <p>سبد خرید</p>
      </Link>
      {jwt.token ? (
        <Link href="/Profile" className={styles.profile}>
          <FaRegUser className={styles.icon} />
          <p>پروفایل</p>
        </Link>
      ) : (
        <div className={styles.LogSignUIContainer}>
          <CiLogin className={styles.iconLogin} />

          <Link className={styles.link} href="/Login">
            ورود
          </Link>
          <span>|</span>
          <Link className={styles.link} href="/Signup">
            ثبت نام
          </Link>
        </div>
      )}
    </footer>
  );
};

export default LowerPart;