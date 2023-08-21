"use client";
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";
import styles from "../../../../../styles/CartPage.module.css";

export const CartCounter = ({ product }) => {
  const { cart, setCart, updateFromCart, deleteFromCart } = useContext(DataContext);

  const increase = () => {
    updateFromCart(product, "increase")
  }

  const decrease = () => {
    if(product.quantity > 1){
      updateFromCart(product)
    } 
    return
  };
  return (
    <>
      <div className={styles.counterContainer}>
        <p className={styles.counterBtn} onClick={increase}>+</p>
        <p>{product.quantity}</p>
        <p className={styles.counterBtn} onClick={decrease}>
          -
        </p>
      </div>
    </>
  );
};
