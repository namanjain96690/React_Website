import React from 'react';
import cardp from "../src/img/card.jpg";
function Card(){
    return(
        <>
                <div className="col-md-6 col-lg-4 col-10 mx-auto mb-3">
                <div className="card">
                 <img src={cardp} className="card-img-top" alt="..." />
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        </>
    )
}
export default Card;