import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='anteFooter'>
      
      <div className='footer'>
              <div className="contacto">
      
                <h2>CONTACTO</h2>
                <a href="#">Contáctanos</a>
                <a href="#">Preguntas Frecuentes</a>
                <a href="#">Trabaja con Nosotros</a>
                <a href="#">Cambios y Devoluciones</a>
                <a href="#">Nuestros Locales</a>
       
              </div>
    
              <div className="informate">
      
                <h2>INFÓRMATE</h2>
                <a href="#">Términos y Condiciones</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Cómo Funciona el Sitio</a>
                <a href="#">Aceptación de Cookies</a>
                <a href="#">Ayuda para Proyecto Gratuito</a>
                
              </div>
    
              <div className="ayuda">
      
                <h2>AYUDA</h2>
                <a href="#">Privacidad</a>
                <a href="#">Centro de Ayuda</a>
                <a href="#">Accesibilidad</a>
      
              </div>

              <div className="icons">
      
                <h2>REDES</h2>
                <a href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faFacebook} />
                </div>

                </a>

                <a href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faInstagram} />
                </div>

                </a>

                <a href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faTwitter} />
                </div>

                </a>
                
      
              </div>
    
            </div>
    </div>
  )
}

export default Footer
