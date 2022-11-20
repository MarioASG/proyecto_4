import './App.css';
import './components/Navbar.css'
import {Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio';
import Carta from './components/Carta';
import Reservas from './components/Reservas';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>

    <Navbar />
    <div className='container'>
      <Routes>

        <Route path='/' element={<Inicio />}/>
        <Route path='/carta' element={<Carta />}/>
        <Route path='/reservas' element={<Reservas />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='*' element={<Inicio />}/>

      </Routes>
    </div>

    </Fragment>
  );
}

export default App;
