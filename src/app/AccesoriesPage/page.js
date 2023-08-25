"use client"
import React, { useState, useEffect, useContext } from 'react';
import styles from "../../styles/accesoriesPage.module.css";
import { Product } from '../components/data/PopularListInfo';
import axios from 'axios';
import DataContext from '../Context/DataContext';


const AccesoriesPage = () => {
  const { cart, addToCart, updateFromCart } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // URL de la API local
    const apiUrl = 'http://localhost:5000/accessoryPage';

    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const addProduct = () => {
    const productRepeat = cart.find((item) => item.id === products.id);

    if (productRepeat) {
      // guitar.quantity += 1;
      updateFromCart(products, "increase")
    } else {
      // setCart([...cart, guitar]);
      addToCart(products);
    }
  };

  return (
    <div className={styles.accesoriesPageWrapper}>
      <h1 className={styles.accesoriesPageTitle}>Accessories</h1>
      <div className={styles.accesoriesList}>
        {Product.map((accessory) => (
          <div key={accessory.id} className={styles.accessoryItem}>
            <h2 className={styles.accessoryTitle}>{accessory.title}</h2>
            <img src={accessory.img} alt={accessory.title} className={styles.accessoryImage} />
            <p className={styles.accessoryPrice}>Price: {accessory.price}</p>
            <p className={styles.accessoryText}>{accessory.text}</p>
            <p className={styles.accessoryColorsAvailable}> {accessory.colorsavailable} colors available</p>
            <button className={styles.button} onClick={addProduct}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}
export default AccesoriesPage;