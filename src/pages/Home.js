import './Home.css';
import React, { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

const Home = () => {

    const [hamBurgerOpen, setHamBurgerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            console.log("Window values => 'W': ", window.innerWidth, ", 'H': ", window.innerHeight);
        }

        const handleScroll = () => {
            console.log("Scrolled values => 'X': ", window.scrollX, ", 'Y': ", window.scrollY);

            if(window.scrollY === 0) {
                setScrolled(false);
                document.querySelector(".header-container")?.classList.remove("header-container-scrolled");
                document.querySelector(".header")?.classList.remove("header-scrolled");
                document.querySelector(".menu-list")?.classList.remove("menu-list-scrolled");
            }
            else {
                setScrolled(true);
                document.querySelector(".header-container")?.classList.add("header-container-scrolled");
                document.querySelector(".header")?.classList.add("header-scrolled");
                document.querySelector(".menu-list")?.classList.add("menu-list-scrolled");
            }
        }
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(window.scrollY === 0) {
            document.querySelector(".menu-list")?.classList.remove("menu-list-scrolled");
        }
        else {
            document.querySelector(".menu-list")?.classList.add("menu-list-scrolled");
        }
    }, [hamBurgerOpen]);

  return (
    <div className='home'>
        <div className='home-shadow'>
            <div className='header-container'>
                <div className='header'>
                    {hamBurgerOpen &&
                        <ul className='menu-list'>
                            <li className='menu-item'>Home</li>
                            <li className='menu-item'>About</li>
                            <li className='menu-item'>Portfolio</li>
                            <li className='menu-item'>Testmonial</li>
                            <li className='menu-item'>Contact</li>
                        </ul>
                    }
                    <Hamburger toggled={hamBurgerOpen} toggle={setHamBurgerOpen} color={!scrolled ? 'white' : '#695aa6'}/>
                </div>
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
