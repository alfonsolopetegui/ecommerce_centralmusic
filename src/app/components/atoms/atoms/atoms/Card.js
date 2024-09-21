"use client";
import React from "react";
import ButtonSmall from "./ButtonSmall";
import useStore from "@/store/cartStore";

const Card = (props) => {
  const { addToCart, cart, updateFromCart } = useStore();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
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
    <>
      <figure className="card-container">
        <img src={props.data.img} alt="guitar image" className="card-image" />
        <div className="card-title-container">
          <h6 className="card-title"> {props.data.title} </h6>
          <h6 className="card-price">{formatPrice(props.data.price)} </h6>
        </div>
        <p className="card-description"> {props.data.description} </p>

        <div className="card-button-container">
          <br />
          <ButtonSmall texto={"Add to Cart"} handler={addProduct} />
        </div>
      </figure>
    </>
  );
};

export default Card;
