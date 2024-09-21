import React from "react";
import PopularCard from "../components/atoms/atoms/atoms/PopularCard";
import styles from "../../styles/storage.module.css";
import { StorageInfo } from "../components/data/storageInfo";


const Storage = () => {

  return (
    <>
      <div className={styles.storagePageWrapper}>
        <div className={styles.StorageHeader}>
          <h2 className={styles.title}> Storage </h2>
        </div>
        <div className={styles.storageList}>
          <div className={styles.storageList2}>
            {StorageInfo.map((product) => (
              <PopularCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Storage;
