import React from 'react'
import './About.css'
import {Link} from "react-router-dom"
import MentorMenteeReveal from "../../assessts/MentorMenteeRevealEmpress.JPG"
import Culture from "../../assessts/culture.jpg"
import SP23 from "../../assessts/SP23_ver2.png"

export const About = () => {
  return (
    <div className='about'>
      who we are
      <p>
      <span>EMPRESS is an Asian-interest, but not Asian-exclusive, interest group dedicated to fostering five core values:</span>
      <span>Empowering, Motivating, Persevering, Respecting, and Exemplifying Strength through Sisterhood.</span>
      <span>EMPRESS Interest Group was founded on April 17, 2014 by two women at the University of Florida who believed</span> 
      <span>in the need for the implementation of a values-based system and emphasis on creating strong female leaders</span>
      <span>of the Asian-interest sorority upon which it is based. Today, EMPRESS is 29 active members strong</span>
      <span>and continues to highlight the importance of being a strong female leader without sacrificing one's individuality.</span>
      <div className='pic-container'>
        <div className='pic1'>
          <img src={MentorMenteeReveal} alt='Mentor Mentee Reveal'/>
        </div>
        <div className='pic2'>
          <img src={Culture} alt='Culture Photoshoot'/>
        </div>
        <div className='pic3'>
          <img src={SP23} alt='Culture Photoshoot'/>
        </div>
      </div>
      </p>
      <h1>
       our philanthropy
       <p>
       <span>EMPRESS' philanthropy is mental health awareness.</span>
       </p>
       <p>
       <span>We work alongside the National Alliance on Mental Illness (NAMI) to promote mental</span>
       <span>health awareness on-campus at the University of Florida and in the greater Gainesville</span>
       <span>community. Through volunteering, fundraising, forums, donations, and promotion of</span>
       <span>mental health acceptance on our campus, we stand for the belief that mental health is</span>
       <span>extremely important and close to our hearts. We look forward to spreading more</span>
       <span>knowledge about mental health, the importance of taking initiative in the care of your</span>
       <span>own mental health, and striving to help those who suffer from mental health complications.</span>
       </p>
       <p>
        <span>To learn more, visit: <Link to="https://www.nami.org/" className="nami-link" target="_blank">https://www.nami.org/</Link></span>
       </p>
      </h1>
    </div>
  )
}

export default About