import React from 'react';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';

const BannerSection = () => {
  return (
    <div className='banner-section' id='bannerSection'>
      <Header />
      <div className='banner-title'>
        <img src='./assets/images/dysto.png' alt='Dysto' />
      </div>
      <div className='banner-frame'>
        <img src='./assets/images/Frame.png' alt='Frame' />
      </div>
      <div className='banner-monkey'>
        <img src='./assets/images/monkey.png' alt='Monkey' />
      </div>
      <div className='banner-city'>
        <img src='./assets/images/city-left.png' alt='City' />
        <img src='./assets/images/city-right.png' alt='City' />
      </div>
      <div className='banner-shadow'>
        <img src='./assets/images/shadow1.png' alt='Shadow' />
      </div>
      <Navbar />
    </div>
  );
};

export default BannerSection;
