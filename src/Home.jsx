import React from 'react';
import Profile from './Profile';
import Foot from './Foot';
import './App.css';
function Home() {
    return (
        <>
        <div className="home-contaier">
        <Profile />
        <Foot />
        </div>
        </>
        );
  }
  
  export default Home;