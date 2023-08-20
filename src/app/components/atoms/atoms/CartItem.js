import React from 'react'
import styles from '@/styles/shoppingCart.module.css'
import Link from 'next/link'

const CartItem = ({ data, deleteFromCart }) => {

    const { id, name, price, description, img, colorsavailable, quantity } = data

    return (
        <>
            <figure className={styles.productContainer}>
                <img src={img} alt="guitar image" className={styles.cardImage} />
                <div className={styles.cardTitleContainer}>
                    <Link href={'/GuitarsPage/[id]'} as={`/GuitarsPage/${id}`}> {name} </Link>
                    <h6 className={styles.cardPrice}> ${price}x{quantity}={price*quantity} </h6>
                    <p className={styles.cardDescription}> {description} </p>
                </div>

                <div className={styles.anotherContainer}>
                    {/* <div className={styles.cardColorsAvailable}>
                        <p> {colorsavailable} colours available </p> */} 
                    <button onClick={() => deleteFromCart(id, false)} className={styles.cartButton}> Eliminar uno </button>
                    <button onClick={() => deleteFromCart(id, true)} className={styles.cartButton}> Eliminar todos </button>
                </div>
            </figure>
        </>
        /*         
    <h1> {nombre} </h1>
    <h2> $ {precio} x {quantity} = {precio * quantity} </h2>
    <button onClick={()=>deleteFromCart(id, false)}> Eliminar uno </button>
    <button onClick={()=>deleteFromCart(id, true)}> Eliminar todos </button> */
    )
}

export default CartItem