import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './carta.css';
import NavbarCarta from './NavbarCarta';

const Carta = () => {

  return (
        <div>

        <NavbarCarta/>

        <div className='cartaPadre'>
          
        <div className='carta'>
          <h1>LOS MEJORES TRAGOS Y COMIDAS DE LA REGIÓN</h1>
          <div className='presentacionCarta'>

                <Link to='/carta/bebidas' className='listaCarta'>
                <h3>BEBIDAS</h3>
                <img src="/assets/drinks/tragos.png" alt="na" className='imgTarjeta' />
                </Link>

                <Link to='/carta/comida' className='listaCarta'>
                <h3>COMIDAS</h3>
                <img src="/assets/foods/comidas.png" alt="na" className='imgTarjeta' />
                </Link>
                
          </div>
        </div>
               
        </div>
          <Outlet/>
        </div>

  )
}

export default Carta;
