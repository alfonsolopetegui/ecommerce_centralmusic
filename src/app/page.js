import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import ButtonSmall from "./components/atoms/atoms/atoms/ButtonSmall";
import ArticlesGallery from "./components/molecules/ArticlesGallery";

export default function Home() {
  return (
    <>
      <div>
        <ButtonSmall />
      </div>
      <CardList />
      <ArticlesGallery />
    </>
  );
}
