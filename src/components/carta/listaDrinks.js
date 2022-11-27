import React from 'react';
import Tarjeta from './Tarjeta';

const ListaDrinks = () => {
    const drinks = [
        {
            id: 1,
            nombre: 'HTML Sour',
            descripcion: 'Una combinación explosiva de sabores apta para cualquier paladar incluso el más exigente',
            precio: '$3.600',
            imgDrink: '/assets/drinks/HTMLSour.png'
        },
        {
            id: 2,
            nombre: 'JavaSdrink',
            descripcion: 'Atrevido e intenso gracias al toque seco y aromático que aporta la ginebra',
            precio: '$4.500',
            imgDrink: '/assets/drinks/javasDrink.png'
        },
        {
            id: 3,
            nombre: 'Cí! Ese Es!',
            descripcion: 'Su apariencia es elegante y delicada, su sabor es excelente, desde un sutilmente agresivo principio hasta el suavemente placentero final',
            precio: '$5.100',
            imgDrink: '/assets/drinks/cieses.png'
        },
        {
            id: 4,
            nombre: 'Node Nada',
            descripcion: 'Difícil de conseguir pero la cocteleria cubana lo ha conseguido, el Node Nada es un claro ejemplo',
            precio: '$4.100',
            imgDrink: '/assets/drinks/nodeNada.png'
        },
        {
            id: 5,
            nombre: 'Dom DeVivo',
            descripcion: 'Sin duda la mezcla capaz de expresar el valor de la ginebra, donde la calidad del destilado debe ser la máxima posible',
            precio: '$3.700',
            imgDrink: '/assets/drinks/domDevivo.png'
        },
        {
            id: 6,
            nombre: 'Prop Oxidado',
            descripcion: 'Cóctel elaborado con Drambuie y whisky escocés',
            precio: '$4.300',
            imgDrink: '/assets/drinks/propOxidado.png'
        },
        {
            id: 7,
            nombre: 'Reactivo Blue',
            descripcion: 'Es una mezcla de pisco, jugo de limón, jarabe de azúcar, angostura y clara de huevo',
            precio: '$3.700',
            imgDrink: '/assets/drinks/reactivoBlue.png'
        },
        {
            id: 8,
            nombre: 'Bloody Index',
            descripcion: 'Básicamente es una mezcla de vodka, zumo de tomate, jugo de limón, salsa Worcestershire, tabasco, sal y pimienta',
            precio: '$4.200',
            imgDrink: '/assets/drinks/bloodyIndex.png'
        },
        {
            id: 9,
            nombre: 'MojitoStrap',
            descripcion: 'Su mezcla de aromas y esencias nos transportará al máximo placer, sin duda alguna, una de las mejores y más populares creaciones cocteleras de la historia.',
            precio: '$4.900',
            imgDrink: '/assets/drinks/mojitostrap.png'
        },
    ]
return(
    <div className='listaDrinks'>
        {drinks.map((drink =>{
            return(
                <Tarjeta key={drink.id} 
                      nombre={drink.nombre} 
                    imgDrink={drink.imgDrink} 
                 descripcion={drink.descripcion}
                      precio={drink.precio} />
            )
        }))}
    </div>
)
}

export default ListaDrinks;




