import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const Contacto = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="row justify-content-center" data-aos="fade-up">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Ubicación:</h4>
                  <p>S/N calle sin nombre<br/>Zapopan, Jalisco</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Telefono:</h4>
                  <p>33 33 33 33 33</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row mt-5 justify-content-center" data-aos="fade-up">
          <div className="col-lg-10">
            <form action="/" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="example@example.com" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">su mensaje se a enviado. Gracias!</div>
              </div>
              <div className="text-center"><button type="submit">Enviar</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contacto