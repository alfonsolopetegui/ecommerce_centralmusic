"use client"
import styles from "../../styles/accesoriesPage.module.css";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Card from "../components/atoms/atoms/atoms/Card";
import PopularCard from "../components/atoms/atoms/atoms/PopularCard";


const AccesoriesPage = () => {
  const { accesories } = useContext(DataContext);

  return (

    <>
      <div className={styles.accesoriesHeader}>
        <h2 className={styles.accesoriesPageTitle}> Accesories </h2>
      </div>
      <div className={styles.accesoriesList}>
        <div className={styles.accesoriesList2}>
        {accesories.map((accesory) => {
        return <PopularCard key={accesory.id} data={accesory} />;
      })}
        </div>
      </div>
  </>
  );
};
export default AccesoriesPage;
