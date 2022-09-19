import React from 'react';
import { Link } from 'react-router-dom';

const IntegrationThree = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <section className='our-integration ptb-120 bg-light'>
        <div className='container'>
          <div className='position-relative w-100'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='position-relative text-decoration-none connected-app-single bg-white border border-2
                 bg-white mt-0 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5' onClick={() => openInNewTab("https://www.edmbilisim.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/edmbilisim-transparent.png'
                        width='40'
                        alt='EDM Bilişim'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>EDM Bilişim</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 mt-lg-0 
                mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5' onClick={() => openInNewTab("https://www.uyumsoft.com/")} >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/uyumsoft.png'
                        width='40'
                        alt='Uyumusoft'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Uyumsoft</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-primary-soft px-3 py-2 text-primary'>
                    New
                  </span>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.ideasoft.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/ideasoft-logo-transparent.png'
                        width='40'
                        alt='ideasoft'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Ideasoft</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger'>
                    Premium
                  </span>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.kocsistem.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/kocsistem-logo.png'
                        width='40'
                        alt='Koç Sistem'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Koç Sistem</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-success-soft px-3 py-2 text-success'>
                    Free
                  </span>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.peoplesay.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/people-say-logo-transparent.png'
                        width='40'
                        alt='people say'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>People Say</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger'>
                    Premium
                  </span>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.turkcell.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/Turkcell-logo.png'
                        width='40'
                        alt='Turkcell'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Turkcell</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.qnbfinansbank.com/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/QNB-logo.png'
                        width='40'
                        alt='QNB'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>QNB</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://sovos.com/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/foriba.png'
                        width='40'
                        alt='Foriba'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Foriba</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.kolaysoft.com.tr/")} >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/KOLAYSOFT.png'
                        width='40'
                        alt='KOLAYSOFT'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>KOLAYSOFT</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-warning-soft px-3 py-2 text-warning'>
                    Popular
                  </span>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.izibiz.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/izi.png'
                        width='40'
                        alt='Izibiz'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Izibiz</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://www.digitalplanet.com.tr/")}>
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/digital.png'
                        width='40'
                        alt='Digital Planet'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Digital Planet</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  onClick={() => openInNewTab("https://winfluencer.app/")} >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/partners/winfluencer.PNG'
                        width='40'
                        alt='Winfluencer'
                        className='img-fluid fit'
                      />
                    </div>
                    <h5>Winfluencer</h5>
                    <p className='mb-0 text-muted'>
                      Globally engage tactical niche markets rather than
                      client-based competently generate unique e-services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationThree;
