import React from 'react';

const ContactFormTwo = () => {
  return (
    <>
      <section
        className='contact-us-form pt-60 pb-120'
        style={{
          background:
            "url('assets/img/shape/contact-us-bg.svg')no-repeat center bottom",
        }}
      >
        <div className='container'>
          <div className='row justify-content-lg-between align-items-center'>
            <div className='col-lg-6 col-md-8'>
              <div className='section-heading'>
                <h2>Let's go! Let's assess everything jointly.</h2>
                <p>
                You are welcome to discuss your project or your needs with us. We can collaborate with you to put the best possible solutions into action.
                </p>
              </div>
              <form action='#' className='register-form'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <label htmlFor='FullName' className='mb-1'>
                      Full Name <span className='text-danger'>*</span>
                    </label>
                    <div className='input-group mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='Full Name'
                        required
                        placeholder='Full Name'
                        aria-label='Full Name'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6 '>
                    <label htmlFor='CompanyName' className='mb-1'>
                      Company Name
                    </label>
                    <div className='input-group mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='CompanyName'
                        placeholder='Company Name'
                        aria-label='Company Name'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='Contact Number' className='mb-1'>
                    Contact Number <span className='text-danger'>*</span>
                    </label>
                    <div className='input-group mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='Contact Number'
                        required
                        placeholder='Contact Number'
                        aria-label='Contact Number'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='email' className='mb-1'>
                      Email<span className='text-danger'>*</span>
                    </label>
                    <div className='input-group mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        required
                        placeholder='Email'
                        aria-label='Email'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='yourMessage' className='mb-1'>
                      Message <span className='text-danger'>*</span>
                    </label>
                    <div className='input-group mb-3'>
                      <textarea
                        className='form-control'
                        id='yourMessage'
                        required
                        placeholder='
                        Can you inform us about your project or your needs?'
                        style={{ height: '120px' }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary mt-4'>
                Send
                </button>
              </form>
            </div>
            <div className='col-lg-5 col-md-10'>
              <div className='contact-us-img'>
                <img
                  src='assets/img/contact-us-img-2.svg'
                  alt='contact us'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormTwo;
