import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="ms-5">
    <img src="https://i.postimg.cc/TwY74D31/profile-pic-8.png" alt="" width="50px" />
    <a className="navbar-brand m-3" href="#">
      Ram Maheshwari
    </a>
  </div>

  <div className="container">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav space-x-5">
        <li className="nav-item">
          <a className="nav-link font-bold ms-5" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-bold ms-5" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-bold ms-5" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-bold ms-5" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
