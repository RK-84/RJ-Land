"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchAndBasket.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

const SearchAndBasket = () => {
  const selector = useSelector((state) => state.ShoppingCart);
  const [showSearch, setShowSearch] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const rout = useRouter();

  const changeHandler = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      rout.push(`/search/${textSearch}`);
    }
  };
  return (
    <section className={styles.searchAndBasketContainer}>
      <div onClick={() => setShowSearch(!showSearch)}>
        <FiSearch className={styles.Icon} />
      </div>
      <Link href="/ShoppingCart" className={styles.ShoppingCart}>
        <RiShoppingCartLine className={styles.Icon} />
        {selector.totalCount !== 0 ? <div>{selector.totalCount}</div> : null}
      </Link>
      {showSearch && (
        <div className={styles.SearchBoxContainer}>
          <div className={styles.searchBox}>
          
            <HiArrowRight
              onClick={() => setShowSearch(!showSearch)}
              className={styles.ArrowRight}
            />

            <input
              className={styles.searchBoxInput}
              type="text"
              onKeyDown={handleKeyDown}

              onChange={changeHandler}
              placeholder="جستجو  در   کالاهای  آر جی لند"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchAndBasket;
