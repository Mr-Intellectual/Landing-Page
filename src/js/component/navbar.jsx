import React from "react";
import PropTypes from 'prop-types';


export default function NavBar() {
  return (
    //Some html code should go here
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
        <div className="container">
          <div className="navbar-brand text-white">Start Bootstrap</div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <a className="nav-link active text-white" aria-current="page" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Home
              </a>
              <a className="nav-link text-white" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                About
              </a>
              <a className="nav-link text-white" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Services
              </a>
              <a className="nav-link text-white" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  name: PropTypes.string
};
