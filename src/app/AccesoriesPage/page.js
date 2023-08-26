"use client";
import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Card from "../components/atoms/atoms/atoms/Card";
import styles from "../../styles/accesoriesPage.module.css";

const AccesoriesPage = () => {
  const { accesories } = useContext(DataContext);

  return (
    <>
      {accesories.map((accesory) => {
        return <Card key={accesory.id} data={accesory} />;
      })}
    </>
  );
};
export default AccesoriesPage;
