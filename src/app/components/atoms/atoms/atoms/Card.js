import Link from 'next/link'
import React from 'react'
import ButtonSmall from './ButtonSmall'
import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Card = (props) => {
 const { data, cart, setCart, addToCart, updateFromCart } = useContext(DataContext);
  const { id } = props.data;

  const guitar = data[id - 1];

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
    <>
    <figure className='card-container'> 
      <img src={props.data.img} alt="guitar image" className='card-image' />
      <div className='card-title-container'> 
      <h6 className='card-title'> {props.data.title} </h6>
      <h6 className='card-price'> {props.data.price} </h6>
      </div>
      <p className='card-description'> {props.data.description} </p>
      {/* <div className='card-colors-available'> 
      {/* <p> {props.data.colorsavailable} colours available </p> */}
{/*       
      </div> */}
     
      <div className='card-button-container'> 
      <br />
      <ButtonSmall texto={"Add to Cart"} handler={addProduct}/>      
      </div>

    </figure>
    </>
  )
}

export default Card