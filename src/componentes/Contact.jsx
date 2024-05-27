import React from "react";

function Contact() {
  return (
    <div className="contact bg-light">
      <div className="container">
        <div className="mb-5 text-center">
          <h2 className="text-dark font-weight-bold mt-5 heading-sec__main">
              Contact
          </h2>
          <p className="text-muted">
            Feel free to contact me by submitting the form below, and I will get
            back to you as soon as
          </p>
          <p className="text-muted">possible</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 formulario mb-5">
            <form action="#" className="contact__form" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label contact__form-label">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="form-control contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label contact__form-label">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="form-control contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label contact__form-label ">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Type your message here"
                  className="form-control contact__form-input"
                  name="message"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <a
                href="#projects"
                className="btn btn-lg"
                style={{
                  backgroundColor: "#7843E9",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
