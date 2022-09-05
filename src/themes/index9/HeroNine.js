import React, { useState } from "react";
import { Link } from "react-router-dom";
import './HeroNine.css' ;

const HeroNine = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="Main"
      className="color-img ptb-120"
    >
      <div className=" container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                Shams Software
              </h1>
              <p className="lead">
                We are building multi-purpose websites for Business , Apps and landing pages .
              </p>
            
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img position-relative mt-5 mt-lg-0">
              <img
                src="assets/img/shams-logo.png"
                alt="hero hero-it-solution "
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNine;
