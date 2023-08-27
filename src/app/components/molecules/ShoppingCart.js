import React from 'react'
import Product from '../atoms/atoms/atoms/Product'
import CartItem from '../atoms/CartItem'
import axios from 'axios'
import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '@/reducer/ShoppingReducer'
import { type } from 'os'
import { TYPES } from '@/actions/ShoppingAction'


const Products = [
        {
            id: 1, 
            img: "Guitar1.svg", 
            name: "Jackson JS",    
            price: "$2,995",
            description: "JS Series Solidbody Electric Guitar with Arched Basswood Body",
            colorsavailable: "0"
        },
        {
            id: 2, 
            img: "Guitar2.svg",
            name: "Parquer ST100",    
            price: "$3,000",
            description: "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
            colorsavailable: "2"
        },
        {
            id: 3, 
            img: "Guitar3.svg",
            name: "Newen",    
            price: "$1,500",
            description: "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
            colorsavailable: "1"
        }
    ]

    
 const Cart = [        {
    id: 3, 
    img: "Guitar3.svg",
    name: "Newen",    
    price: "$1,500",
    description: "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    colorsavailable: "1"
}]
 

const ShoppingCart = () => {

//     const updateState = async () => {
//   const ENDPOINTS = {
//     products: "https://localhost:5000/products",
//     cart: " https://localhost:5000/cart"
//   };

const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

const { products, cart } = state;

const updateState = async () => {

    const ENDPOINTS = {
        products: "https://localhost:5000/products",
        cart: " https://localhost:5000/cart"
      };
    const responseProducts =  axios.get("http://localhost:5000/products"), responseCart =  axios.get("http://localhost:5000/cart");
    const productsList = responseProducts.data,
  cartItems = responseCart.data;

  dispatch({type: TYPES.READ_STATE, payload:{
    products: productsList,
    cart: cartItems
  }})     
}

useEffect(() => {
    UpdateState() }, []);

const addToCart = () => dispatch( {type: TYPES.ADD_TO_CART, payload: id})

const deleteFromCart = (id, all = false) => {
  if (all) {
    dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
  } else { dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id }) }
}

const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });


return (
    <>
    <div className = 'cart-container'>
    <h3 className='cart-title'> This is your bag  </h3>
    <div className='cart-grid-responsive'> 
    
        {
            Cart.map(item => <CartItem data={responseCart.data}/>)

        }
    </div>
    <div className = 'cart-container'>
    <h3 className='cart-title'> Products </h3>
    <div className='cart-grid-responsive'> 
        {
            Products.map(product => <Product data={responseProducts.data}/>)

        }
        </div>
        </div>
        </div>
        </>)
}

export default ShoppingCart