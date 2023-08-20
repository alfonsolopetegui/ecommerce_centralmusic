import React from 'react'
import Link from 'next/link'
import styles from '@/styles/shoppingCart.module.css'


const Product = ({ data, addToCart }) => {
    const {id, name, price,description,img,colorsavailable} = data

  return (
    <>
<figure className={styles.productContainer}> 
<img src={img} alt="guitar image" className={styles.cardImage} />
<div className={styles.cardTitleContainer}> 
<Link href={'/GuitarsPage/[id]'} as={`/GuitarsPage/${id}`}> {name} </Link>
<h6 className={styles.cardPrice}> ${price} </h6>
<p className={styles.cardDescription}> {description} </p>
</div>

{/* <div className={styles.anotherContainer}>
{/* <div className={styles.cardColorsAvailable}>  
{/* <p> {colorsavailable} colours available </p> 
</div> */} 
<div className={styles.cardButtonContainer}> 
<button onClick={()=>addToCart(id)} className={styles.cartButton}> Agregar </button>
</div>     
{/* </div> */}
</figure>
</>
  )
}

export default Product
