"use client"
import styles from "../../../../../styles/popularCard.module.css";
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";
import ButtonSmall from "./ButtonSmall";

const PopularCard = (props) => {
  const { cart, addToCart, updateFromCart } = useContext(DataContext);
  const { data } = props;
  const product = data;

  const addProduct = () => {
    const productRepeat = cart.find((item) => item.id == product.id);

    if (productRepeat) {
      updateFromCart(product, "increase");
    } else {
      addToCart(product);
    }
  };

  return (
    <figure className={styles.popularCardConteiner}>
      <img
        className={styles.popularImg}
        src={props.data.img}
        alt="product image"
      />
      <div className={styles.popularTitleConteiner}>
        <h3 className={styles.popularTitle}>{props.data.title}</h3>
        <h3 className={styles.popularPrice}>${props.data.price} </h3>
      </div>
      <p className={styles.popularDescription}>{props.data.description}</p>
      <div className={styles.buttonConteiner}>
        <ButtonSmall texto={"Add to Cart"} handler={addProduct} />
      </div>
    </figure>
  );
};

export default PopularCard;
