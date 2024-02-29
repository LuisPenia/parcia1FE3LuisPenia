//import React from 'react'

import { useState } from "react"
import Card from "./Card"

const Form = () => {

  const [show, setShow] = useState(false)
  const [superado, setSuperado] = useState(false)

  const [pc, setPc] = useState ({
    marca: '',
    modelo: ''
  })

  const regexmarca = /^(?! )[a-zA-Z0-9]{3,}$/
  /*
  ^: Coincide con el inicio de la cadena.
  (?! ): Utiliza una afirmación negativa para asegurarse de que la cadena no comience con un espacio en blanco.
  [a-zA-Z0-9]: Coincide con cualquier carácter alfanumérico (letra o número).
  {3,}: Asegura que haya al menos 3 caracteres alfanuméricos.
  $: Coincide con el final de la cadena.
  */

  const regexmodelo = /^[a-zA-Z0-9]{6,}$/
  /*
    ^: Coincide con el inicio de la cadena.
    [a-zA-Z0-9]: Coincide con cualquier carácter alfanumérico (letra o número).
    {6,}: Asegura que haya al menos 6 caracteres alfanuméricos.
    $: Coincide con el final de la cadena.
  */

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (!(regexmarca.test(pc.marca) && regexmodelo.test(pc.modelo))){
      setShow(true)
    } else {
      setShow(false)
      setSuperado(true)
    }
    
  }

  //console.log(regexmarca.test(pc.marca) && regexmodelo.test(pc.modelo))
  console.log('show ' + show + ' ' +superado)

  return (
    
    <>

    <form onSubmit={manejarEnvio}>
      <p>
        <label>Marca : </label>
        <input type="text" onChange = {(event) => setPc ({...pc, marca: event.target.value})}/>
      </p>
      <p>
        <label>Modelo: </label>
        <input type="text" onChange = {(event) => setPc ({...pc, modelo: event.target.value})}/>
      </p>
      <p>
        < button>Enviar</button>
      </p>
    </form>
      
      {show && <h4> “Por favor chequea que la información sea correcta” </h4>}
      {show && <Card key={1} superado={'OK!'} />}
      
      

    </>

    

  )
}


/*
    {show && <h4>{paciente.nombre}</h4>}
    {console.log(show, paciente.nombre.length)}
    {!show && <h4>Ingrese Nombre de Paciente</h4>}
*/


export default Form