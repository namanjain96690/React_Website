import React from 'react';
import Common from './Common';
import about from '../src/img/about.jpg';
function About() {
    return (
      <Common 
      name='Welcome To About Page' 
      dest='/contact'
      imgsrc={about}
      visit='/contact'
      btnname='Contact Us'

      />    
      );
  }
  
  export default About;