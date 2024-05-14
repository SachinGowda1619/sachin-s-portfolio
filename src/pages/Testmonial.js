import React from 'react';
import './Testmonial.css';
import avatar_1 from '../assets/avatar1.jpg'
import avatar_2 from '../assets/avatar2.jpg'

const Testmonial = () => {
  return (
    <div className='testmonial-outer'>
        <div className='testmonial-what'>What clients think about me?</div>
        <div className='testmonial-header'>Testmonial</div>
        <div className='testmonial-container'>
            <div className='testmonial'>
                <img className='testmonial-avatar' src={avatar_1} alt='Client_image'/>
                <div className='testmonial-content'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.
                </div>
                <h3 className='testmonial-client-name'>
                    Emily Reb
                </h3>
            </div>
            <div className='testmonial'>
                <img className='testmonial-avatar' src={avatar_2} alt='Client_image'/>
                <div className='testmonial-content'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.
                </div>
                <h3 className='testmonial-client-name'>
                    Emily Reb
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Testmonial