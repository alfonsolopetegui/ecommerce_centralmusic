"use client";
import { useState } from "react";
import styles from "../../styles/CartPage.module.css";
import { CartCounter } from "../components/atoms/atoms/atoms/CartCounter";
import ButtonSmall from "../components/atoms/atoms/atoms/ButtonSmall";
import Modal from "../components/atoms/atoms/atoms/Modal";
import { Loader } from "../components/atoms/atoms/atoms/Loader";
import { useRouter } from "next/navigation";

import useStore from "@/store/cartStore";

const CartElements = () => {
  const [modalUno, setModalUno] = useState(false);
  const { cart, removeFromCart, clearCart } = useStore();

  const router = useRouter();

  const handleConfirm = () => {
    setModalUno(false);
    router.push("/");
    clearCart();
  };

  const handlerBtn = () => {
    setModalUno(true);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className={styles.cartWrapper}>
      {!cart && <Loader />}
      {cart && cart.length > 0 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className={styles.title}>Cart</h1>
          {cart.map((product) => {
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
                  onClick={() => removeFromCart(product.id)}
                >
                  ❌
                </h3>
              </div>
            );
          })}
          <div className={styles.cartContent}>
            <h3 className={styles.productName}>Total:</h3>
            <h4 className={styles.price}>
              U$s {cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
            </h4>
          </div>
        </div>
      )}

      {cart && cart.length > 0 && (
        <div
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "space-around",
          }}
          className={styles.btnContainer}
        >
          <ButtonSmall
            texto={"Checkout"}
            width={"220px"}
            handler={handlerBtn}
          ></ButtonSmall>
          <ButtonSmall
            texto={"Clear Cart"}
            width={"220px"}
            handler={handleClearCart}
            backgroundColor={"#272727"}
          ></ButtonSmall>
        </div>
      )}
      {cart.length === 0 && (
        <div className={styles.emptyCart}>
          <h1>Your Cart is empty</h1>
          <img src={"shopping-cart-20392.png"}/>
        </div>
      )}
      <Modal
        modal={modalUno}
        setModal={setModalUno}
        titulo={"CentralMusic"}
        showHeader={true}
        showOverlay={true}
        showCloseBtn={true}
        textBtn={"Confirm"}
        handleBtn={handleConfirm}
      >
        <h2>Its almost yours!! </h2>
        <p>Click in CONFIRM to complete your order</p>
      </Modal>
    </div>
  );
};

export default CartElements;
