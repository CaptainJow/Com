import React from 'react';
import "./HeroTitle.css"

const HeroTitle = ({ subtitle, title, desc1 ,desc2 }) => {
  return (
    <>
      {subtitle ? <h5 className='text-warning'>{subtitle}</h5> : ''}
      <h2 className='fw-bold display-5 text-hero' data-aos='fade-up'>
        {title}
      </h2>
      <p className='lead text-hero-p' data-aos='fade-up' data-aos-delay='50'>
        {desc1}
      </p>
      <p className='lead text-hero-p' data-aos='fade-up' data-aos-delay='50'>
        {desc2}
      </p>
    </>
  );
};

export default HeroTitle;
