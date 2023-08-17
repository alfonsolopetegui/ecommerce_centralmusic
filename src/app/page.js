import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import LessonCallOut from "./components/atoms/atoms/atoms/LessonCallOut";
import ArticlesGallery from "./components/molecules/ArticlesGallery";
import PopularList from "./components/molecules/PopularList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "./components/molecules/Carrousel";



export default function Home() {
  return (
    <>
      <LessonCallOut />
      <CardList />
      <PopularList />
      <Carrousel />
      <ArticlesGallery />
 
    </>
  );
}
