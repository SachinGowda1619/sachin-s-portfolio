import './Header.css';
import cross_image from '../assets/cross.svg';
import cross_image_white from '../assets/cross_white.svg'
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIscScrolled] = useState(false);

  useEffect(() => {
    const handleNavBarScroll = () => {
      document.querySelector(".header").classList.add("header-scrolled");
      document.querySelector(".menu-container").classList.add("menu-container-scrolled");
      document.querySelector(".menu-list").classList.add("menu-list-scrolled");
      document.querySelector(".cross-image").classList.add("cross-image-scrolled");

      if(window.scrollY === 0){
        setIscScrolled(false);
        document.querySelector(".header").classList.remove("header-scrolled");
        document.querySelector(".menu-container").classList.remove("menu-container-scrolled");
        document.querySelector(".menu-list").classList.remove("menu-list-scrolled");
        document.querySelector(".cross-image").classList.remove("cross-image-scrolled");
      }
      else{
        setIscScrolled(true);
      }
    }

    window.addEventListener('scroll', handleNavBarScroll);

    return () => {
      window.removeEventListener('scroll', handleNavBarScroll);
    };
  }, []);

  return (
    <div className='header'>
      <div className='menu-container'>
        <div className='menu-list-container'>
          <ul className='menu-list'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Testmonial</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <img className='cross-image' src={isScrolled ? cross_image : cross_image_white} alt='Close'></img>
      </div>
    </div>
  );
}

export default Header
