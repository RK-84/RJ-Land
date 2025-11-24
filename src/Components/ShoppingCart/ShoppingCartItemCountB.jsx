"use client";
import {
  decreaseItem,
  increaceItem,
  removeItem,
} from "@/Redux/Slices/ShoppingCartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ShoppingCartItemCountB.module.css";
import { LuMinus, LuPlus } from "react-icons/lu";
import { PiTrash } from "react-icons/pi";

const ShoppingCartItemCountB = ({ PrdId }) => {
  const selector = useSelector((state) => state.ShoppingCart);
  const Xcount = selector.items.filter((item) => item.id === PrdId)[0].count;
  const dispatch = useDispatch();
  return (
    <section className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.counterComponents}>
          <LuPlus onClick={() => dispatch(increaceItem(PrdId))} />
        </div>

        <label className={styles.countNumber}>{Xcount}</label>

        {Xcount === 1 ? (
          <div className={styles.counterComponents}>
            <PiTrash onClick={() => dispatch(removeItem(PrdId))} />
          </div>
        ) : (
          <div className={styles.counterComponents}>
            <LuMinus onClick={() => dispatch(decreaseItem(PrdId))} />
          </div>
        )}
      </div>
    </section>
  );
};
export default ShoppingCartItemCountB;
