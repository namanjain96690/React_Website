import React from 'react';
import './About.css'; 
import ACard from './ACard';
function About() {
    return (
    <>
    <div className="my-5">
        <div className="text-center">
          <h1>About Me</h1>
        </div>
        <div className="container-fluid mt-5 about">
        <div className="row">
        <div className=" col-12 col-sm-10 col-lg-8 mx-auto">
              <div className="row gy-5 gx-5 d-flex justify-content-center">
            <ACard />
            <ACard />
      </div>
      </div>
      </div>
      </div>
     </div>
    </>
      );
  }
  
  export default About;