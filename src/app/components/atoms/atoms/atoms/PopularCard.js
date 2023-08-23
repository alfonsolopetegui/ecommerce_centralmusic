import React from 'react'
import styles from "../../../../../styles/popularCard.module.css";
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";
import ButtonSmall from './ButtonSmall';


const PopularCard = (props) => {
  const { storage, cart, setCart, addToCart, updateFromCart } = useContext(DataContext);
  const { id } = props.data;

  const storageProduct = storage[id-1];

  const addProduct = () => {
    const productRepeat = cart.find((item) => item.id === storageProduct.id);

    if (productRepeat) {
      // guitar.quantity += 1;
      updateFromCart(storageProduct, "increase")
    } else {
      // setCart([...cart, guitar]);
      addToCart(storageProduct);
    }
  };
  return (
    <figure className={styles.popularCardConteiner}>
      <img className={styles.popularImg} src={props.data.img} alt='product image' />
      <div className={styles.popularTitleConteiner} >
        <h3 className={styles.popularTitle}>{props.data.title}</h3>
        <h3 className={styles.popularPrice}>${props.data.price} </h3>
      </div>
      <p className={styles.popularDescription}>{props.data.description}</p>
      <div className={styles.buttonConteiner}>
      <ButtonSmall texto={"Add to Cart"} handler={addProduct}/>  
      </div>
    </figure>
  )
}

export default PopularCard
