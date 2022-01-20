import React, { useState } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
    
 const [data, setData]=useState(
   {
     fullname:'',
     phone:'',
     email:'',
     message:'',
   }
 );
const inputEvent=(event)=>{
   const {name, value}=event.target;
   setData((preVal)=>{
     return{
       ...preVal,
       [name]:value,
     };
   });
};

  const formSubmit=(event) =>{
  event.preventDefault();
  emailjs.sendForm('service_fqj481s', 'template_nmf35bm', event.target, 'user_7BMGWO1Z2fUMmIw931QR0')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  setData(
    {
      fullname:"",
      email:"",
      phone:"",
    message:""    }
  );
  }


  return (
      <>
      <div className="my-5">
        <div className="text-center">
          <h1>Contact Me</h1>
        </div>
        <div className="container-fluid mt-5">
        <div className="row">
        <div className="col-10 mx-auto">
        <form onSubmit={formSubmit}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text"
   class="form-control" 
   id="exampleFormControlInput1"
   name='fullname'
   value={data.fullname}
   onChange={inputEvent}
   placeholder="Enter your Name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" 
  class="form-control" 
  id="exampleFormControlInput1"
  name='phone'
   value={data.phone}
   onChange={inputEvent} 
  placeholder="Phone Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email"
   class="form-control" 
   id="exampleFormControlInput1"
   name='email'
   value={data.email}
   onChange={inputEvent}
    placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1" 
   rows="3"
   name='message'
   value={data.message}
   onChange={inputEvent}
   ></textarea>
</div>
<div class="col-12">
    <button class="btn con-btn" type="submit">Submit form</button>
  </div>
</form>
      </div>
      </div>
      </div>
     </div>
      </>
    );
  }
  
  export default Contact;