import React from 'react';
import {NavLink} from 'react-router-dom';
function Common(props){
    return(
        <>
<section id="header" className='nav_bg d-flex align-items-center justify-content-center'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center">
                    <h1 className="d-flex flex-column">
                       {props.name} <strong className="brand-name">Naman Jain</strong>
                    </h1>
                    <h2 className="my-3">
                        We are a team of talented developer making websites
                    </h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className='btn btn-get-started'>{props.btnname}</NavLink>
                    </div>
                </div>
            <div className=" col-lg-6 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="df" />
            </div>
           </div>
        </div>
        </div>
    </div>
</section>
</>
    );
}
export default Common;