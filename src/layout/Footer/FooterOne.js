import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram , FaTwitter , FaGithub } from 'react-icons/fa';
const FooterOne = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer id="ContactUs" className='footer-section'>
        <div
          className={`footer-top ${footerLight ? 'footer-light' : 'bg-dark'} ${
            footerGradient ? 'bg-gradient' : ''
          }  text-white ptb-120`}
          style={style}
        >
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-md-8 col-lg-4 mb-md-4 mb-lg-0'>
                <div className='footer-single-col'>
                  <div className='footer-single-col mb-4'>
       
                   <img
                    //  src='assets/img/shams-logo.png'
                     // alt='logo'
                     //1 className='img-fluid logo-color shams-logo'
                    />
                  </div>
                  <div className="widget_about">
					      	<p>If you think you have the passion, attitude and capability to join us the next big software companys so that we can get the convers.</p>
					     	<ul className="social">
						   	<li><Link to=""><FaGithub /></Link></li>
						  	<li><Link to=""><FaTwitter /></Link></li>
						  	<li><Link to=""><FaInstagram /></Link></li>
					    	</ul>
            </div>

                 
              
                </div>
              </div>
              <div className='col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0'>
                <div className='row'>
                  <div className='col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0'>
                    <div className='footer-single-col'>
                      <h3>Primary Pages</h3>
                      <ul className='list-unstyled footer-nav-list mb-lg-0'>
                        <li>
                          <Link to='/' className='text-decoration-none'>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to='/about-us' className='text-decoration-none'>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to='/services' className='text-decoration-none'>
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to='/career' className='text-decoration-none'>
                            Career
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/integrations'
                            className='text-decoration-none'
                          >
                            Integrations
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/integration-single'
                            className='text-decoration-none'
                          >
                            Integration Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0'>
                    <div className='footer-single-col'>
                      <h3>Pages</h3>
                      <ul className='list-unstyled footer-nav-list mb-lg-0'>
                        <li>
                          <Link to='/pricing' className='text-decoration-none'>
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to='/blogs' className='text-decoration-none'>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/blog-single'
                            className='text-decoration-none'
                          >
                            Blog Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/contact-us'
                            className='text-decoration-none'
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/career-single'
                            className='text-decoration-none'
                          >
                            Career Single
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/single-service'
                            className='text-decoration-none'
                          >
                            Services Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0'>
                    <div className='footer-single-col'>
                      <h3>Template</h3>
                      <ul className='list-unstyled footer-nav-list mb-lg-0'>
                        <li>
                          <Link
                            to='/contact-us'
                            className='text-decoration-none'
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/help-center'
                            className='text-decoration-none'
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/help-center-single'
                            className='text-decoration-none'
                          >
                            Support Single
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/coming-soon'
                            className='text-decoration-none'
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li>
                          <Link to='/login' className='text-decoration-none'>
                            User Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/career-single'
                            className='text-decoration-none'
                          >
                            Career Single
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

        <div
          className={`footer-bottom ${
            footerLight ? 'footer-light' : 'bg-dark'
          } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
        >
      
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
