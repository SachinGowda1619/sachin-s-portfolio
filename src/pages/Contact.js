import React from 'react';
import './Contact.css';

const Contact = () => {
  const sendMessage = () => {

  }

  return (
    <div className='contact-container'>
        <div className='contact-how'>How can you communicate?</div>
        <div className='contact-header'>Contact me</div>
        <form action={sendMessage} className='contact-form'>
            <div className='contact-form-top'>
                <input type='text' value={'Your Name'}></input>
                <input type='text' value={'Enter E-mail'}></input>
            </div>
            <div className='contact-form-bottom'>
                <textarea rows={'7'} cols={'10'} value={'Write Something...'}></textarea>
                <input type='button' value={'Send Message'}></input>
            </div>
        </form>
    </div>
  )
}

export default Contact