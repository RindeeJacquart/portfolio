import React from 'react';

import atHome from '../../assets/portfolio/atmosfireHome.png';
import './home.css';
import BrettLogo from '../../assets/portfolio/BrettLogo.png';
import Birds from '../../assets/portfolio/birds.png';

export default function Home() {


  return (
    <section className='page'>   
      <div className='imageContainer'>
        <div className='imageTextWrapper'>
          <h2 className='titleText'>Digital Jaguar Media</h2>
          <p className='subtext'>
            Digital Jaguar Media is committed to delivering attractive, highly
            functional designs based on UI/UX principles.
          </p>
        </div>
      </div>
      <div className='contentWrapper'>
        <article>
          <h3 className='titleText'>About Digital Jaguar Media</h3>
          <p className='contentText'>
            If you are looking for a new look or just want something that stands
            out or is more user friendly, we can help!
          </p>
          <p className='contentText'>
            Digital Jaguar Media can create user friendly designs for your
            website, social media accounts, business branding or marketing/media
            projects.{' '}
          </p>
          <p className='contentText'>
            Digital Jaguar Media believes in honesty, accountability and hard
            work! We also value clear and concise communication and strive for
            excellence in all we do!
          </p>
          <p className='contentText'>
            Digital Jaguar Media takes pride in obtaining and maintaining
            excellent customer satisfaction and retention.
          </p>
        </article>
        <div className='linksWrapper'>
          <div>
            <div className='linksImages'>
              <img
                src={atHome}
                alt='Atmosfire Home Page'
                className='linksWebImage'
              />
            </div>
            <p className='links'>Websites</p>
          </div>
          <div>
            <div className='logoLinksImage'>
              <img
                src={BrettLogo}
                alt='Business Card '
                className='linksWebImage'
              />
            </div>
            <p className='links'>Business</p>
          </div>
          <div>
            <div className='otherLinksImage'>
              <img
                src={Birds}
                alt='Birds in Wreath'
                className='linksWebImage'
              />
            </div>
            <p className='links'>Other Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
