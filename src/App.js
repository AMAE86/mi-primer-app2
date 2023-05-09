import React from 'react';
import './css/Estilos.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './Paginas/About';
import Home from './Paginas/Home';
import Services from './Paginas/Services';
import Contac from './Paginas/Contac';
import Navar from './componentes/Navar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contac' element={<Contac/>}/>
        

      </Routes>
      </BrowserRouter>
      
           
      
      
    </div>
  );
}

export default App;
