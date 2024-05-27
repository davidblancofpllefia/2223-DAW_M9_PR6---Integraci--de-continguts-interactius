import React from "react";
export function Home() {
  return (
    <div className="container text-center home">
    <div className="row items-center">
      <div className="col-md-12 home-content mx-auto" style={{ maxWidth: "90rem", width: "92%" }}>
        <h1 className="text-uppercase font-bold mt-5 heading-primary">
          Hey, I'm Ram Maheshwari
        </h1>
        <p className="text-principal">
          A Result-Oriented Web Developer building and managing Websites and
          Web
        </p>
        <p className="text-principal">Applications that leads to the success of the overall product</p>
        <div className="mt-4">
          <a
            href="#projects"
            className="btn btn-lg w-[800px] boton bg-purple-700 rounded-full text-white"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="flex justify-around">
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-github"></i>
          <i className="bi bi-book"></i>
        </div>
      </div>
    </div>
    <div className="home-hero__mouse-scroll-cont">
      <div className="mouse"></div>
    </div>
  </div>
  
  );
}
