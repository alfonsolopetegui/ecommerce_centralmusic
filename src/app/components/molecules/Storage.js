import React from 'react'
import PopularCard from '../atoms/atoms/atoms/PopularCard'
import styles from "../../../styles/carrousel.module.css";
import { StorageInfo } from '../data/storageInfo';


const Storage = () => {
    return (
        <>
            <div className={styles.popularListHeader}>
                <hr className={styles.separatedLine} />
                <h2 className={styles.storageTitle}> Storage </h2>
            </div>
            <div className={styles.storageList}>
                <div className={styles.storageList2}>
                    {
                       StorageInfo.map( StorageInfo => <PopularCard
                            key={StorageInfo.id}
                            data={StorageInfo}
                        />)
                    }
                </div>
            </div>

        </>
    )
}

export default Storage