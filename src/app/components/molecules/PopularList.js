import React from 'react'
import styles from "../../../styles/carrousel.module.css";
import { useContext } from "react";
import DataContext from "../../../app/Context/DataContext";
import axios from "axios";
import CarrouselCard from '../atoms/atoms/atoms/CarrouselCard';



const PopularList = () => {
    const { accesories } = useContext(DataContext);


    return (
        <>
            <div className={styles.popularListHeader}>
                <hr className={styles.separatedLine} />
                <h2 className={styles.popularListTitle}> Popular Finds </h2>
            </div>
            <div className={styles.popularList}>
                <div className={styles.popularList2}>
                    {
                        accesories .map(accesories => <CarrouselCard
                            key={accesories.id}
                            data={accesories }
                        />)
                    }
                </div>
            </div>

        </>
    )
}

export default PopularList