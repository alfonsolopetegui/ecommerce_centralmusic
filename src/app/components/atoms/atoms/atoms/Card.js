import Link from "next/link";
import React from "react";
import ButtonSmall from "./ButtonSmall";
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Card = (props) => {
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
    <>
      <figure className="card-container">
        <img src={props.data.img} alt="guitar image" className="card-image" />
        <div className="card-title-container">
          <h6 className="card-title"> {props.data.title} </h6>
          <h6 className="card-price"> {props.data.price} </h6>
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
