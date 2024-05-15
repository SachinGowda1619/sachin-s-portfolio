import React from 'react';
import './Footer.css';
import faceBook from './../assets/facebook.png';
import whatsApp from './../assets/whatsapp.png';
import googlePlus from './../assets/google-plus.png';
import telegram from './../assets/telegram.png';
import gitHub from './../assets/github.png';
import instagram from './../assets/instagram.png';
import linkedIn from './../assets/linkedin.png';
import location from './../assets/location.png';

const Footer = () => {
  return (
    <div className='footer-outer'>
        <hr></hr>
        <div className='footer-container'>
            <div className='footer-left'>
                Copyright 2024 © Sachin's portfolio
            </div>
            <div className='footer-right'>
                <img src={faceBook} alt='Face book'></img>
                <img src={whatsApp} alt='Face book'></img>
                <img src={instagram} alt='Face book'></img>
                <img src={linkedIn} alt='Face book'></img>
                <img src={gitHub} alt='Face book'></img>
                <img src={telegram} alt='Face book'></img>
                <img src={googlePlus} alt='Face book'></img>
                <img src={location} alt='Face book'></img>
            </div>
        </div>
    </div>
  )
}

export default Footer