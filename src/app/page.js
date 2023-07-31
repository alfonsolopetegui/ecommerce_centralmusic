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
      {/* <h2> New Products </h2>

<figure className='card-container'> 
    <Image 
        src="/Guitar.svg"
        alt="Guitar"
        className='card-image'
        width={314}
        height={260}
        priority
    />
    <h5 className='card-title'> Brand name </h5>
    <h5 className='card-price'> $2,995 </h5>
    <p className='card-description'> Product description here </p>
</figure> */}
    </>
  );
}
