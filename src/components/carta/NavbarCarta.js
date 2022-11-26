import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavbarCarta = () => {
  return (
    
    <nav className='nav'>
        <Link to='/' className='bar-inicio'>
            ← Inicio
        </Link>
        <ul>

            <CustomLink to='/carta/bebidas'>Bebidas</CustomLink>
            <CustomLink to='/carta/comida'>Comida</CustomLink>

        </ul>

    </nav>

  )
}

export default NavbarCarta

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