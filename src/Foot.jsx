import React from 'react';
import './Foot.css';
import im from './img/shape-bg.png';
export default function Foot(){
    return(
       <>
       <div className="footer-container">
           <div className="footer-parent">
               <img src={im} />  
          </div>
       </div>
       </>
    )
};