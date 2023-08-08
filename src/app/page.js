import styles from "../styles/page.module.css";
import styles from '@/styles/Carrousel.module.css'
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import LessonCallOut from "./components/atoms/atoms/atoms/LessonCallOut";
import ArticlesGallery from "./components/molecules/ArticlesGallery";
import PopularList from '@/components/PopularList'
import Carrousel from '@/components/Carrousel'
import { StyleRegistry } from 'styled-jsx'

export default function Home() {
  return (
    <>
      <LessonCallOut />
      <CardList />
      <PopularList/>
      <Carrousel/>
      <ArticlesGallery />
    </>
  );
}
