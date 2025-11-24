"use client";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { TbUserHexagon } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { removeToken } from "@/Redux/Slices/UserSlice";
import { jwtDecode } from "jwt-decode";

const profile = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.Users);
  const [jwtData, setJwtData] = useState();
  useEffect(() => {
    if (jwt.token) {
      setJwtData({
        username: jwtDecode(jwt.token).username,
        name: jwtDecode(jwt.token).name,
        lastname: jwtDecode(jwt.token).lastname,
        mobilenumber: jwtDecode(jwt.token).mobilenumber,
        email: jwtDecode(jwt.token).email,
      });
    }else{
      rout.push("/Login")
    }
  }, []);

  const rout = useRouter();

  const clickHandler = () => {
    dispatch(removeToken());
    rout.push("/");
  };

  return (
    <div className={styles.profileContainer}>
      {jwtData && (
        <>
          <div className={styles.rightSide}>
            <div className={styles.profile}>
              <TbUserHexagon className={styles.profileIcon} />
              <p>{jwtData.username}</p>
            </div>

            <div className={styles.profileContent} onClick={clickHandler}>
              <RxExit className={styles.ExitIcon} />
              <p> خروج</p>
            </div>
          </div>

          <div className={styles.leftSide}>
            <div className={styles.constructionContainer}>
              <div className={styles.construction}>
                <div className={styles.Specifications}>
                  <p>نام کاربری :</p>
                  <span>{jwtData.username}</span>
                </div>
                <div className={styles.Specifications}>
                  <p>نام :</p>

                  <span>{jwtData.name}</span>
                </div>
                <div className={styles.Specifications}>
                  <p>نام خانوادگی :</p>
                  <span>{jwtData.lastname}</span>
                </div>
                <div className={styles.Specifications}>
                  <p>شماره موبایل :</p>
                  <span>{jwtData.mobilenumber}</span>
                </div>
                <div className={styles.Specifications}>
                  <p>ایمیل :</p>
                  <span>{jwtData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default profile;