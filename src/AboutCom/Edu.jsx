import React from 'react';
function Edu(){
    return(<>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        BTECH COE
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h5>Thapar Institute Of Engineering And Technology</h5>
      <h5 className='d-flex flex-column align-items-sm-center justify-content-between'>
      <span className="badge bg-info p-2 my-sm-2">2019-Present</span>
      <span className="badge bg-info p-2">C.G.P.A-9.53</span>
      </h5>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Senior Secondary School
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h5>The Asian School Dehradun</h5>
      <h5 className='d-flex justify-content-between flex-column align-items-sm-center'>
      <span className="badge bg-danger p-2 my-sm-2">2017-2019</span>
      <span className="badge bg-danger p-2">Percentage-96.7</span>
      </h5>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Secondary School
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h5>The Asian School Dehradun</h5>
      <h5 className='d-flex flex-column align-items-sm-center justify-content-between flex-sm-column'>
      <span className="badge bg-danger p-2 my-sm-2">2015-2017</span>
      <span className="badge bg-danger p-2">C.G.P.A-10</span>
      </h5>
        </div>
    </div>
  </div>
</div>
    </>);
}
export default Edu;