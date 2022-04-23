import React from "react";
import { Link } from "react-router-dom";

function NavOnly(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
            <h5>MOVIES 24/7</h5>
          </Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.trailers}
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavOnly;
