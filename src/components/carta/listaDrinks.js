import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

const ListaDrinks = () => {
    const [drinks, setDrinks] = useState([
        {
            id: 1,
            nombre: 'HTML Sour',
            descripcion: 'Trago muy rico como tú',
            precio: '$3600',
            imgDrink: 'assets/drinks/1.png'
        },
        {
            id: 2,
            nombre: 'JavaSdrink',
            descripcion: 'Copete, mina, locura',
            precio: '$4500',
            imgDrink: 'assets/drinks/2.png'
        },
        {
            id: 3,
            nombre: 'Cí! Ese Ese!',
            descripcion: 'Amargór en tu paladar',
            precio: '$5100',
            imgDrink: 'assets/drinks/3.png'
        },
    ])
return(
    <div className='listaDrinks'>
        {drinks.map((drink =>{
            return(
                <Tarjeta key={drink.id} nombre={drink.nombre} imgDrink={drink.imgDrink} descripcion={drink.descripcion} precio={drink.precio} />
            )
        }))}
    </div>
)
}

export default ListaDrinks;




