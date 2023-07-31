import styles from "../styles/page.module.css";
import Head from "next/head";
import Image from "next/image";
import Card from "./components/atoms/atoms/atoms/Card";
import CardList from "./components/molecules/CardList";

export default function Home() {
  return (
    <>
      <div>Proyecto React</div>
      <p>Cambios desde nueva rama</p>
      <p>Ahora con nuevo nombre</p>
      <CardList />
    </>
  );
}
