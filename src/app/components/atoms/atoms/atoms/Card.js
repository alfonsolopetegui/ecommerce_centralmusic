import Link from 'next/link'
import React from 'react'
import ButtonSmall from './ButtonSmall'


const Card = (props) => {
  return (
    <>
    <figure className='card-container'> 
      <img src={props.data.img} alt="guitar image" className='card-image' />
      <div className='card-title-container'> 
      <h6 className='card-title'> {props.data.title} </h6>
      <h6 className='card-price'> {props.data.price} </h6>
      </div>
      <p className='card-description'> {props.data.description} </p>
      {/* <div className='card-colors-available'> 
      {/* <p> {props.data.colorsavailable} colours available </p> */}
{/*       
      </div> */}
      <Link href={'/GuitarsPage/[id]'} as={`/GuitarsPage/${props.data.id}`}> 
      <div className='card-button-container'> 
      <br />
      <ButtonSmall texto="See Product"/>      
      </div>
      </Link>
    </figure>
    </>
  )
}

export default Card