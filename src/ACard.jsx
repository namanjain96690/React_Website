import React from 'react';
import './AboutCom/Skills.css';
function ACard(props){
    return(
    <>
<div className="col-md-8 col-lg-6 col-10 mx-auto mb-3">
<div className="carde">
<div className="imgBox">
<img src={props.imgsrc} />
<h1 className='text-center mt-4 text-capitalize'>{props.title}</h1>
</div>
<div className="content">
{props.content}
</div>
</div>
</div>
</>
);
}
export default ACard;