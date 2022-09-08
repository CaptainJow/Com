import React from 'react';

const HeroTitle = ({ subtitle, title, desc }) => {
  return (
    <>
      {subtitle ? <h5 className='text-warning'>{subtitle}</h5> : ''}
      <h2 className='fw-bold display-5' data-aos='fade-up'>
        {title}
      </h2>
      <p className='lead' data-aos='fade-up' data-aos-delay='50'>
        {desc}
      </p>
    </>
  );
};

export default HeroTitle;
