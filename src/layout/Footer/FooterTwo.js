import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="cyber-footer color-img">
      <div className="cyber-footer-top ptb-85">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div className="">
                <div className="footer-single-col mb-4">
                 <h4 style={{color :"black"}}>Shams Software</h4>
                </div>
                <p className="text-color-blue">
                If you think you have the passion, attitude and capability to join us the next big software companys so that we can get the convers.
                </p>
                <ul className="list-unstyled list-inline cyber-footer-social-list mb-0">
                  <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 mt-4 mt-md-0 mt-lg-0">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-color-black">Quick Links</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link to="/contact-us" className="text-decoration-none">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/about-us" className="text-decoration-none">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="text-decoration-none">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/career" className="text-decoration-none">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/integrations"
                          className="text-decoration-none"
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-color-black">Contact Info</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link to="/" className="text-decoration-none">
                          Phone: 0850 304 77 02
                        </Link>
                      </li>
                      <li>
                        <Link to="/about-us" className="text-decoration-none">
                          Email: info@shamssoftware.com
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="text-decoration-none">
                        Büyükesat Mahallesi, Koza Sk. No:85/9, 06700 Çankaya/Ankara
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
