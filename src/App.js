import './css/Estilos.css';

import Navar from './componentes/Navar';
import Slider from './componentes/Slider';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
           
      <Navar/>
      
      
        <Slider/>
       
       
      <Nosotros/>

      <Servicios/>

      <Footer/>
      
    </div>
  );
}

export default App;
