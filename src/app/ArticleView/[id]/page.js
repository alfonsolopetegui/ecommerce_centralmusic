import { ArticlesInfo } from "@/app/components/data/ArticlesInfo";
import { verticalArticles } from "@/app/components/data/ArticlesInfo";
import styles from "../../../styles/articleView.module.css";

const allArticles = [...ArticlesInfo, ...verticalArticles];

const ArticleViews = ({ params }) => {
  const { id } = params;

  const article = allArticles[id - 1];

  return (
    <div className={styles.articleViewWrapper}>
      <div className={styles.articleContainer}>
        <div className={styles.articleTitle}>{article.title}</div>;
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${article.imageUrl})` }}
        ></div>
        <p className={styles.articleDescription}>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleViews;
