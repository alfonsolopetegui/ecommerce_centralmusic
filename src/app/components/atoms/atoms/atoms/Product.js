import React from 'react'

const Product = ({data}) => {

    const {name,price,img,description,colorsavailable} = data;
  return (
    <>
    {/* // <div className='product'>
    //     <h4>{name}</h4>
    //     <h5>{price} </h5>
    //     */}
    <figure className='product-container'> 
      <img src={img} alt="guitar image" className='product-image' />
      <div className='product-title-container'> 
      <h6 className='product-title'> {name} </h6>
      <h6 className='product-price'> {price} </h6>
      </div>
      <p className='product-description'> {description} </p>
      <div className='product-colors-available'> 
      <p> {colorsavailable} colours available </p>
      <button style={{
      color: "white",
      backgroundColor: "darkgreen",
      padding: "1px 2px",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer"}}> Agregar </button>
      </div>
    </figure>
    </>
  )
}

export default Product
  