import Card from "../components/atoms/atoms/atoms/Card";
import styles from "../../styles/guitarsPage.module.css";

const Guitars = [
  {
    id: 1,
    img: "Guitar1.svg",
    title: "Jackson JS",
    price: "$2,995",
    description:
      "JS Series Solidbody Electric Guitar with Arched Basswood Body",
    colorsavailable: "0",
  },
  {
    id: 2,
    img: "Guitar2.svg",
    title: "Parquer ST100",
    price: "$3,000",
    description:
      "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
    colorsavailable: "2",
  },
  {
    id: 3,
    img: "Guitar3.svg",
    title: "Newen",
    price: "$1,500",
    description:
      "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    colorsavailable: "1",
  },
  {
    id: 4,
    img: "Guitar1.svg",
    title: "Jackson JS",
    price: "$2,995",
    description:
      "JS Series Solidbody Electric Guitar with Arched Basswood Body",
    colorsavailable: "0",
  },
  {
    id: 5,
    img: "Guitar2.svg",
    title: "Parquer ST100",
    price: "$3,000",
    description:
      "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
    colorsavailable: "2",
  },
  {
    id: 6,
    img: "Guitar3.svg",
    title: "Newen",
    price: "$1,500",
    description:
      "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    colorsavailable: "1",
  },
];

const GuitarsPage = () => {
  return (
    <>
      <h3>Guitars</h3>
      <div className={styles.guitarContainer}>
        {Guitars.map((guitar) => {
          return (
            
            <Card key={guitar.id} data={guitar} />
          )
        })}
      </div>
    </>
  );
};

export default GuitarsPage;
