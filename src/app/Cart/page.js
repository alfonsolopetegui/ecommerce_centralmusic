"use client";
import { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
import styles from "../../styles/CartPage.module.css";
import { CartCounter } from "../components/atoms/atoms/atoms/CartCounter";
import ButtonSmall from "../components/atoms/atoms/atoms/ButtonSmall";
import Modal from "../components/atoms/atoms/atoms/Modal";
import { Loader } from "../components/atoms/atoms/atoms/Loader";
import { useRouter } from "next/navigation";
// import './CartElements.css'
// import { CartItemCounter } from "./CartItemCounter";

const CartElements = () => {
  const { data, cart, setCart, deleteFromCart, storage, clearCart} = useContext(DataContext);
  const [modalUno, setModalUno] = useState(false);

  const deleteProduct = (id) => {
    const findId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== findId;
    });
    setCart(newCart);
  };

  const router = useRouter();

  const handleConfirm = () => {
    router.push('/')
  }

  const allProductsPrice = () => {
    cart.map();
  };

  const handlerBtn = () => {
    setModalUno(true)
  }

  
  return (
    <div className={styles.cartWrapper}>
      {!cart && <Loader/>}
      {cart &&
        cart.map((product) => {
          return (
            <div className={styles.cartContent} key={product.id}>
              <img src={product.img} alt="producto" />
              <h3 className={styles.productName}>{product.title}</h3>
              <CartCounter product={product} />
              <h4 className={styles.price}>
                U$s {parseInt(product.price) * product.quantity}
              </h4>
              <h3
                className={styles.deleteBtn}
                onClick={() => deleteFromCart(product)}
              >
                ❌
              </h3>
            </div>
          );
        })}
      {cart.length > 0 && (
        <div className={styles.cartContent}>
          <h3 className={styles.productName}>Total:</h3>

          <h4 className={styles.price}>
            U$s {cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
          </h4>
          <ButtonSmall texto={"Proceed"} width={"220px"} handler={handlerBtn}></ButtonSmall>
        </div>
      )}
      {cart.length === 0 && <h1>🛒Your Cart is empty🛒</h1>}
      <Modal
        modal={modalUno}
        setModal={setModalUno}
        titulo={"CentralMusic"}
        showHeader={true}
        showOverlay={true}
        showCloseBtn={true}
        textBtn={'Confirm'}
        handleBtn={handleConfirm}
      >
        <h2>Its almost yours!! </h2>
        <p>Click in CONFIRM to complete your order</p>
      </Modal>
    </div>
  );
};

export default CartElements;
