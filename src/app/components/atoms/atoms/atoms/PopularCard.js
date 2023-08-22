import React from 'react'
import styles from "../../../../../styles/popularCard.module.css";



const PopularCard = (props) => {
  return (
    <figure className={styles.popularCardConteiner}>
      <img className={styles.popularImg} src={props.data.img} alt='product image' />
      <div className={styles.popularTitleConteiner} >
        <h3 className={styles.popularTitle}>{props.data.title}</h3>
        <h3 className={styles.popularPrice}>{props.data.price} </h3>
      </div>
      <p className={styles.popularDescription}>{props.data.text}</p>
      <div className={styles.buttonConteiner}>
        <button className={styles.button}>Add To Cart</button>
      </div>
    </figure>
  )
}

export default PopularCard
