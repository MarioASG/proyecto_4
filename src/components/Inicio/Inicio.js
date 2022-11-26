import React from 'react'
import './inicio.css';
const Inicio = () => {
  return (
    <div>
      <div className='descripcionInicioPadre'>
        <div className='descripcionInicio'>

          <h1> BAR BOOTCAMP</h1>
          <h2>PARA VIVIR EL PRESENTE</h2>
          <h2>HAY QUE BEBERSE EL PASADO</h2>

        </div>
        <div className='imgInicioPadre'>
          <img src='assets/3.png' className='imgInicio' alt='resLogo'/>
        </div>

      </div>
      
      <section className='seccionHistoria'>
      <div className='historiaInicio'>
        <h1>NUESTRA HISTORIA</h1>
        <p>Antigua fortaleza erigida sobre una roca de origen volcánico ubicada en el centro
           de la ciudad de Santiago, Chile. Aunque existen restos humanos desde la Edad del 
           Hierro, el primer Pub se construyó durante el reinado de David I (r. 1124-1153) 
           y continuó como residencia real hasta 1633, para finalmente convertirse en lo que 
           hoy conocemos como Bar BootCamp</p>
        <img src='assets/Logo.png' className='logo' alt='logo'/>
        <h3>SANTIAGO, CHILE</h3>

      </div>
      </section>
    </div>
  )
}

export default Inicio;