'use client'
import React from 'react'
import Slider from "react-slick";
import PopularCard from '../atoms/atoms/atoms/PopularCard'
import styles from "../../../styles/carrousel.module.css";
import { Product } from './PopularList';


const settings = {
 
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};



const Carrousel = () => {
  return (
    <div className={styles.carrouselConteiner}>
    <h2 className={styles.carrouselTitle}> Popular Finds </h2>
    <div className={styles.carrousel}>
        <Slider {...settings}>
        {
                Product.map(Product => <PopularCard 
                key={Product.id}
                data={Product}
                />)
        }
        </Slider>
      </div>
    </div>
  )
}



export default Carrousel