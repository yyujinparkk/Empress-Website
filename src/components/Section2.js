import React from 'react'
import "./Section2.css"
import MovingComponent from 'react-moving-text'

function Section2() {
  return (
    <div className="section2">
        <h1>WELCOMING YOU HOME</h1>
        <p>
        <span>EMPRESS Interest Group is an Asian-interest, but not Asian-exclusive, interest group at the University</span>
        <span>of Florida, aiming to create a sisterhood based on strength without sacrificing one's individuality.​</span>
        </p>
        <p>
        We strongly stand by five core values that are included within the acronym, E.M.P.R.E.S.S.
        </p>
        <p>
        <MovingComponent
        type="fadeInFromBottosm"
        duration="1000ms"
        delay="0.5s"
        direction="normal"
        timing="ease"
        iteration="5"
        fillMode="none">
            <span>
            Empowering
            </span>
            <span>
            Motivating
            </span>
            <span>
            Persevering
            </span>
            <span>
            Respecting and
            </span>
            <span>
            Exemplifying
            </span>
            <span>
            Strength through
            </span>
            <span>
            Sisterhood
            </span>
        </MovingComponent>
        </p>
    </div>
  )
}

export default Section2
