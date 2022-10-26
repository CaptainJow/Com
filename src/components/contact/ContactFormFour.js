import React , {useState}from 'react';
import { Form  } from 'react-bootstrap';


const ContactFormFour = () => { 
  const [FullName, setFullName] = useState("") ;
 const[CompanyName , setCompanyName] = useState("") ; 
 const [ContactNumber , setContactNumber] = useState("") ; 
 const[email , setemail] = useState("") ; 
 const [body , setbody] = useState("") ; 
 const [validated, setValidated] = useState(false);
 
 const data = {
  Parameter:{
    Target:"yousef.edu@outlook.com",
    NotificationProfileId :"c49aec07-0243-433a-b03a-1ca3ba276c68",
    NotificationTemplateId:"100a30f9-2e4f-4718-b038-7dceb7d0c278",
    Subject:"Contact form",
    Parameters :[{
      Name:"Name",
      Value: FullName
    },{
      Name:"Company",
      Value: CompanyName
    },{
      Name:"Email",
      Value: email
    },{
      Name:"Phone",
      Value: ContactNumber
    },{
      Name:"Message",
      Value: body
    }]
  }
}
const checkData = () =>{
  if (FullName ===""){return true}
  if (CompanyName ===""){return true}
  if (ContactNumber ===""){return true}
  if (email ===""){return true}
  if (body ===""){return true}
}
const checkFilled = () => {
  if (FullName !=="" && CompanyName !=="" && ContactNumber !=="" && email !=="" && body !=="" ){   
  setFullName("") ; 
  setCompanyName("") ;
  setContactNumber("") ; 
  setemail("") ; 
  setbody("") ;
  return true; 
}

}

 const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (checkData() ) {
    event.preventDefault();
    event.stopPropagation();
    setValidated(false);
  }

  setValidated(true);
  if(validated){
   const requestOptions = {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
 };
 
   fetch('https://gateway.elementserp.com/notification/Notification/send', requestOptions)
   .then(response => response.json())
  } 
  checkFilled(); 

}
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
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-8'>
              <div className='section-heading'>
                <h2>Let's go! Let's assess everything jointly.</h2>
                <p>
                You are welcome to discuss your project or your needs with us. We can collaborate with you to put the best possible solutions into action.
                </p>
              </div>
               <Form noValidate validated={validated}  className='register-form'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <label htmlFor='FullName' className='mb-1'>
                      Full Name <span className='text-danger'>*</span>
                    </label>
                    <div className='Form.Control-group mb-3'>
                      <Form.Control
                        value={FullName}
                        required
                        type="text"
                        className='form-control'
                        placeholder="Full Name"
                        defaultValue="Defualt"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                  </div>
                  <div className='col-sm-6 '>
                    <label htmlFor='CompanyName' className='mb-1'>
                      Company Name <span className='text-danger'>*</span>
                    </label>
                    <div className='Form.Control-group mb-3'>
                      <Form.Control
                        required
                        name="CompanyName"
                        value={CompanyName}
                        type='text'
                        className='form-control'
                        id='CompanyName'
                        placeholder='Company Name'
                        aria-label='Company Name'
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='Contact Number' className='mb-1'>
                    Contact Number <span className='text-danger'>*</span>
                    </label>
                    <div className='Form.Control-group mb-3'>
                      <Form.Control
                        required
                        name="ContactNumber"
                        value={ContactNumber}
                        type='text'
                        className='form-control'
                        id='Contact Number'
                      
                        placeholder='Contact Number'
                        aria-label='Contact Number'
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='email' className='mb-1'>
                      Email<span className='text-danger'>*</span>
                    </label>
                    <div className='Form.Control-group mb-3'>
                      <Form.Control
                        required
                        name="email"
                        value={email}
                        type='email'
                        className='form-control'
                        id='email'
                        
                        placeholder='Email'
                        aria-label='Email'
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='yourMessage' className='mb-1'>
                      Message <span className='text-danger'>*</span>
                    </label>
                    <div className='Form.Control-group mb-3'>
                      <textarea
                         required
                         name="body"
                        value={body}
                        className='form-control'
                        id='yourMessage'
                        
                        placeholder='
                        Can you inform us about your project or your needs?'
                        style={{ height: '120px' }}
                        onChange={(e) => setbody(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type='button' className='btn btn-primary mt-4' onClick={handleSubmit} >
                Send
                </button>
              </Form> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormFour;
