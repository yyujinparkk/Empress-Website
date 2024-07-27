import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import IgLogo from "../assessts/instagram-white-icon.png"
import LinkedInLogo from "../assessts/linkedin_logo_white2.png"
import FacebookLogo from "../assessts/facebook_logo_white.png"

function Footer() {
  return (
    <footer className="footer">
      <div className={'logos-footer'}>
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
        <p>© 2024 UF Empress Interest Group</p>
    </footer>
  )
}

export default Footer
