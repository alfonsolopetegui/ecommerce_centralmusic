import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import LessonCallOut from "./components/atoms/atoms/atoms/LessonCallOut";
import ArticlesGallery from "./components/molecules/ArticlesGallery";
import PopularList from "./components/molecules/PopularList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "./components/molecules/Carrousel";
<<<<<<< HEAD
import ShoppingCart from "./components/molecules/ShoppingCart";

const Db = [
  {
    "id": 1, 
    "img": "Guitar1.svg", 
    "name": "Jackson Js",  
    "price": "$2,995",
    "description": "JS Series Solidbody Electric Guitar with Arched Basswood Body",
    "colorsavailable": "0"
},
{
    "id": 2, 
    "img": "Guitar2.svg",
    "name": "Parquer ST100",    
    "price": "$3,000",
    "description": "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
    "colorsavailable": "2"
},
{
    "id": 3, 
    "img": "Guitar3.svg",
    "name": "Newen",    
    "price": "$1,500",
    "description": "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    "colorsavailable": "1"
}
  
  
  ]

export default function Home() {

  return (
    <>    
      <LessonCallOut />
      <CardList />
      <PopularList/>
      <Carrousel/>
=======
import Header from "./components/atoms/atoms/atoms/Header";
import Home from "./components/atoms/atoms/atoms/Home";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <div className={styles.lessonContainer}>
        <LessonCallOut />
      </div>
      <div className={styles.cardListContainer}>
        <CardList />
      </div>
      <div className={styles.carouselWrapper}>
        <PopularList />
        <Carrousel />
      </div>
>>>>>>> 15348f3ec04475e1adf3f2a6b5248a097b7073d7
      <ArticlesGallery />
      <ShoppingCart />
    </>
  );
}
