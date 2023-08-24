"use client"
import Card from "../components/atoms/atoms/atoms/Card";
import styles from "../../styles/guitarsPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const GuitarsPage = () => {
  // const { data } = useContext(DataContext);

  const [products, setProducts] = useState([]);

    useEffect(() => {
        // URL de la API local
        const apiUrl = 'http://localhost:5000/products';

        axios.get(apiUrl)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);


  return (
    <>
      <div className={styles.guitarsPageWrapper}>
        <h3 className={styles.titleGuitarPages}>Guitars</h3>
        <div className={styles.guitarContainer}>
          {products.map((guitar) => {
            return <Card key={guitar.id} data={guitar}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default GuitarsPage;
