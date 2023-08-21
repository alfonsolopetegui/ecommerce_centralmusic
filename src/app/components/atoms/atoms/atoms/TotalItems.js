"use client"
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";
import styles from '../../../../../styles/CartPage.module.css'

export const TotalItems = () => {
    const { cart } = useContext(DataContext);

    const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    return <span className={styles.totalItems}>{itemsQuantity}</span>
}