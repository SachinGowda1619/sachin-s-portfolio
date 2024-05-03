import React from 'react'
import './About.css';
import man_image from '../assets/man.png';
import pencil_case from '../assets/pencil-case.svg';
import responsive from '../assets/responsive.svg';
import toolbox from '../assets/toolbox.svg'
import analytics from '../assets/analytics.svg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <img className='about-image' src={man_image} alt='About_Image'/>
        <div className='about-text'>
          <div className='about-who'>
            Who Am I ?
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
      <div className='about-bottom'>
        <div className='about-what'>What I Do ?</div>
        <div className='about-header'>Service</div>
        <div className='about-service-container'>
          <div>
            <img className='about-service-image' src={pencil_case} alt='UI/UX design'></img>
            <h3 className='about-service-name'>UI/UX
              <br></br>
              design
            </h3>
            <p className='service-description'>Designing of user friendly responsive user interfaces</p>
          </div>
          <div>
            <img className='about-service-image' src={responsive} alt='Web/App development'></img>
            <h3 className='about-service-name'>Web/App
              <br></br>
              development
            </h3>
            <p className='service-description'>Dynamic and functioanl development of both web and mobile applications</p>
          </div>
          <div>
            <img className='about-service-image' src={toolbox} alt='Backend development'></img>
            <h3 className='about-service-name'>Backend
              <br></br>
              development
            </h3>
            <p className='service-description'>Implementing secure and reliable backend functioanlities</p>
          </div>
          <div>
            <img className='about-service-image' src={analytics} alt='Deployemnt and maintanance'></img>
            <h3 className='about-service-name'>Deployemnt/
              <br></br>
              maintanance
            </h3>
            <p className='service-description'>Deploying the sites into real time and maintaing with support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
