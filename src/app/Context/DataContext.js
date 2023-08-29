"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();

const baseURL = "http://localhost:5000/products";
const cartURL = "http://localhost:5000/cart";
const storageURL = "http://localhost:5000/storageInfo";
const accesoriesURL = "http://localhost:5000/accesories";

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [storage, setStorage] = useState([]);
  const [accesories, setAccesories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = async (prod) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };

    await axios(cartURL, options);
    setIsLoading(true);
  };

  const updateFromCart = async (prod, increase) => {
    const { id } = prod;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },

      data: JSON.stringify({
        ...prod,
        quantity: increase ? prod.quantity + 1 : prod.quantity - 1,
      }),
    };
    console.log(prod.quantity);
    await axios(`${cartURL}/${id}`, options);
    setIsLoading(true);
  };

  const deleteFromCart = async (prod) => {
    const { id } = prod;
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };
    await axios(`${cartURL}/${id}`, options);
    setIsLoading(true);
  };

  // const clearCart =  async () => {
  //   try {
      
  //     const response = await axios.get('http://localhost:5000/cart');
  //     const cart = response.data;
  
      
  //     for (const product of cart) {
  //       await axios.delete(`http://localhost:5000/cart/${product.id}`);
  //       console.log(`Product ${product.id} deleted`);
  //     }
  
  //     console.log('Cart cleared successfully');
  //     setIsLoading(true)
  //   } catch (error) {
  //     console.error('Error clearing cart:', error);
  //   }
  // }

  // const clearCart = async () => {
    // const options = {
    //   method: "DELETE",
    //   headers: { "content-type": "application/json" },
    //   data: JSON.stringify([cart]),
    // };

  //   await axios.delete(`${cartURL}/`);

  // };

  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(storageURL).then((res) => setStorage(res.data));
  }, []);

  useEffect(() => {
    axios.get(accesoriesURL).then((res) => setAccesories(res.data));
  }, []);

  // useEffect(() => {
  //    axios.get(cartURL).then((res) => setCart(res.data));
  // }, [cart]);

  useEffect(() => {
    if (isLoading) {
      axios.get(cartURL).then((res) => {
        setCart(res.data);
        setIsLoading(false); // Marcar la carga como completada
      });
    }
  }, [isLoading, cart]);

  return (
    <DataContext.Provider
      value={{
        data,
        cart,
        setCart,
        addToCart,
        updateFromCart,
        deleteFromCart,
        storage,
        accesories,
        setIsLoading,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
