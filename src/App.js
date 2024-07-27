import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import {About, Contact, HomePage, Gallery, Members, Recruitment} from "./components/pages";

function App() {
  return (
    <div className= 'app-container'> 
      <Navbar />
      <div className='content'>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/members' element={<Members />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;