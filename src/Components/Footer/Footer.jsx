import React from 'react'
import './Footer.css'

import footer_logo from '../../assets/footer_logo.svg';


const Footer = () => {
  return (
      <div className='footer'>

          <hr />
          <div className="footer-bottom">
              <p className='footer-bottom-left'>@ 2024 Rupesh Patil. All rights reserved</p>
              <div className="footer-bottom-right">
                  <p>Term of Services</p>
                  <p>Privacy Policy</p>
                  
              </div>
          </div>
      </div>
  )
}

export default Footer