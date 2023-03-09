import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import { useIsMobile } from '../hooks/useIsMobile';
import logo from '../assets/logo.png';
import menuIcon from '../assets/menuIcon.svg';
import './nav.css';

import MobileMenu from './MobileMenu';

export default function NavBar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false);
  const [pathname] = useState(location.pathname)

  return (
    <div className='navBar'>
      <div className='navLogoWrapper'>
       <a href='/'> <img src={logo} alt='brand logo' className='navLogo' /></a>
      </div>
      <div className='brandContainer'>
        <h2 className='brandName'>Rindee Jacquart</h2>
        <p className='brandText'>Digital Jaguar</p>
        <p className='brandText'>Media</p>
      </div>

      <div className='navLinks'>
        {!isMobile ? (
          <ul className='navLinksWrapper'>
            <li>
              <a href='/Websites' className={pathname === '/Websites' ? 'linkTextActive' : 'linkText'}>Websites</a>
            </li>
            <li>
              <a href='/business' className={pathname === '/business' ? 'linkTextActive' : 'linkText'}>Business</a>
            </li>
            <li>
              <a 
             href='/other-designs' className={pathname === '/other-designs' ? 'linkTextActive' : 'linkText'}>Other Designs</a>
            </li>
          </ul>
        ) : (
          <div className='menuWrapper'>
          <div className='menuIcon'>
            <img src={menuIcon} alt='nav menu' className='icon' onClick={() => setShowMenu(!showMenu)}/>
            {showMenu ? <MobileMenu pathname={pathname} /> : null}
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
