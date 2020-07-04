import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import image from "./profilelogo.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="my-nav-item" className="navbar navbar-expand-lg">
      
      <Link className="navbar-brand" to="/">
      <img id="my-logo" src={image}/>
      </Link>
     
      <div >
        <ul className="nav navbar-nav navbar-right">
       
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              <h5>ABOUT</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myportfolio"
              className={window.location.pathname === "/myportfolio" ? "nav-link active" : "nav-link"}
            >
              <h5>PORTFOLIO</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              <h5>CONTACT</h5>
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
