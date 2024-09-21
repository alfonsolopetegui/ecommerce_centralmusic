import React from "react";
import Card from "../atoms/atoms/atoms/Card";

const Tarjetas = [
  {
    id: 1,
    img: "Guitar1.svg",
    image:
      "https://media.sweetwater.com/api/i/q-82__ha-3c0c2611d56ff968__hmac-9e3c4279df07a6c502f100c8e55ea4d4c60d19fc/images/items/750/JSDKAMATRS-large.jpg",
    title: "Jackson JS",
    price: "2995",
    description:
      "JS Series Solidbody Electric Guitar with Arched Basswood Body",
    colorsavailable: "0",
    quantity: 1,
  },
  {
    id: 2,
    img: "Guitar2.svg",
    image:
      "https://http2.mlstatic.com/D_Q_NP_726510-MLA48762441708_012022-O.webp",
    title: "Parquer ST100",
    price: "3000",
    description:
      "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
    colorsavailable: "2",
    quantity: 1,
  },
  {
    id: 3,
    img: "Guitar3.svg",
    image:
      "https://www.worldofmusic.com.au/wp-content/uploads/2021/05/Fender-Player-Jaguar-Capri-Orange-Front.jpg",
    title: "Newen",
    price: "1500",
    description:
      "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
    colorsavailable: "1",
    quantity: 1,
  },
];

const CardList = () => {
  return (
    <>
      <div className="card-list-header">
        <hr className="separated-line" />
        <h2 className="card-list-title"> New Products </h2>
      </div>
      <div className="card-list">
        <div className="card-list-2">
          {Tarjetas.map((guitar) => (
            <Card key={guitar.id} data={guitar} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
