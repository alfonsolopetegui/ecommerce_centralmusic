import Card from "../components/atoms/atoms/atoms/Card";
import styles from "../../styles/guitarsPage.module.css";
import { GuitarsInfo } from "../components/data/GuitarsInfo";

const GuitarsPage = () => {
  return (
    <>
      <div className={styles.guitarsPageWrapper}>
        <h3>Guitars</h3>
        <div className={styles.guitarContainer}>
          {GuitarsInfo.map((guitar) => {
            return <Card key={guitar.id} data={guitar} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GuitarsPage;
