import React from 'react'
import "./Section2.css"
import MovingComponent from 'react-moving-text'
import { useInView } from 'react-intersection-observer';
import SP24Recruitment from '../assessts/EmpressSP24_Recruitment.png'
import MentorMenteeReveal from '../assessts/empresspic1.png'

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
        
        <h1>WELCOMING YOU HOME</h1>
        <p>
        <span>EMPRESS Interest Group is an Asian-interest, but not Asian-exclusive, interest group at the University</span>
        <span>of Florida, aiming to create a sisterhood based on strength without sacrificing one's individuality.​</span>
        </p>
        <p>
        We strongly stand by five core values that are included within the acronym, E.M.P.R.E.S.S.:
        </p>
      <p>
        {words.map((word, index) => (
          <MovingComponent
            key={index}
            type="fadeInFromBottom"
            duration="1500ms"
            delay={`${index * 0.2}s`} /*Delay increases with each word*/
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            visible={sectionInView} /*Only animate when in view*/
          >
            <span>{word}</span>
          </MovingComponent>
        ))}
      </p>
      <p>
        Spring 2024 Recruitment
      </p>
      <div className='recruitment'>
        <img src={SP24Recruitment} alt="SP24 Recruitment" />
      </div>
    </div>
  )
}

export default Section2
