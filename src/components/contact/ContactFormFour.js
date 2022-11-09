import React , {useRef , useState ,useCallback  }from 'react';
import * as yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha"
import { Formik , Field ,Form ,ErrorMessage } from "formik"

const ContactFormFour = () => {
  const [disableSubmit,setDisableSubmit] = useState(true);
  const captchaRef = useRef(null) ;

const yes_dome = () =>{
  setDisableSubmit(false);
}

const validatioSchemas = yup.object().shape({
  Name: yup.string().required("Required"),
  Company: yup.string().required("Required"),
  Email: yup.string().email("Invalid email address").required("Required"),
  Phone: yup.string().required("Required"),
  Message: yup.string().required("Required"),

});
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
          <div className='  row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-8'>
              <div className='section-heading'>
                <h2>Let's go! Let's assess everything jointly.</h2>
                <p>
                You are welcome to discuss your project or your needs with us. We can collaborate with you to put the best possible solutions into action.
                </p>
              </div>
              <Formik initialValues = {{
                                        Name:"",
                                        Company:"",
                                        Email:"",
                                        Phone:"",
                                        Message:"",
                                      }}
                        validationSchema={validatioSchemas}
                        onSubmit={(values , { resetForm }) => {
                          const data = {
                              Parameter:{
                                Target:"yousef.edu@outlook.com",
                                NotificationProfileId :"c49aec07-0243-433a-b03a-1ca3ba276c68",
                                NotificationTemplateId:"100a30f9-2e4f-4718-b038-7dceb7d0c278",
                                Subject:"Contact form",
                                Parameters :[{
                                  Name:"Name",
                                  Value: values.Name
                                },{
                                  Name:"Company",
                                  Value: values.Company
                                },{
                                  Name:"Email",
                                  Value: values.Email
                                },{
                                  Name:"Phone",
                                  Value: values.Phone
                                },{
                                  Name:"Message",
                                  Value: values.Message
                                }]
                              }
                            }
                            const requestOptions = {
                                   method: 'POST',
                                   headers: { 'Content-Type': 'application/json' },
                                   body: JSON.stringify(data)
                               };
                               const token = captchaRef.current.getValue();
                            fetch('https://gateway.elementserp.com/notification/Notification/send', requestOptions)
                                    .then(response => response.json())
                                    console.log(JSON.stringify(data)) ;
                                     resetForm();
                                    captchaRef.current.reset();
                                    setDisableSubmit(true);
                           
                          }} >
                       {({  errors, touched}) =>(
                        <Form  className='register-form'>
                             <div className='row'>
                                <div className='col-sm-6'>
                                  <label htmlFor='FullName' className='mb-1'>
                                     Full Name <span className='text-danger'>*</span>
                                  </label>
                                      <div className='Form.Control-group mb-3'>
                                      <Field name="Name" className='form-control'/>
                                      {errors.Name && touched.Name ? (
                                        <div>{errors.Name}</div>
                                      ) : null}
                                      </div>
                                  </div>

                                  <div className='col-sm-6 '>
                                    <label htmlFor='CompanyName' className='mb-1'>
                                       Company Name <span className='text-danger'>*</span>
                                    </label>
                                    <div className='Form.Control-group mb-3'>
                                      <Field name="Company" className='form-control'/>
                                      {errors.Company && touched.Company ? (
                                        <div>{errors.Company}</div>
                                      ) : null}
                                      </div>
                                  </div>
                                  <div className='col-sm-6'>
                                    <label htmlFor='Contact Number' className='mb-1'>
                                       Contact Number <span className='text-danger'>*</span>
                                    </label>
                                    <div className='Form.Control-group mb-3'>
                                            <Field name="Phone" className='form-control' />
                                            {errors.Phone && touched.Phone ? (
                                              <div>{errors.Company}</div>
                                            ) : null}
                                          </div>
                                    </div>
                                      <div className='col-sm-6'>
                                            <label htmlFor='email' className='mb-1'>
                                              Email<span className='text-danger'>*</span>
                                            </label>
                                            <div className='Form.Control-group mb-3'>
                                            <Field name="Email" className='form-control' type="email" />
                                            {errors.Email && touched.Email ? <div>{errors.Email}</div> : null}
                                          </div>
                                      
                                      </div>
                                    <div className='col-12'>
                                      <label htmlFor='yourMessage' className='mb-1'>
                                        Message <span className='text-danger'>*</span>
                                      </label>
                                      <div className='Form.Control-group mb-3'>
                                      <Field component="textarea"   style={{ height: '20vh' }} name="Message" className='form-control'/>
                                      {errors.Message && touched.Message ? (
                                              <div>{errors.Message}</div>
                                            ) : null}
                                            
                                      </div>
                                    </div>
                                </div>
                                <ReCAPTCHA
                                   sitekey="6LeqNO0iAAAAADA-hAtgmrbHQn6aK3XWhV2UPu4_"
                                   ref={captchaRef}
                                   onChange={yes_dome}
                                 />
                                      <button type="submit " className='btn btn-primary mt-4'  disabled={disableSubmit}>Submit</button>
                                
                        </Form>
                       )}

              </Formik>
                                 
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default ContactFormFour;
