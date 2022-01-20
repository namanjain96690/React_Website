import React from 'react';  
import { FaFacebookSquare , FaInstagramSquare , FaTwitterSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa";
import Typical from 'react-typical';
import Resume from './Resume.pdf';
import './Profile.css';
function Profile(){
 return(
 <> <div className='profile-container'>
   <div className="profile-parent">
       <div className="profile-details text-center">
           <div className="colz ">
               <div className="colz-icon">
               <a href="#">
               <FaFacebookSquare />
               </a>
               <a href="https://www.instagram.com/naman_jain__21/">
                   <FaInstagramSquare />
               </a>
               <a href="https://twitter.com/21Njain">
                   <FaTwitterSquare />
               </a>
               <a href="https://www.linkedin.com/in/namanjain96690/">
                   <FaGithubSquare />
               </a>
               <a href="https://www.linkedin.com/in/namanjain96690/">
               <FaLinkedin/>
               </a>
           </div>
           </div>
           <div className="profile-details-name">
               <span className="primary-text">
                   Hello I'M <span className="highlighted-text"> Naman</span>
               </span>
           </div>
           <div className="profile-details-role">
               <span className="primary-text">
                   <h1>
                    <Typical
                     loop={Infinity}
                     steps={[
                         "Enthusiastic",
                         1000,
                         "Developer",
                         1000,
                         "Student",
                         1000,
                         "Awesome",
                         1000,
                     ]}
                    />    
               </h1>
               <span className='profile-role-tagline'>
               Inquisitive, energetic computer science engineer skilled in leadership, with a strong foundation in math, logic, and web development.
               </span>
               </span>
           </div>
           <div className="profile-options">
               <button className='btn btn-outline-primary'>Hire Me</button>
               <a href={Resume} download='naman.pdf' className='btn btn-outline-danger'>Resume</a>
           </div>
       </div>
       <div className="profile-picture">
           <div className="profile-picture-background">
                
           </div>
       </div>
   </div>
 </div>
 </>);
}
export default Profile;