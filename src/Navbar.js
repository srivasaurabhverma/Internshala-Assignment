import React from "react";
import "./Navbar.css";
import logo from "./Images/logo.png";
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a href="#" class="navbar-brand" id="logo">
            <img src={logo} height="28" alt="CoolBrand"  />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="lies" id="one">
                Join a Race
              </li>
              <li class="lies" id="two">
                Leaderboard
              </li>
            </ul>
            <button class="btn btn-light" type="submit">
              <a> Login</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
