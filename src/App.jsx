// src/App.jsx
import React from "react";
import { Navbar } from "./componentes/Navbar";
import { Footer } from "./componentes/Footer";
import Contact from "./componentes/Contact";
import Projects from "./componentes/Proyects";
import { About } from "./componentes/About";
import { Home } from "./componentes/Home";
import "./App.css"; // o cualquier otro archivo de estilos que tengas

function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Home />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
