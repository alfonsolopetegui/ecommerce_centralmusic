// import ArticlesInfo from "./ArticlesInfo"
import Article from "../atoms/atoms/atoms/Article";
import styles from "../../../styles/articles.module.css";
import { ArticlesInfo, verticalArticles } from "../data/ArticlesInfo";

const ArticlesGallery = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Gear Heads</h1>
        <div className={styles.articleContainerOne}>
          {ArticlesInfo.map((article, index) => {
            return <Article key={index} data={article} order={index} />;
          })}
        </div>
        <div className={styles.articleContainerTwo}>
          {verticalArticles.map((vertical, index) => {
            return <Article key={index} data={vertical} order={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesGallery;