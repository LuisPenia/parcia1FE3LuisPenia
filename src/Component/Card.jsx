//import React from 'react'

import { useState } from "react"

const Card = (superado) => {

  console.log('superados '+ superado)

  const [mostrar, setMostrar] = useState (false)

  if (!superado === true){
    setMostrar(true)
  }

  return (
    
  <h2>
    {mostrar && <div>Hola, Soy una Tergeta y estoy del 1</div>}
  </h2>
    
  )
}

export default Card