"use client";
import ButtonSmall from "@/app/components/atoms/atoms/atoms/ButtonSmall";
import styles from "../../../styles/productView.module.css";

import useStore from "@/store/cartStore";

const GuitarView = ({ params }) => {
  
  const { id } = params;

  const guitar = data[id - 1];

  const {cart, updateFromCart, addToCart} = useStore();

  const addProduct = () => {
    const productRepeat = cart.find((item) => item.id === guitar.id);

    if (productRepeat) {
      // guitar.quantity += 1;
      updateFromCart(guitar, "increase")
    } else {
      // setCart([...cart, guitar]);
      addToCart(guitar);
    }
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productContainer}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${guitar.image})` }}
        ></div>
        <div className={styles.dataContainer}>
          <div className={styles.dataTop}>
            <h1 className={styles.dataTitle}>{guitar.title}</h1>
            <p>{guitar.description}</p>
            <div className={styles.priceContainer}>
              <h3>${guitar.price}</h3>
              <p>save up to 20%</p>
            </div>
          </div>
          <div className={styles.dataBottom}>
            <div className={styles.dataFragment}>
              <h4>Six month special financing</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free devolution Policy</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free delivery in Argentina</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
          </div>
          {/* <button onClick={()=>addToCart(id)}> Agregar </button>     ver por que tira error */}
          <ButtonSmall texto={"Add to Cart"} handler={addProduct} />
        </div>
      </div>
    </div>
  );
};

export default GuitarView;
