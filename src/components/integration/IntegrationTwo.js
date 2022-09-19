import React from 'react';
import { Link } from 'react-router-dom';
import './integration.css' ;
import SectionTitle from '../common/SectionTitle';

const IntegrationTwo = () => {
  return (
    <>
      <section className='integration-section bg-light ptb-120'>
        <div className='container'>
          <div className='row align-items-center justify-content-lg-between'>
            <div className='col-lg-6 col-md-12'>
              <SectionTitle
                subtitle=''
                title='Our Partners'
                description='  Dynamically pursue convergence rather than 24/7 process
                  improvements develop end-to-end customer service action items.'
                leftAlign
              />
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='text-lg-end mb-5 mb-lg-0' data-aos='fade-left'>
                <Link to='/partners' className='btn btn-primary'>
                  View All Partners
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='integration-wrapper position-relative w-100'>
                <ul className='integration-list list-unstyled mb-0'>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/edmbilisim-transparent.png'
                        alt='integration'
                        className='img-fluid fit'
                      />
                      <h6 className='mb-0 mt-4'>EDM Bilişim</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/uyumsoft.png'
                        alt='integration'
                        className='img-fluid fit'
                      />
                      <h6 className='mb-0 mt-4'>uyumsoft</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/ideasoft-logo-transparent.png'
                        alt='integration'
                        className='img-fluid fit'
                      />
                      <h6 className='mb-0 mt-4'> Ideasoft
                      </h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/kocsistem-logo.png'
                        alt='integration'
                        className='img-fluid fit'
                      />
                      <h6 className='mb-0 mt-4'>Koc Sistem</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/people-say-logo-transparent.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>People Say</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='50'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/Turkcell-logo.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>Turkcell</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/QNB-logo.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>QNB</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/foriba.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>Foriba</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/KOLAYSOFT.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>KOLAYSOFT</h6>
                    </div>
                  </li>
                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/izi.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>izibiz</h6>
                    </div>
                  </li>

                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/digital.png'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>Digital Planet</h6>
                    </div>
                  </li>

                  <li data-aos='fade-up' data-aos-delay='100'>
                    <div className='single-integration'>
                      <img
                        src='assets/img/partners/winfluencer.PNG'
                        alt='integration'
                        className='img-fluid'
                      />
                      <h6 className='mb-0 mt-4'>winfluencer</h6>
                    </div>
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

export default IntegrationTwo;
