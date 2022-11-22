import React from 'react'
import './tarjeta.css'

const Tarjeta = (props) => {
  return (
    <div className='tarjetaCarta'>
      <div className='imgTarjetaPadre'>
          <img src={props.imgDrink} alt='' className='imgTarjeta' />
      </div>
      <div className='textoTarjeta'>
        <h1>{props.nombre}</h1>
        <p>{props.descripcion}</p>
        <h3>{props.precio}</h3>
        
      </div>
    </div>
  )
}

export default Tarjeta;
