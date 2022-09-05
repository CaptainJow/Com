import React from "react";
import { Link } from "react-router-dom";

const CyberService = () => {
  return (
    <section id="Services" className="cyber-features pt-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="section-heading text-center mb-5">
              <h5 className="h6 text-primary">Software Development</h5>
              <h2> Our Services</h2>
              <p>
                Uniquely promote adaptive quality vectors rather than
                stand-alone e-markets. pontificate alternative architectures
                whereas iterate
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-list"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">SaaS Projects</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-cloud"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Cloud Solutions</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-database"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Backend Development</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-door-closed"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Service Provider for 3rd Parties</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-shield-check"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">App Development</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-server"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Corporate Websites</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                to="/single-service"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberService;
