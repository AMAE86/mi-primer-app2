import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const Nosotros = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container" data-aos="fade-up">
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right">
            <h2>ACERCA DE NOSTROS</h2>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
            <p>
              Empresa familiar dedicada a brindar servicios técnicos a equipos
              de cómputo en la ciudad.
            </p>
            <h3>Nuestros Valores</h3>
            <ul>
              <li>
              <i className="bi bi-check2-all"></i> Excelencia: Buscamos
                siempre brindar un servicio de alta calidad y superar las
                expectativas de nuestros clientes
              </li>
              <li>
              <i className="bi bi-check2-all"></i> Profesionalismo: Nos
                esforzamos por mantener altos estándares éticos y profesionales
                en todo lo que hacemos
              </li>
              <li>
              <i className="bi bi-check2-all"></i> Honestidad: Nos
                comprometemos a ser honestos y transparentes en todas nuestras
                interacciones con nuestros clientes y proveedores
              </li>
            </ul>
            <p className="fst-italic">
              Confía en los expertos, deja tus problemas en nuestras manos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
