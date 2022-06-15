import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './HomePage.scss';
import {
  BannerSection,
  LoreSection,
  NftSection,
  RoadmapSection,
  TeamSection,
} from './sections';

const HomePage = () => {
  return (
    <div className='homepage'>
      <BannerSection />
      <LoreSection />
      <NftSection />
      <RoadmapSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;
