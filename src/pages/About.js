import './About.css';
import React from 'react';
import about_image from './../assets/man.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
          <img src={about_image} alt='About pic'></img>
        </div>
        <div className='about-right'>
          <div className='about-description'>
            Who Am I ?
          </div>
          <div className='about-title'>
            About Me
          </div>
          <div className='about-content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
            culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
          </div>
          <button>
            Download CV
          </button>
        </div>
    </div>
  )
}

export default About
