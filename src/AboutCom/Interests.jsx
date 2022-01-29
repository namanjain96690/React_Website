import React from 'react';
function Interests(){
    return(
        <>
        <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Interests
  </a>
  </p>
  <div className="collapse " id="collapseExample">
  <ul className="list-group">
  <li className="list-group-item">Sports Analysis</li>
  <li className="list-group-item">Cricket</li>
  <li className="list-group-item">Tennis</li>
  <li className="list-group-item">Reading</li>
  <li className="list-group-item">Adventures</li>
  <li className="list-group-item">Binge</li>
</ul> 
</div>
        </>
    );
}
export default Interests;
