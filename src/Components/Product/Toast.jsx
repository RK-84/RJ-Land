"use client";
import React from "react";
import { toast, Toaster } from "sonner";
import styles from "./Toast.module.css";
import { CiBellOn } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
export const NonexistentNotificationToast = () => {
  return (
    <div>
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
        onClick={() => toast.success("اطلاع رسانی با موفقیت ثبت شد")}
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
