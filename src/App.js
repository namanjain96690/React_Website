import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Foot from './Foot';
import Navbar from './Navbar';
import {Routes , Route, Navigate} from 'react-router-dom';
function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes> 
    </>
  );
}

export default App;
