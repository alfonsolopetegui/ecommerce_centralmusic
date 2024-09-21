"use client";
import styles from "../../../../../styles/CartPage.module.css";

import useStore from "@/store/cartStore";

export const CartCounter = ({ product }) => {

  const { updateFromCart, removeFromCart } = useStore();

  const increase = () => {
    updateFromCart(product, "increase");
  };

  const decrease = () => {
    if (product.quantity > 1) {
      updateFromCart(product, "decrease");
    } else {
      removeFromCart(product.id)
    }
    return;
  };

  return (
    <>
      <div className={styles.counterContainer}>
        <p className={styles.counterBtn} onClick={increase}>
          +
        </p>
        <p>{product.quantity}</p>
        <p className={styles.counterBtn} onClick={decrease}>
          -
        </p>
      </div>
    </>
  );
};
