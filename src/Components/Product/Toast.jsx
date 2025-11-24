"use client";
import React, { useTransition } from "react";
import { toast, Toaster } from "sonner";
import styles from "./Toast.module.css";
import { CiBellOn } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";
export const NonexistentNotificationToast = () => {
  const jwt = useSelector((state) => state.Users);
  const [isPending , startTransition]=useTransition()
    const rout = useRouter();
  
  const ToasT=()=>{
    if (jwt.token) {
      toast.success("اطلاع رسانی با موفقیت ثبت شد")
    }else{
startTransition(()=>{
  rout.push("/Login?Notification=true")
})
    }
  }
  return (
    <div>
      {isPending && <Loading/>}
      <Toaster
        dir="rtl"
        toastOptions={{
          style: {
            background: "#6be981",
            color: "#ffff",
            animation: "ease-in-out",
          },
        }}
      />
      <div
        className={styles.notificationContainer}
        onClick={ToasT}
      >
        <p>موجود شد اطلاع بده</p>
        <IoNotificationsOutline className={styles.notificationIcon} />
      </div>
    </div>
  );
};

export const PurchaseRegistrationToast = () => {
  return (
    <div>
      <Toaster
        dir="rtl"
        toastOptions={{
          style: {
            background: "#6be981",
            height: "fit-content",
            width: "fit-content",
            paddingRight: "10px",
            paddingLeft: "50px",
            color: "#ffff",
          },
        }}
      />
      <div
        className={styles.purchaseConfirmationContainer}
        onClick={() => toast.success(" خرید با موفقیت ثبت شد")}
      >
        <div className={styles.purchaseConfirmation}>
          <p>تایید خرید</p>
        </div>
      </div>
    </div>
  );
};
export const NotificationComments = () => {
  return (
    <div>
      <Toaster
        dir="rtl"
        toastOptions={{
          style: {
            background: "#6be981",

            color: "#ffff",
          },
        }}
      />
      <div
        className={styles.purchaseConfirmationContainer}
        onClick={() => toast.success(" !! نظرتان را درباره این کالا داده اید")}
      >
        <div className={styles.purchaseConfirmation}>
          <p>تایید خرید</p>
        </div>
      </div>
    </div>
  );
};
