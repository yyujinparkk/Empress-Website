import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
import EmpressLogo from "../assessts/EmpressLogo.png"
import IgLogo from "../assessts/instagram-white-icon.png"
import LinkedInLogo from "../assessts/linkedin_logo_white2.png"
import FacebookLogo from "../assessts/facebook_logo_white.png"

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
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/events">Recruitment</NavLink>
        </li>
      </ul>
      <Link to="/" className='EmpressLogo'>
        <img src={EmpressLogo} alt="EmpressLogo" />
      </Link>
      <ul className={menuOpen ? "open right-menu" : "right-menu"}>
        <li>
          <NavLink to="/about">Members</NavLink>
        </li>
        <li>
          <NavLink to="/services">Gallery</NavLink>
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
      <div>
      <Link to="https://www.instagram.com/empressinterestgroup/?hl=en" className='iglogo'>
        <img src={IgLogo} alt="Instagram Logo" />
      </Link>
      </div>
      <div>
      <Link to="https://www.linkedin.com/company/empress-interest-group/" className='linkedin_logo'>
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
      </Link>
      </div>
      <div>
      <Link to="https://www.facebook.com/ufempress/" className='facebook_logo'>
        <img src={FacebookLogo} alt="Facebook Logo" />
      </Link>
      </div>
    </nav>
  );
};

export default Navbar
