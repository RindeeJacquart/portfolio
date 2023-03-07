import React from 'react';

import { useIsMobile } from '../hooks/useIsMobile'
import logo from '../assets/logo.png';
import './nav.css';

export default function NavBar() {
  const isMobile = useIsMobile();

  return (
    <div className='navBar'>
      <img src={logo} alt='brand logo' className='navLogo' />
      <div className='brandContainer'>
        <h2 className='brandName'>Rindee Jacquart</h2>
        <p className='brandText'>Digital Jaguar</p>
        <p className='brandText'>Media</p>
      </div>
      { isMobile ? 
        <ul className='navLinksMobile'>
        <li><a className='linkText'>Websites</a></li>
        <li><a className='linkText'>Business</a></li>
        <li><a className='linkText'>Other Designs</a></li>
      </ul>
      : 
      <ul className='navLinks'>
        <li><a className='linkText'>Websites</a></li>
        <li><a className='linkText'>Business</a></li>
        <li><a className='linkText'>Other Designs</a></li>
      </ul>
}
    </div>
  );
}
