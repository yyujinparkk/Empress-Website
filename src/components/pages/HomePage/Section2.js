import React from 'react'
import "./Section2.css"
import MovingComponent from 'react-moving-text'
import { useInView } from 'react-intersection-observer';
import SP24Recruitment from '../../../assessts/EmpressSP24_Recruitment.png'
import {Link, NavLink} from "react-router-dom"

function Section2() {
  const words = [
    'Empowering',
    'Motivating',
    'Persevering',
    'Respecting and',
    'Exemplifying',
    'Strength through',
    'Sisterhood'
   ];

   const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="section2">
        
        <h1>welcoming you home!</h1>
        <span class="dash-break"></span>
        <p>
        <span className="block-span">EMPRESS Interest Group is an Asian-interest, but not Asian-exclusive, interest group at the University</span>
        <span className="block-span">of Florida, aiming to create a sisterhood based on strength without sacrificing one's individuality.​</span>
        </p>
        <p>
        We strongly stand by five core values that are included within the acronym, E.M.P.R.E.S.S.:
        </p>
        <div className="acronym-animated">
        {words.map((word, index) => (
          <div
            key={index}
            className={`acronym-item ${sectionInView ? 'visible' : ''}`}
          >
            <span className="acronym-letter">{word.charAt(0)}</span>
            <span className="acronym-word">{word.slice(1)}</span>
          </div>
        ))}
      </div>
      <h2>
        Spring 2024 Recruitment
      </h2>
      <div className='recruitment'>
        <img src={SP24Recruitment} alt="SP24 Recruitment" />
      </div>
      <p className="learn-more">
        <Link to="/Recruitment" className="learn-more-link">learn more</Link>
      </p>
    </div>
  )
}

export default Section2
