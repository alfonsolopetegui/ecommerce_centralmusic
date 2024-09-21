"use client";
import styles from "../../styles/accesoriesPage.module.css";
import PopularCard from "../components/atoms/atoms/atoms/PopularCard";

const accesories = [
  {
    id: 10,
    img: "fendercable.jpg",
    title: "Fender Caleb",
    price: "120",
    description:
      "The Fender Original Cable is a classic instrument cable that combines outstanding construction and top-notch materials to deliver a stellar signal reproduction.",
    colorsavailable: "3",
    quantity: 1,
  },
  {
    id: 11,
    img: "fenderdeluxe.jpg",
    title: "Fender Caleb Delux",
    price: "150",
    description:
      "The Fender Deluxe Cable is a classic, high-quality instrument cable that combines outstanding construction and top-notch materials to deliver a stellar signal reproduction.",
    colorsavailable: "2",
    quantity: 1,
  },
  {
    id: 12,
    img: "polytune.jpg",
    title: "TC PolyTune Mini",
    price: "300",
    description:
      "Tiny polyphonic tuner gives you fast, accurate tuning and a high-quality tone tool in a single unit.",
    colorsavailable: "2",
    quantity: 1,
  },
  {
    id: 13,
    img: "strings.jpg",
    title: "Ernie Ball Strings",
    price: "50",
    description:
      "Ernie Ball electric guitar strings allow any musician to get the perfect tonal quality and sound they are looking for.",
    colorsavailable: "4",
    quantity: 1,
  },
  {
    id: 14,
    img: "guitarpicks.jpg",
    title: "Fender Guitar Picks",
    price: "10",
    description:
      "Experience the classic feel of Fender no matter what guitar or bass you play. Celluloid is a premier pick material and the cornerstone of the Fender pick collection for decades.",
    colorsavailable: "6",
    quantity: 1,
  },
  {
    id: 15,
    img: "strap.jpg",
    title: "Tom DeLonge strap",
    price: "220",
    description:
      "Whether youre a fan of Tom DeLonges playing in Blink-182 or Angels and Airwaves, his impact on music and culture is out-of-this-world.",
    colorsavailable: "1",
    quantity: 1,
  },
];

const AccesoriesPage = () => {
  

  return (
    <div className={styles.accesoriesWrapper}>
      <div className={styles.accesoriesHeader}>
        <h2 className={styles.title}> Accesories </h2>
      </div>
      <div className={styles.accesoriesList}>
        <div className={styles.accesoriesList2}>
          {accesories.map((accesory) => {
            return <PopularCard key={accesory.id} data={accesory} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AccesoriesPage;
