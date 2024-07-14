import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import {About, Contact, HomePage, Services, Products, Events} from "./components/pages";

function App() {
  return (
    <div> 
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;