import React from 'react'
import './Portfolio.css'
import portfolio_image_1 from '../assets/folio-1.jpg'
import portfolio_image_2 from '../assets/folio-2.jpg'
import portfolio_image_3 from '../assets/folio-3.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio-what'>What I Did ?</div>
        <div className='portfolio-header'>Portfolio</div>
        <div className='portfolio-image-container'>
            <img className='work-image' src={portfolio_image_1} alt='My work'/>
            <div className='image-inside-1'>
                <h3 className='portfolio-header'>Web designing</h3>
                <p className='portfolio-content'>Category: Web templates</p>
            </div>
            <img className='work-image' src={portfolio_image_2} alt='My work'/>
            <div className='image-inside-2'>
                <h3 className='portfolio-header'>Web designing</h3>
                <p className='portfolio-content'>Category: Web templates</p>
            </div>
            <img className='work-image' src={portfolio_image_3} alt='My work'/>
            <div className='image-inside-3'>
                <h3 className='portfolio-header'>Web designing</h3>
                <p className='portfolio-content'>Category: Web templates</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
