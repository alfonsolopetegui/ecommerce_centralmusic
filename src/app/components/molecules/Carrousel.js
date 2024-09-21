'use client'
import React from 'react'
import Slider from "react-slick";
import styles from "../../../styles/carrousel.module.css";
import CarrouselCard from '../atoms/atoms/atoms/CarrouselCard';


import { PopularFindsData } from '../../components/data/PopularListInfo';

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
        <Slider {...settings} className={styles.slider}>
          {
            PopularFindsData.map(accesories => <CarrouselCard
              key={accesories.id}
              data={accesories}
            />)
          }
        </Slider>
      </div>
    </div>
  )
}



export default Carrousel