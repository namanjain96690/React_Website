import React from 'react';
import Common from './Common';
import prof from '../src/img/profile.JPG';
function Home() {
    return (
        <Common 
        name=' Grow Your business with ' 
        dest='/service'
        imgsrc={prof}
        visit='/service'
        btnname='Get Started'
        /> 
        );
  }
  
  export default Home;