import React from "react";
import { Link } from "react-router-dom";

const ISIL = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
<section
className='page-header position-relative overflow-hidden ptb-120 bg-dark'
style={{
  background:
    "url('assets/img/page-header-bg.svg')no-repeat bottom left",
}}
>
<div className='container'>
  <div className='row justify-content-between align-items-center'>
    <div className='col-lg-8 col-12'>
      <div className='company-info-wrap align-items-center'>
        <div className='company-logo p-4 bg-white shadow rounded-custom me-4 mt-2'>
          <div className='logo justify-content-center'>
            <img
              src="assets/img/isin_daylight.png"
              alt='company logo'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='company-overview'>
          <h2 className='display-5 fw-bold'>Işıl Daylight</h2>
          <p className='lead mb-0'>FaturaHub ile rahatlıkla sipariş oluşturabilir, ya da farklı kanallar üzerinde mevcut olan siparişlerinizi kolaylıkla Özel Entegratör'e iletebilirsiniz.</p>
        </div>
      </div>
    </div>
    <div className='col-lg-3 col-12'>
      <div className='action-btns mt-4 mt-lg-0 mt-xl-0'>
        <Link to='#' className='btn btn-outline-light' onClick={() => openInNewTab('http://crm.shamssoftware.com')}>
          open website
        </Link>
      </div>
    </div>
  </div>

  <div className='bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5'></div>
</div>
</section>

);
};

export default ISIL;
