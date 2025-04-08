import React from 'react'
import { assets } from '../../assets/assets'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div className='mobile-app'>
      <div className='mobile-app-content'>
        <div className='mobile-app-text'>
          <h2>Download our mobile app</h2>
          <p>Get the best food delivery experience with our mobile app. Order your favorite meals with just a few taps!</p>
          <div className='app-buttons'>
            <a href="#" className='app-button'>
              <img src={assets.app_store} alt="App Store" />
            </a>
            <a href="#" className='app-button'>
              <img src={assets.play_store} alt="Play Store" />
            </a>
          </div>
        </div>
        <div className='mobile-app-image'>
          <img src={assets.mobile_app} alt="Mobile App" />
        </div>
      </div>
    </div>
  )
}

export default MobileApp 