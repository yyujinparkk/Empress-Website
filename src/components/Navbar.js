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
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/recruitment">recruitment</NavLink>
        </li>
      </ul>
      <Link to="/" className='EmpressLogo'>
        <img src={EmpressLogo} alt="EmpressLogo" />
      </Link>
      <ul className={menuOpen ? "open right-menu" : "right-menu"}>
        <li>
          <NavLink to="/members">members</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">gallery</NavLink>
        </li>
        <li>
         <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      <ul className={menuOpen ? 'open combined-menu' : 'combined-menu'}>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/recruitment">recruitment</NavLink>
        </li>
        <li>
          <NavLink to="/members">members</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      <div className={'logos'}>
        <div>
        <Link to="https://www.instagram.com/empressinterestgroup/?hl=en" target="_blank" className='iglogo'>
          <img src={IgLogo} alt="Instagram Logo" />
        </Link>
        </div>
        <div>
        <Link to="https://www.linkedin.com/company/empress-interest-group/" target="_blank" className='linkedin_logo'>
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
        </Link>
        </div>
        <div>
        <Link to="https://www.facebook.com/ufempress/" target="_blank" className='facebook_logo'>
          <img src={FacebookLogo} alt="Facebook Logo" />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
