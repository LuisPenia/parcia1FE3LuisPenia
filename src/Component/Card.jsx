//import React from 'react'

const Card = ({superado, marca, modelo}) => {

  console.log('superados '+ superado)

  return (
    
  <h2>
    {superado &&
    <>
      <h4>PC seleccionado: {marca}</h4>
      <h4>Modelo: {modelo}</h4>
    </>}
  </h2>
    
  )
}

export default Card