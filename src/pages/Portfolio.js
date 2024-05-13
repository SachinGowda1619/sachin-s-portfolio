import React from 'react'
import './Portfolio.css'
import portfolio_image_1 from '../assets/folio-1.jpg'
import portfolio_image_2 from '../assets/folio-2.jpg'
import portfolio_image_3 from '../assets/folio-3.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio-what'>What I Did ?</div>
        <div className='portfolio-main-header'>Portfolio</div>
        <div className='portfolio-main-container'>
            <div className='portfolio-container'>
                <img className='work-image' src={portfolio_image_1} alt='My work'/>
                <div className='image-inside'>
                    <h3 className='portfolio-header'>Web designing</h3>
                    <p className='portfolio-content'>Category: Web templates</p>
                </div>
            </div>
            <div className='portfolio-container'>
                <img className='work-image' src={portfolio_image_2} alt='My work'/>
                <div className='image-inside'>
                    <h3 className='portfolio-header'>Web designing</h3>
                    <p className='portfolio-content'>Category: Web templates</p>
                </div>
            </div>
            <div className='portfolio-container'>
                <img className='work-image' src={portfolio_image_3} alt='My work'/>
                <div className='image-inside'>
                    <h3 className='portfolio-header'>Web designing</h3>
                    <p className='portfolio-content'>Category: Web templates</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
