import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

const ListaDrinks = () => {
    const [drinks, setDrinks] = useState([
        {
            id: 1,
            nombre: 'HTML Sour',
            descripcion: 'Trago muy rico como tú',
            precio: '$3600',
            imgDrink: 'assets/drinks/HTMLSour.png'
        },
        {
            id: 2,
            nombre: 'JavaSdrink',
            descripcion: 'Copete, mina, locura',
            precio: '$4500',
            imgDrink: 'assets/drinks/javasDrink.png'
        },
        {
            id: 3,
            nombre: 'Cí! Ese Es!',
            descripcion: 'Amargór en tu paladar',
            precio: '$5100',
            imgDrink: 'assets/drinks/cieses.png'
        },
        {
            id: 4,
            nombre: 'Node Nada',
            descripcion: 'Trago muy rico como tú',
            precio: '$3600',
            imgDrink: 'assets/drinks/nodeNada.png'
        },
        {
            id: 5,
            nombre: 'Dom DeVivo',
            descripcion: 'Copete, mina, locura',
            precio: '$4500',
            imgDrink: 'assets/drinks/domDevivo.png'
        },
        {
            id: 6,
            nombre: 'Prop Oxidado',
            descripcion: 'Amargór en tu paladar',
            precio: '$5100',
            imgDrink: 'assets/drinks/propOxidado.png'
        },
        {
            id: 7,
            nombre: 'Reactivo Blue',
            descripcion: 'Trago muy rico como tú',
            precio: '$3600',
            imgDrink: 'assets/drinks/reactivoBlue.png'
        },
        {
            id: 8,
            nombre: 'Bloody Index',
            descripcion: 'Copete, mina, locura',
            precio: '$4500',
            imgDrink: 'assets/drinks/bloodyIndex.png'
        },
        {
            id: 9,
            nombre: 'MojitoStrap',
            descripcion: 'Amargór en tu paladar',
            precio: '$5100',
            imgDrink: 'assets/drinks/mojitostrap.png'
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




