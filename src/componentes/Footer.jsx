import React from "react";

export function Footer() {
  return (
<footer className="main-footer bg-dark text-light">
  <div className="container mt-5">
    <div className="row">
    <div className="col-md-6 order-md-2">
        <h2 className="heading-sm">
          <span>Social</span>
        </h2>
        <div className="main-footer__social-cont">
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-github"></i>
          <i className="bi bi-book"></i>
        </div>
      </div>
      <div className="col-md-6 order-md-1" style={{ width: "40%", order: 1, maxWidth: "50rem" }}>
        <h2 className="heading-sm text-light heading-primary">Ram Maheshwari</h2>
        <p className="main-footer__short-desc">
          A Frontend focused Web Developer building the Frontend of Websites
          and Web Applications that leads to the success of the overall
          product
        </p>
      </div>
    </div>

    <div className="main-footer__lower">
      &copy; Copyright
      <script>{`document.write(new Date().getFullYear());`}</script>. Made
      by
      <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
        Ram Maheshwari
      </a>
    </div>
  </div>
</footer>

  );
}
