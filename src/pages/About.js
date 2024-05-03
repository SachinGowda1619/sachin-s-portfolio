import React from 'react'
import './About.css';
import man_image from '../assets/man.png'

const About = () => {
  return (
    <div className='about'>
      <img className='about-image' src={man_image} alt='About_Image'/>
      <div className='about-text'>
        <div className='about-who'>
          Who Am I?
        </div>
        <div className='about-header'>
          About Me
        </div>
        <div className='about-content'>
          I am a full stack developer with 4+ years of work experience
          <br></br>
          I have a master degree from University of Mysore
          <br></br>
          I can work on front end design of both web and mobile applications and also on the backend side of creating and implementing API's and database interactions
        </div>
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default About
