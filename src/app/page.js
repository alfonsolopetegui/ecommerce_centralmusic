import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import LessonCallOut from "./components/atoms/atoms/atoms/LessonCallOut";
import ArticlesGallery from "./components/molecules/ArticlesGallery";

export default function Home() {
  return (
    <>
      <LessonCallOut />
      <CardList />
      <ArticlesGallery />
    </>
  );
}
