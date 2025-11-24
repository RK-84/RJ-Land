"use client";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import styles from "./LogSignUI.module.css";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxExit } from "react-icons/rx";
import { removeToken } from "@/Redux/Slices/UserSlice";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from "../Loading/Loading";

const LogSignUI = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.Users);
  const [jwtData, setJwtData] = useState();
  useEffect(() => {
    if (jwt.token) {
      setJwtData(jwtDecode(jwt.token).username);
    }
  }, []);
  const [status, setStatus] = useState(false);
  const [isPending, startTransition] = useTransition();

  const rout = useRouter();
  const SignOut = () => {
    setStatus(true);
    dispatch(removeToken());
    rout.push("/");
  };
  const clickHandler = (url) => {
    startTransition(()=>{
    rout.push(url);
    })

  };

  return (
    <section>
    {isPending && <Loading/>}
      {jwt.token ? (
        <div className={styles.userIconContainer}>
          <div onClick={()=>clickHandler("/Profile")} className={styles.userIcon}>
            <AiOutlineUser className={styles.userIcon} />
          </div> 

          <div className={styles.userLayer}>
            <div  onClick={()=>clickHandler("/Profile")}  className={styles.userAccount}>
              <p>
                حساب کاربری
                {jwtData && <span className={styles.username}>{jwtData}</span>}
              </p>

              <MdKeyboardArrowLeft className={styles.ArrowLeftIcon} />
            </div>
            <div onClick={SignOut} className={styles.sginOut}>
              <RxExit className={styles.exitIcon} />
              {status ? (
                <p style={{ color: "royalblue" }}>در حال انجام عملیات...</p>
              ) : (
                <p>خروج از حساب کاربری</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.LogSignUIContainer}>
          <span>
            <BiLogOut className={styles.iconLogin} />
          </span>
          <div onClick={() => clickHandler("/Login")} className={styles.link}>
            ورود
          </div>
          <span>|</span>
          <div onClick={() => clickHandler("/Signup")} className={styles.link}>
            ثبت نام
          </div>
        </div>
      )}
    </section>
  );
};

export default LogSignUI;
