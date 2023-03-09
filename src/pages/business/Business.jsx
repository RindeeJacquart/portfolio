import React from 'react';

import brettLogo from '../../assets/BrettLogos.svg';
import brett1 from '../../assets/portfolio/BrettTruck1.jpg';
import brett2 from '../../assets/portfolio/BrettTruck2.jpg';
import stag from '../../assets/portfolio/JagStagDigital.png';
import colter from '../../assets/portfolio/Colter.png'
import colter1 from '../../assets/portfolio/ColterLg.svg'
import colter2 from '../../assets/portfolio/ColterSm.svg'
import kraft from '../../assets/portfolio/Kraft.svg'
import bonj from '../../assets/portfolio/Bonj.svg'

import './business.css';

export default function Business() {
  return (
    <section>
      <div className='imageContainerB'>
        <div className='imageTextWrapper'></div>
      </div>
      <h2 className='pageTitle'>Business Designs</h2>
      <div className='businessContent'>
        <div className='cardColumn'>
          <h3 className='pageSubTitle'>ABI Logo & Designs</h3>
          <img src={brettLogo} alt='Argyle Card' className='businessImageMd' />
          <img src={brett1} alt='Argyle Truck Logo' className='businessImage' />
          <img src={brett2} alt='Argyle Truck Logo' className='businessImage' />
        </div>
        <div className='cardColumn'>
          <h3 className='pageSubTitle'>Logos</h3>
          <img src={stag} alt='Jag Stag Digital' className='businessImageSm' />
          <img src={kraft} alt='Informed Kraftsman' className='businessImageSm' />
          <img src={bonj} alt='Bonj' className='businessImageSm' />
         
        
        </div>
        <div className='cardColumn'>
          <h3 className='pageSubTitle'>Colter's Lodge</h3>          
          <img src={colter2} alt='Colter Lodge Logo' className='businessImageSm' />
          <img src={colter1} alt='Colter Lodge' className='businessImage' />
          <img src={colter} alt='Colter Lodge Card' className='businessImageMd' />
        
        </div>
      </div>
    </section>
  );
}
