import React from 'react';
import './components/Navbar/Navbar.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio';
import Carta from './components/carta/Carta';
import Reservas from './components/reservas/Reservas';
import Contacto from './components/contacto/Contacto';
import Navbar from './components/Navbar/Navbar';
import Bebidas from './components/carta/Bebidas';
import Comida from './components/carta/Comida.js';
import { Fragment } from 'react';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
                
    <Navbar />
                
    <div className='container'>
      <Routes>

        <Route path='/' element={<Inicio />}/>
        <Route path='/carta' element={<Carta />}>
          <Route path='/carta/bebidas' element={<Bebidas />}/>
          <Route path='/carta/comida' element={<Comida />}/>
          <Route path='*' element={<Inicio />}/>
        </Route>
        <Route path='/reservas' element={<Reservas />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='*' element={<Inicio />}/>

      </Routes>
    </div>

    <Footer />

    </Fragment>
  );
}

export default App;
