import React from "react";
import { Link } from "react-router-dom";
import './footer_bootstrap.css'
const Footer_hire = () => {
  return (
    
    <section className="deneb_cta ">
    <div className="container">
      <div className="cta_wrapper">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div >
              <h3>Have Any Project in Mind ?</h3>
              <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="button_box">
              <a href="#" className="btn btn-warning">Hire Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Footer_hire;