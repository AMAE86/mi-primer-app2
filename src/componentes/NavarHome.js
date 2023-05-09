import React from "react";


const Navar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <h1 class="logo">
        <a className="navbar-brand" href="#!">
          <span>IT</span>Rescue
        </a>
      </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contacto
              </a>
            </li>
          </ul>
          <span className="navbar-text header-social-links">
            <a href="#!" className="twitter">
              <i className="bu bi-twitter"></i>
            </a>
            <a href="#!" className="facebook">
              <i className="bu bi-facebook"></i>
            </a>
            <a href="#!" className="instagram">
              <i className="bu bi-instagram"></i>
            </a>
            <a href="#!" className="linkedin">
              <i className="bu bi-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navar;
