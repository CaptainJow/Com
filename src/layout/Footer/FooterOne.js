import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram , FaTwitter , FaGithub } from 'react-icons/fa';

import "./footer_css.css" ; 
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
            <div className='row justify-content-center'>
              <div className='col-sm'>
                <div className='footer-single-col'>
                  <div className='footer-single-col mb-6'>
       
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
              <div className='col-md-6 col-lg-6 '>
                <div className='row'>
              
                  <div className='col-sm'>
                    <div className=''>
                  
                      <div className='col-md-6 col-lg-6 col-xl-6 mx-auto mb-md-0 mb-4 footer-single-col'>
                      <h3> Ankara Office</h3>
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p ><i className="fas fa-home me-3 text-secondary"></i> Ostim Prestij Blokları 100.Yıl Bulvarı, No:55B/16 Ostim, Yenimahalle/Ankara</p>
                      <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        hello@shamssoftware.com
                      </p>
                      <p><i className="fas fa-phone me-3 text-secondary"></i> +90 543 593 54 53</p>
        
                
                      </div>
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
