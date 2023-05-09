import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../componentes/Slider';
import Nosotros from '../componentes/Nosotros'
import Servicios from '../componentes/Servicios';
import Footer from '../componentes/Footer';

const Home = () => {
  return (
    <div>
        
      
      
        <Slider/>
       
       
      <Nosotros/>

      <Servicios/>

      <Footer/>
    </div>
  )
}

export default Home