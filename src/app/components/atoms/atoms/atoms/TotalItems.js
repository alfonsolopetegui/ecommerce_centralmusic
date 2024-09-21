"use client";
import styles from "../../../../../styles/CartPage.module.css";

import useStore from "@/store/cartStore";

export const TotalItems = () => {

  const { cart } = useStore();

  const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
  return <span className={styles.totalItems}>{itemsQuantity}</span>;
};
