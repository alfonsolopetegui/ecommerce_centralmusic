import styles from "../../../../../styles/articles.module.css";
import Link from "next/link";

const Article = ({ data, order }) => {
  const { title, subhead, imageUrl } = data;
  
console.log(order)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className={order%2 == 1 ?`${styles.titleContainer} ${styles.greyBack}`: `${styles.titleContainer}`}>
        <h3 className={order%2 == 1 ?`${styles.title} ${styles.colorChange}`: `${styles.title}`}>{title}</h3>
        <Link href={'/ArticleView/[id]'} as={`/ArticleView/${data.id}`} className={order%2 == 1 ?`${styles.subHead} ${styles.colorSubChange}`: `${styles.subHead}`}>{subhead}</Link>
      </div>
    </div>
  );
};

export default Article;
