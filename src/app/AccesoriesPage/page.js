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
