import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className='nav'>
        <Link to='/' className='bar-bootcamp'>
            Bar BootCamp
            
        </Link>
        <img src='assets/Logo.png' className='logoNav' alt='logoNav'/>
        <ul>

            <CustomLink to='/'>Inicio</CustomLink>
            <CustomLink to='/Carta'>Carta</CustomLink>
            <CustomLink to='/Reservas'>Reservas</CustomLink>
            <CustomLink to='/Contacto'>Contacto</CustomLink>

        </ul>

    </nav>

  )
}

export default Navbar

const CustomLink = ({to, children, ...props}) =>{
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true})

    return(

        <li className={isActive ? 'active':''}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>

    )
}
