import React from 'react'
import PopularCard from './atoms/PopularCard'
import Slider from "react-slick";
import styles from '@/styles/Carrousel.module.css'


import { Product} from "../components/PopularList";

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