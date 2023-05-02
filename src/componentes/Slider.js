import React from 'react';



import slide1 from '../img/slide/slide-1a.jpg';
import slide2 from '../img/slide/slide-2a.jpg';
import slide3 from '../img/slide/slide-3a.jpg';

export const Slider = () => {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel  slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div class="carousel-container">
              <div class="carousel-content ">
                <h2>"Servicios Técnicos:</h2>
                <p>
                  "¿Problemas con tus equipos de cómputo? ¡No te preocupes más!
                  Contáctanos ahora y deja que nuestros expertos solucionen tus
                  problemas para que puedas volver a trabajar sin
                  interrupcionesSoluciones efectivas para problemas
                  informáticos"."
                </p>
                <div class="text-center">
                  <a href="services.html" class="btn-get-started">
                    Nuestros Servicios
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div class="carousel-container">
              <div class="carousel-content animate__animated animate__fadeInUp">
                <h2>
                  Problemas con su <span>equipo de computo</span>
                </h2>
                <p>
                  "¡No esperes más para resolver tus problemas técnicos!
                  Contáctanos ahora y deja que nuestros expertos te ayuden a
                  solucionar tus inconvenientes con tus equipos de cómputo de
                  manera rápida y efectiva."
                </p>
                <div class="text-center">
                  <a href="contact.html" class="btn-get-started">
                    CONTACTANOS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item"data-bs-interval="2000">
            <img src={slide3} className="d-block w-100" alt="..." />
            <div class="carousel-container">
              <div class="carousel-content animate__animated animate__fadeInUp">
                <h2>ITRescue</h2>
                <p>
                  "Aseguramos el funcionamiento de tus equipos, para que puedas
                  asegurar el éxito de tu negocio."
                </p>
                <div class="text-center">
                  <a href="about.html" class="btn-get-started">
                    Conocenos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
  );
}

export default Slider