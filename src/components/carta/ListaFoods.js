import React from 'react';
import Tarjeta from './Tarjeta';

const ListaFoods = () => {
    const foods = [
        {
            id: 1,
            nombre: 'Chicken Fries',
            descripcion: 'Papitas de pollo con salsa melancólica',
            precio: '$9.600',
            imgFood: '/assets/foods/1.png'
        },
        {
            id: 2,
            nombre: 'Papas a la gnocchi',
            descripcion: 'Incestuoso pero sabroso, papitas con gnocchi de Italia',
            precio: '$7.500',
            imgFood: '/assets/foods/2.png'
        },
        {
            id: 3,
            nombre: 'Majestuoso',
            descripcion: 'Un balde de papitas con una hamburguesa bien burguesa',
            precio: '$15.100',
            imgFood: '/assets/foods/3.png'
        },
        {
            id: 4,
            nombre: 'La Catatónica',
            descripcion: 'Típico de las Catalinas... Hamburguesa con camarones venusianos',
            precio: '$8.100',
            imgFood: '/assets/foods/4.png'
        },
        {
            id: 5,
            nombre: 'Surtido de Locuras',
            descripcion: 'Palitos de ajo, papas fritas, pollo caucásico, lomo de cerdo... ¿Qué más?',
            precio: '$12.700',
            imgFood: '/assets/foods/5.png'
        },
        {
            id: 6,
            nombre: 'Papitas lijadas',
            descripcion: 'Con la ayuda de un esmeríl y un correcto procedimiento de trabajo',
            precio: '$7.300',
            imgFood: '/assets/foods/6.png'
        },
        {
            id: 7,
            nombre: 'La torre de Shawarma',
            descripcion: 'Plato popular del Medio Oriente que se originó en el Imperio Otomano',
            precio: '$10.700',
            imgFood: '/assets/foods/7.png'
        },
        {
            id: 8,
            nombre: 'Pizza Graneada',
            descripcion: 'Masa de garbanzos y verduras añejas, ¿Quién lo pediría?',
            precio: '$14.200',
            imgFood: '/assets/foods/8.png'
        },
        {
            id: 9,
            nombre: 'CareMerluzo',
            descripcion: 'No te ofendas y pídelo, la merluza no pone caras',
            precio: '$10.900',
            imgFood: '/assets/foods/9.png'
        },
    ]
return(
    <div className='listaDrinks'>
        {foods.map((food =>{
            return(
                <Tarjeta key={food.id} 
                      nombre={food.nombre} 
                    imgDrink={food.imgFood} 
                 descripcion={food.descripcion}
                      precio={food.precio} />
            )
        }))}
    </div>
)
}

export default ListaFoods;




