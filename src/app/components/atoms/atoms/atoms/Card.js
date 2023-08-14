import Link from 'next/link'
import React from 'react'


const Card = (props) => {
  return (
    <>
    <figure className='card-container'> 
      <img src={props.data.img} alt="guitar image" className='card-image' />
      <div className='card-title-container'> 
      <Link href={'/GuitarsPage/[id]'} as={`/GuitarsPage/${props.data.id}`}> {props.data.title} </Link>
      <h6 className='card-price'> {props.data.price} </h6>
      </div>
      <p className='card-description'> {props.data.description} </p>
      <div className='card-colors-available'> 
      <p> {props.data.colorsavailable} colours available </p>
      </div>
    </figure>
    </>
  )
}

export default Card