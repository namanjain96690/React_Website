import React from 'react';
import Card from './Card';
import Cdata from './Cdata';
function Services() {
    return (
      <>
      <div className="my-5">
        <div className="text-center">
          <h1>Some Projects</h1>
        </div>
        <div className="container-fluid mt-5">
        <div className="row">
        <div className="col-10 mx-auto">
              <div className="row gy-5 gx-5">
            {Cdata.map((val)=>{
              return (
              <Card key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    content={val.content}
                    link1={val.link1}
                    link2={val.link2}
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
  
  export default Services;