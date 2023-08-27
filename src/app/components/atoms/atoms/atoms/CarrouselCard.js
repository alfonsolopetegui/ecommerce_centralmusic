
import React from 'react'
import ButtonSmall from './ButtonSmall'
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";
import styles from '../../../../../styles/popularCard.module.css'
import Carrousel from '@/app/components/molecules/Carrousel';

const CarrouselCard = (props) => {
  const { cart, addToCart, updateFromCart } =
  useContext(DataContext);

const addProduct = () => {
  const productRepeat = cart.find((item) => item.id == props.data.id);

  if (productRepeat) {
    updateFromCart(props.data, "increase");
  } else {
    addToCart(props.data);
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

export default CarrouselCard 
