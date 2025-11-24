"use client";
import React, { useState, useTransition } from "react";
import styles from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";

const SearchBox = () => {
  const [textSearch, setTextSearch] = useState("");

  const rout = useRouter();

  const changeHandler = (e) => {
    setTextSearch(e.target.value);
    e.preventDefault();
  };

  const [isPending, startTransition] = useTransition();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      startTransition(() => {
        rout.push(`/search/${textSearch}`); 
      });
    }

  };
  return (
    <>
      {isPending  && <Loading />}
      <section className={styles.searchBoxContainer}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchBox}
          type="text"
          onKeyDown={handleKeyDown}
          onChange={changeHandler}
          value={textSearch}
          placeholder="محصول ، برند  یا  دسته مورد  نظرتان  را  جستجو  کنید"
        />
      </section>
    </>
  );
};

export default SearchBox;
