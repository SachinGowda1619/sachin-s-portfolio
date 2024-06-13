import React, { useEffect } from 'react'
import cross_image from './../assets/cross_white.svg'
import './Home.css';

const Home = () => {

    useEffect(() => {
        const handleResize = () => {
            console.log("Window values => 'W': ", window.innerWidth, ", 'H': ", window.innerHeight);
        }

        const handleScroll = () => {
            console.log("Scrolled values => 'X': ", window.scrollX, ", 'Y': ", window.scrollY);
        }
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            
        </div>
    </div>
  )
}

export default Home