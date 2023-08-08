import React from 'react'
import PopularCard from './atoms/PopularCard'
import styles from '@/styles/Carrousel.module.css'



export const Product = [
    {
        id: 1,
        img: "../images/fendercable.jpg",
        title:"Fender Caleb",
        price: "$120",
        text:"The Fender Original Cable is a classic instrument cable that combines outstanding construction and top-notch materials to deliver a stellar signal reproduction.",
        colorsavailable: "3",

    },
    {
        id: 2,
        img: "../images/fenderdeluxe.jpg",
        title:"Fender Caleb Delux",
        price: "$150",
        text:"The Fender Deluxe Cable is a classic, high-quality instrument cable that combines outstanding construction and top-notch materials to deliver a stellar signal reproduction.",
        colorsavailable: "2",
    },
    {
        id: 3,
        img: "../images/polytune.jpg",
        title:"TC PolyTune Mini",
        price: "$300",
        text:"Tiny polyphonic tuner gives you fast, accurate tuning and a high-quality tone tool in a single unit.",
        colorsavailable: "2",
    },
    {
        id: 4,
        img: "../images/strings.jpg",
        title:"Ernie Ball Strings" ,
        price: "$50",
        text:"Ernie Ball electric guitar strings allow any musician to get the perfect tonal quality and sound they are looking for.",
        colorsavailable: "4",        
    },
    {
        id: 5,
        img: "../images/guitarpicks.jpg",
        title:"Fender Guitar Picks" ,
        price: "$10",
        text:"Experience the classic feel of Fender no matter what guitar or bass you play. Celluloid is a premier pick material and the cornerstone of the Fender pick collection for decades.", 
        colorsavailable: "6",        
    },
    {
        id: 6,
        img: "../images/strap.jpg",
        title:"Tom DeLonge strap",
        price: "$220",
        text:"Whether youre a fan of Tom DeLonges playing in Blink-182 or Angels and Airwaves, his impact on music and culture is out-of-this-world.",
        colorsavailable: "1",        
    },
]



const PopularList = () => {
    return (
        <>
            <div className={styles.popularListHeader}> 
            <hr className={styles.separatedLine} />
            <h2 className={styles.popularListTitle}> Popular Finds </h2>
            </div>
            <div className={styles.popularList}> 
            <div className={styles.popularList2}>
            {
                Product.map(Product => <PopularCard 
                key={Product.id}
                data={Product}
                />)
            }
                </div>
            </div>  

        </>
    )
}

export default PopularList