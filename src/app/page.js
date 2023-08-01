import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import ButtonSmall from "./components/atoms/atoms/atoms/ButtonSmall";

export default function Home() {
  return (
    <>
      <div><h1>Proyecto React</h1></div>
      <p>Cambios desde nueva rama</p> 
      <p>Ahora con nuevo nombre</p>
      <div>
        <ButtonSmall />
      </div>
      <CardList />
    </>
  );
}
