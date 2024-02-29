//import React from 'react'

const Card = ({superado, marca, modelo}) => {

  console.log('superados '+ superado)

  return (
    
  <p class="contenedor-fila">
    {superado && 
    <>
      <h3>PC seleccionado: {marca}</h3>
      <h3>Modelo: {modelo}</h3>
    </>}
  </p>
    
  )
}

export default Card