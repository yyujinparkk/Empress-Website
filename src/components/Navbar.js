import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
import EmpressLogo from "../assessts/EmpressLogo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="menu" onClick={() =>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="left-menu">
        <li>
          <NavLink to="/">
            Home
            </NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
      </ul>
      <Link to="/" className='EmpressLogo'>
        <img src={EmpressLogo} alt="EmpressLogo" />
      </Link>
      <ul className={menuOpen ? "open right-menu" : "right-menu"}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
         <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ul className={menuOpen ? 'open combined-menu' : 'combined-menu'}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
