import React from 'react';
import './About.css'; 
import ACard from './ACard';
import Adata from './Adata';
function About() {
    return (
    <>
    <div className="my-5">
        <div className="text-center">
          <h1>About Me</h1>
        </div>
        <div className="container-fluid mt-5 about">
        <div className="row">
        <div className=" col-sm-10 col-lg-10 mx-auto">
              <div className="row gy-5 gx-5 d-flex justify-content-center">
            {Adata.map((val)=>{
              return (
              <ACard key={val.id}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     content={val.content}
              />
              );
            })}

      </div>
      </div>
      </div>
      </div>
     </div>
    </>
      );
  }
  
  export default About;