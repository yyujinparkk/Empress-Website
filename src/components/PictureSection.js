import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import './PictureSection.css'

function PictureSection() {
  return (
    <div className='img-container'>
      <img src='../assessts/empressgradpic2.JPG'></img>
      <h1>est. 2014</h1>
      <h2>UF EMPRESS Interest Group</h2>
      <Link to="/about" className="learn-more-btn">
      <Button
          className='btns'
          variant='outline-primary'
          size='lg'
      >
        Learn More
      </Button>
      </Link>
    </div>
  )
}

export default PictureSection
