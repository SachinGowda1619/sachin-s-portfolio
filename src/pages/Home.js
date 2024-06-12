import React from 'react'
import cross_image from './../assets/cross.svg'
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='home-shadow'>
            <div className='header'>
                <ul className='menu-list'>
                    <li className='menu-item'>Home</li>
                    <li className='menu-item'>About</li>
                    <li className='menu-item'>Portfolio</li>
                    <li className='menu-item'>Testmonial</li>
                    <li className='menu-item'>Contact</li>
                </ul>
                <img src={cross_image} alt='Close'></img>
            </div>
            <div className='home-container'>
                <h2>
                    HI!
                </h2>
                <h1>
                    I am Sachin Gowda
                </h1>
                <p>
                    FULL STACK DEVELOPER
                </p>
                <button>
                    Visit My Works
                </button>
            </div>
            <div className='afewafa'>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>
                <div>
                    segsdrg
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home