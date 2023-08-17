import React from 'react'
import PopularCard from '../atoms/atoms/atoms/PopularCard'
import styles from "../../../styles/carrousel.module.css";
import { Product } from '../data/PopularListInfo';


const PopularList = () => {
    return (
        <>
            <div className={styles.popularListHeader}>
                <hr className={styles.separatedLine} />
                <h2 className={styles.popularListTitle}> Popular Finds </h2>
            </div>
            <div className={styles.popularList}>
                <div className={styles.popularList2}>
                    {
                        Product.map(Product => <PopularCard
                            key={Product.id}
                            data={Product}
                        />)
                    }
                </div>
            </div>

        </>
    )
}

export default PopularList