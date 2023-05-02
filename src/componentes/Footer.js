import React from 'react'

const Footer = () => {
  return (
    
        <footer  className="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>ITRescue</h3>
            <p>
              S/N calle sin nombre <br/>
              Zapopan, Jalisco<br/>
              México <br/><br/>
              <strong>Telefono:</strong> 33 33 33 33 33<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Ligas:</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#!">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#!">Nosotros</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#!">Servicios</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#!">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#!">Privacy policy</a></li>
            </ul>
          </div>

          

        </div>
      </div>
    </div>
    <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    
  </footer>
    
  )
}

export default Footer