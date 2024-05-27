import React from "react";

export function About() {
  return (
    <div className= "about sec-pad">
    <h2 className="display-4 text-uppercase text-center fw-bold mb-5 heading-sec__main">
      About Me
    </h2>
    <p className="text-center text-muted">
      Here you will find more information about me, what I do, and my
      current skills mostly in terms
    </p>
    <p className="text-center text-muted mb-5">
      of programming and technology
    </p>
    <div className="row m-5">
      <div className="col-md-5 text-start">
        <h3 className="fw-bold fs-4 mb-3">Get to know me!</h3>
        <div className="about__content-details ">
          <p className="mb-4">
            I'm a <strong>Frontend Focused Web Developer</strong> building
            and managing the Front-end of Websites and Web Applications that
            leads to the success of the overall product. Check out some of
            my work in the <strong>Projects</strong> section.
          </p>
          <p className="mb-4">
            I also like sharing content related to the stuff that I have
            learned over the years in <strong>Web Development</strong> so it
            can help other people of the Dev Community. Feel free to Connect
            or Follow me on my
            <a
              rel="noreferrer"
              href="https://linkedin.com/in/rammcodes"
              target="_blank"
            >
              Linkedin
            </a>
            and
            <a
              rel="noreferrer"
              href="https://instagram.com/rammcodes_"
              target="_blank"
            >
              Instagram
            </a>
            where I post useful content related to Web Development and
            Programming
          </p>
          <p className="mb-4">
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to
            <strong>contact</strong> me.
          </p>
        </div>
        <a href="#contact" className="btn btn-lg boton">
          Contact
        </a>
      </div>
      <div className="col-md-5">
        <div className="mb-4">
          <h3 className="fw-bold fs-4 mb-3">My Skills</h3>
          <div className="d-flex flex-wrap">
            <div className="btn mb-4 me-4 etiqueta">HTML</div>
            <div className="btn mb-4 me-4 etiqueta">CSS</div>
            <div className="btn mb-4 me-4 etiqueta">JavaScript</div>
            <div className="btn mb-4 me-4 etiqueta">React</div>
            <div className="btn mb-4 me-4 etiqueta">Wordpress</div>
            <div className="btn mb-4 me-4 etiqueta">PHP</div>
            <div className="btn mb-4 me-4 etiqueta">SASS</div>
            <div className="btn mb-4 me-4 etiqueta">GIT</div>
            <div className="btn mb-4 me-4 etiqueta">Github</div>
            <div className="btn mb-4 me-4 etiqueta">Responsive Design</div>
            <div className="btn mb-4 me-4 etiqueta">SEO</div>
            <div className="btn mb-4 me-4 etiqueta">Terminal</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
