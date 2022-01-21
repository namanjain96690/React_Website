import React from 'react';
function Card(props){
    return(
        <>
                <div className="col-md-6 col-lg-4 col-10 mx-auto mb-3">
                <div className="card " style={{width: '18rem;'}}>
                 <img src={props.imgsrc} style={{height: '20rem',opacity:'0.8'}} className="card-img-top" alt="..." />
                   <div className="card-body">
                     <h5 className="card-title">{props.title}</h5>
                     <p className="card-text">{props.content}</p>
                     <div className="d-flex justify-content-between">
                     <a href={props.link1} class="btn con-btn">Github</a>
                     <a href={props.link2} class="btn con-btn">Demo</a>
                     </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default Card;