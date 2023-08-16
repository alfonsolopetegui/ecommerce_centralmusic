import ButtonSmall from "@/app/components/atoms/atoms/atoms/ButtonSmall";
import styles from "../../../styles/productView.module.css";
import { GuitarsInfo } from "@/app/components/data/GuitarsInfo";

const GuitarView = ({ params }) => {
  const { id } = params;
  
 const guitar = GuitarsInfo[id -1]
  

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer} style={{backgroundImage: `url(${guitar.image})`}}></div>
        <div className={styles.dataContainer}>
          <div className={styles.dataTop}>
            <h1 className={styles.dataTitle}>
              {guitar.title}
            </h1>
            <p>{guitar.description}</p>
            <div className={styles.priceContainer}>
              <h3>{guitar.price}</h3>
              <p>save up to 20%</p>
            </div>
          </div>
          <div className={styles.dataBottom}>
            <div className={styles.dataFragment}>
              <h4>Six month special financing</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free devolution Policy</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free delivery in Argentina</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
          </div>
          <ButtonSmall text="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default GuitarView;
