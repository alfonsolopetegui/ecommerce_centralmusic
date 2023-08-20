'use client'
import React from 'react'
import { useReducer, useEffect} from 'react'
import {shoppingReducer, shoppingInitialState} from '@/app/reducer/ShoppingReducer'
import CartItem from '@/app/components/atoms/atoms/CartItem'
import Product from '@/app/components/atoms/atoms/Product'
import { TYPES } from '@/app/actions/ShoppingActions'
import styles from '@/styles/shoppingCart.module.css'
import axios from 'axios'


//Tronco > ShoppingCart
// Los estados los encontramos en el reducer, que se basa en las acciones declaradas en ShoppingCartActions


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState) //declaramos el reducer con el estado inicial que enrealidad es la base de datos en si misma
// RECORDAR en state se guarda la ultima copia del estado
  const {products,cart} = state; //desestructuramos state 


  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart"
    };
    const responseProducts = await axios.get(ENDPOINTS.products), responseCart = await axios.get(ENDPOINTS.cart);
    const productsList=responseProducts.data, cartItems = responseCart.data;
    const data = {
      products: productsList,
      cart: cartItems}
    
    dispatch({type: TYPES.READ_STATE, payload:data})
  }

  useEffect(() => {
    updateState()
  }, [])
  

// const updatePost = (cart) => {
//     axios.put(`${"http://localhost:5000/cart"}/1`, {
//         cart
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }


  const addToCart = (id, updatePost) => dispatch({type: TYPES.ADD_TO_CART, payload:id }); // por dispatch despachamos el tipo (action) y el id que es lo que va a utilizar la funcion para reconocer al producto a la hora de agregarlo al carrito 
  const deleteFromCart = (id, all) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id});
    } else {    
      dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload:id});
  }
}
  const clearCart = () => 
  {
    dispatch({type: TYPES.CLEAR_CART});
  }

  
  

  return (
    <>
    <div className={styles.shoppingCartMasterContainer}> 
    <h1> ShoppingCart </h1>


    <h3>Productos</h3>
  
    <div className={styles.productContainerCard}> 
    {
      products.map(product => <Product key={product.id} data={product} addToCart={addToCart}/>) // por cada producto crea un componente
    }
    </div>

    <h2>Carrito</h2>

    <div className={styles.productContainerCard}> 
    {
      cart.map((item,i) => <CartItem key={i} data={item} deleteFromCart={deleteFromCart}/>)
    }
    </div>
    <div>  <button onClick={()=>clearCart()} className={styles.cartButton }>Limpiar Carrito</button> </div>

    </div>
    </>
  )

  }
export default ShoppingCart