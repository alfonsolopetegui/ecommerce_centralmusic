"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();

const initialData = [
  {
    id: 1,
    img: "Guitar1.svg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Iommi_sg_guitar.png/640px-Iommi_sg_guitar.png",
    title: "Jackson JS",
    price: "2995",
    description:
      "JS Series Solidbody Electric Guitar with Arched Basswood Body",
    colorsavailable: "0",
    quantity: 1,
  },
  {
    id: 2,
    img: "Guitar2.svg",
    image:
      "https://us.123rf.com/450wm/martijnmulder/martijnmulder0708/martijnmulder070800011/1477060-fender-stratocaster-guitarra-el%C3%A9ctrica-logo-eliminado-separados-por-un-fondo-blanco.jpg",
    title: "Parquer ST100",
    price: "3000",
    description:
      "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
    colorsavailable: "2",
    quantity: 1,
  },
  {
    id: 3,
    img: "Guitar3.svg",
    image:
      "https://bairesrocks.vteximg.com.br/arquivos/ids/201859-1500-1500/635864-MLA40970397581_032020-F.jpg?v=637313060659830000",
    title: "Newen",
    price: "1500",
    description:
      "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    colorsavailable: "1",
    quantity: 1,
  },
];

const baseURL = "http://localhost:5000/products";
const cartURL = "http://localhost:5000/cart";

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = async (prod) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };

    await axios(cartURL, options);
  };

  const updateFromCart = async (prod, increase) => {
    const {id} = prod;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify({...prod, quantity: increase ? prod.quantity += 1 : prod.quantity -= 1}),
    };
    await axios(`${cartURL}/${id}`, options);
  };

  const deleteFromCart = async (prod) => {
    const {id} = prod;
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };
    await axios(`${cartURL}/${id}`, options);

  }

  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(cartURL).then((res) => setCart(res.data));
  }, [addToCart]);

  return (
    <DataContext.Provider value={{ data, cart, setCart, addToCart, updateFromCart, deleteFromCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
