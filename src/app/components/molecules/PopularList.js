import React from "react";
import styles from "../../../styles/carrousel.module.css";
import CarrouselCard from "../atoms/atoms/atoms/CarrouselCard";

import { PopularFindsData } from "../data/PopularListInfo";


const PopularList = () => {
  return (
    <>
      <div className={styles.popularListHeader}>
        <hr className={styles.separatedLine} />
        <h2 className={styles.popularListTitle}> Popular Finds </h2>
      </div>
      <div className={styles.popularList}>
        <div className={styles.popularList2}>
          {PopularFindsData.map((accesories) => (
            <CarrouselCard key={accesories.id} data={accesories} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularList;
