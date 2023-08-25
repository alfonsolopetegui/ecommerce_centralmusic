"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();

const baseURL = "http://localhost:5000/products";
const cartURL = "http://localhost:5000/cart";
const storageURL = "http://localhost:5000/storageInfo";

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [storage, setStorage] = useState([]);

  const addToCart = async (prod) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };

    await axios(cartURL, options);
  };

  const updateFromCart = async (prod, increase) => {
    const { id } = prod;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },

      

      data: JSON.stringify({ ...prod, quantity: increase ? prod.quantity += 1 : prod.quantity -= 1 }),

    };
    await axios(`${cartURL}/${id}`, options);
  };

  const deleteFromCart = async (prod) => {
    const { id } = prod;
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };
    await axios(`${cartURL}/${id}`, options);
  };

  const clearCart = async () => {
    
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      
    };
    await axios(cartURL, options);
  };



  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(storageURL).then((res) => setStorage(res.data));
  }, []);

  useEffect(() => {
    axios.get(cartURL).then((res) => setCart(res.data));
  }, [addToCart]);

  return (

    
    

    <DataContext.Provider value={{ data, cart, setCart, addToCart, updateFromCart, deleteFromCart, storage }}>

      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
