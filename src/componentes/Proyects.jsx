import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg heading-sec__main">
        <span className="heading-sec__main">Projects</span>
      </h2>
      <p className="subheading">
        Here you will find some of the personal and clients projects that I created with each project containing its own case study
      </p>

        <div className="projects__content">
          <div className="projects__row">
            <div className=".projects__row-img-cont">
              <img
                src="src/img/dopefolio.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title mb-4">Dopefolio</h3>
              <p className="projects__row-content-desc">
                Dopefolio is a successful Open-Source project that I created
                which has been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>
              <a className='btn btn--med btn--theme boton' href='/project-1' target='_blank'>Case Study</a>
            </div>
          <div className=".projects__row-img-cont">
              <img
                src="src/img/wilsonport.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title mb-4">Wilsonport</h3>
              <p className="projects__row-content-desc">
              Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.
              </p>
              <a className='btn btn--med btn--theme boton' href='/project-1' target='_blank'>Case Study</a>
            </div>
            <div className=".projects__row-img-cont">
              <img
                src="src/img/boreal-coffee-clone.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title mb-4">Boreal Coffee Clone</h3>
              <p className="projects__row-content-desc">
              I re-created the frontend of Boreal Coffees official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.
              </p>
              <a className='btn btn--med btn--theme boton' href='/project-1' target='_blank'>Case Study</a>
            </div>
            <div className=".projects__row-img-cont">
              <img
                src="src/img/crown-template.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title mb-4">
                Crown Template
              </h3>
              <p className="projects__row-content-desc">
              Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.
              </p>
              <a className='btn btn--med btn--theme boton' href='/project-1' target='_blank'>Case Study</a>
            </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Projects;
