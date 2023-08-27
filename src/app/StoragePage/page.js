"use client";
import React, { useContext } from "react";
import PopularCard from "../components/atoms/atoms/atoms/PopularCard";
import styles from "../../styles/storage.module.css";
import { StorageInfo } from "../components/data/storageInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import DataContext from "../Context/DataContext";

const Storage = () => {
  const { storage } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //     // URL de la API local
  //     const apiUrl = 'http://localhost:5000/storageInfo';

  //     axios.get(apiUrl)
  //         .then(response => {
  //             setProducts(response.data);
  //         })
  //         .catch(error => {
  //             console.error('Error al obtener los datos:', error);
  //         });
  // }, []);

  return (
    <>
      <div className={styles.StoragePageWrapper}>
        <div className={styles.StorageHeader}>
          <h2 className={styles.title}> Storage </h2>
        </div>
        <div className={styles.redLine}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="3"
          viewBox="0 0 58 3"
          fill="none"
        >
          <line y1="1.5" x2="58" y2="1.5" stroke="#AB0433" stroke-width="3" />
        </svg>
      </div>
        <div className={styles.storageList}>
          <div className={styles.storageList2}>
            {storage.map((product) => (
              <PopularCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Storage;
