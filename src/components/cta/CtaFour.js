import React from 'react';
import { Link } from 'react-router-dom';

const CtaFour = () => {
  return (
    <>
      <section
        className='cta-subscribe  bg-dark ptb-120 position-relative overflow-hidden'
      >
        <div className='container'>
          <div className='row align-items-center justify-content-lg-between'>
            <div className='col-lg-6 col-xl-6'>
              <div className='app-two-mockup position-relative text-center pe-5'>
                <img
                  src='assets/img/app-two-mockup.png'
                  alt='App mockup'
                  className='img-fluid position-relative z-5'
                />
              </div>
            </div>
            <div className='col-lg-6 col-xl-6 col-md-10'>
              <div className='app-two-cta-right px-md-0 pt-5 pt-md-0'>
                <div className='section-heading text-white'>
                  <h2 className='text-white'>
                    Powerful Solutions for Your Business Needs
                  </h2>
                  <p>
                    Quickly incubate functional channels with multidisciplinary
                    architectures authoritatively fabricate.
                  </p>
                </div>
                <div className='action-btns mt-5'>
                  <Link to='/contact-us' className='btn btn-outline-light'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-3
              position-absolute
              bg-dark-light
              left-5
            '
          ></div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-1
              position-absolute
              bg-warning
              right-5
            '
          ></div>
        </div>
      </section>
    </>
  );
};

export default CtaFour;
