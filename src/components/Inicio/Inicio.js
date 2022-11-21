import React from 'react'
import './inicio.css'

const Inicio = () => {
  return (
    <div>
      <div className='descripcionInicioPadre'>
        <div className='descripcionInicio'>

          <h1>BAR BOOTCAMP</h1>
          <h2>PARA VIVIR EL PRESENTE</h2>
          <h2>HAY QUE BEBERSE EL PASADO</h2>

        </div>
        <div className='imgInicioPadre'>
          <img src='assets/3.png' className='imgInicio'/>
        </div>

      </div>

      <div className='historiaInicio'>
        <h1>NUESTRA HISTORIA</h1>
        <p>Una casa patrimonial en toma, dos pisos de rescate e intervención cargados de 1124 
          litros de alcohol. Somos sangre viva, mente abierta. Y por eso estamos acá, armados hasta los 
          dientes de hiperactividad. De déficit atencional. SOMOS BAR BOOTCAMP hasta las recachas, aqui cabemos 
          todos, lugar hay...si es de los nuestros Pa´dentro mierda ¡¡¡ SALUUUU !!!!</p>
        <img src='assets/Logo.png' className='logo'/>
        <h3>SANTIAGO, CHILE</h3>

      </div>
    </div>
  )
}

export default Inicio;