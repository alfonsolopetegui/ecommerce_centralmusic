"use client"
import Card from "../components/atoms/atoms/atoms/Card";
import styles from "../../styles/guitarsPage.module.css";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const GuitarsPage = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <div className={styles.guitarsPageWrapper}>
        <h2 className={styles.title}>Guitars</h2>
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
        <div className={styles.guitarContainer}>
          {data.map((guitar) => {
            return <Card key={guitar.id} data={guitar}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default GuitarsPage;
