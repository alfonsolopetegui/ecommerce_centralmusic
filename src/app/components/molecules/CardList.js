import React from 'react'
import Card from '../atoms/atoms/atoms/Card'

const Tarjetas = [

    {
        id: 1, 
        img: "Guitar1.svg", 
        title: "Jackson JS",    
        price: "$2,995",
        description: "JS Series Solidbody Electric Guitar with Arched Basswood Body",
        colorsavailable: "0"
    },
    {
        id: 2, 
        img: "Guitar2.svg",
        title: "Parquer ST100",    
        price: "$3,000",
        description: "Phin is a folk instrument of the Isarn Thailand. That is unique, conveying fun and can play harmoniously with international music",
        colorsavailable: "2"
    },
    {
        id: 3, 
        img: "Guitar3.svg",
        title: "Newen",    
        price: "$1,500",
        description: "Squier Classic Vibe 70s Stratocaster Electric Guitar, Walnut, Laurel Fingerboard",
        colorsavailable: "1"
    }
]

const CardList = () => {
  return (
    <>
    <div className='card-list-header'> 
    <hr className='separated-line' />
    <h2 className='card-list-title'> New Products </h2>
    </div>
    <div className='card-list'> 
    <div className='card-list-2'>
    {
        Tarjetas.map(tarjeta => <Card 
            key={tarjeta.id}
            data={tarjeta} />)
    }
    </div>
    </div>
    
    </>


  )
}

export default CardList

// <>
// <section> 
// {
//     Destinos.map(destino => <Card 
//       key={destino.id}
//       data={destino} 
//       />) // 34:00
// }
// <style jsx>
// {`
// section {
//   display: flex;
//   justify-content: space-around;
// }
// `}
// </style> 
// </section>
// </>