import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <>
      <section
        className='error-section ptb-120 min-vh-100 w-100 d-flex flex-column justify-content-center color-img'
      >
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-5 col-md-6'>
              <div className='error-page-content-wrap'>
                <h2 className='error-404 text-color-black'>404</h2>
                <h1 className='display-5 fw-bold'>Page Not Found</h1>
                <p className='lead'>
                   Please enter the correct page address , or you can Go back home by pressing the button bellow .{' '}
                </p>

                <Link to='/' className='btn btn-primary mt-4'>
                  Go Back Home
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-8 mt-5 d-none d-md-block d-lg-block'>
              <div className='hero-img position-relative circle-shape-images'>
                <ul className='position-absolute animate-element parallax-element circle-shape-list'>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-0 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.02'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-1 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.04'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-2 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.04'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-3 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-4 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-5 hero-1'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundScreen;
