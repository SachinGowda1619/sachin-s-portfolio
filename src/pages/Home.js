import './Home.css';
import cross_image from '../assets/cross.svg';
import cross_image_white from '../assets/cross_white.svg'
import { useEffect, useState } from 'react';

const Home = () => {
  const [isScrolled, setIscScrolled] = useState(false);

  console.log("sef", window.innerWidth)

  // useEffect(() => {

  //   const handleNavBarScroll = () => {
  //     document.querySelector(".header").classList.add("header-scrolled");
  //     document.querySelector(".menu-container").classList.add("menu-container-scrolled");
  //     document.querySelector(".menu-list").classList.add("menu-list-scrolled");
  //     document.querySelector(".cross-image").classList.add("cross-image-scrolled");

  //     if(window.scrollY === 0){
  //       setIscScrolled(false);
  //       document.querySelector(".header").classList.remove("header-scrolled");
  //       document.querySelector(".menu-container").classList.remove("menu-container-scrolled");
  //       document.querySelector(".menu-list").classList.remove("menu-list-scrolled");
  //       document.querySelector(".cross-image").classList.remove("cross-image-scrolled");
  //     }
  //     else{
  //       setIscScrolled(true);
  //     }
  //   }

  //   window.addEventListener('scroll', handleNavBarScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleNavBarScroll);
  //   };
  // }, []);

  return (
    <div className='home'>
      <div className='home-shadow'>
        <div className='header'>
          <ul className='menu-list'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Testmonial</li>
            <li>Contact</li>
          </ul>
          <img className='cross-image' src={isScrolled ? cross_image : cross_image_white} alt='Close'></img>
        </div>
        <div className='home-container'>
          <h2>HI!</h2>
          <h1>I am Sachin Gowda</h1>
          <p>FULL STACK DEVELOPER</p>
          <button>Visit My Works</button>
        </div>
      </div>
    </div>
  );
}

export default Home
