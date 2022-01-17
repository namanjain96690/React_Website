import React from 'react';
import Card from './Card';
function Services() {
    return (
      <>
      <div className="mb-5">
        <div className="text-center">
          <h1>Our Services</h1>
        </div>
        <div className="container-fluid mt-5">
        <div className="row">
        <div className="col-10 mx-auto">
              <div className="row gy-5 gx-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
      </div>
      </div>
      </div>
      </div>
     </div>
      </>
    );
  }
  
  export default Services;