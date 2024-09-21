"use client";
import styles from "../../../../../styles/popularCard.module.css";
import ButtonSmall from "./ButtonSmall";
import useStore from "@/store/cartStore";

const PopularCard = (props) => {

  const { data } = props;
  const product = data;

  const { addToCart, cart, updateFromCart } = useStore();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  

  const addProduct = () => {
    const productRepeat = cart.find((item) => item.id == props.data.id);
    if (productRepeat) {
      updateFromCart(productRepeat, "increase");
    } else {
      const newProduct = props.data;
      const addedProduct = { ...newProduct, quantity: 1 };
      addToCart(addedProduct);
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
        <h3 className={styles.popularPrice}>{formatPrice(props.data.price)} </h3>
      </div>
      <p className={styles.popularDescription}>{props.data.description}</p>
      <div className={styles.buttonConteiner}>
        <ButtonSmall texto={"Add to Cart"} handler={addProduct} />
      </div>
    </figure>
  );
};

export default PopularCard;
