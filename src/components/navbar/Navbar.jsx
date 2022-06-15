import React, { useCallback, useState } from 'react';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { ReactComponent as HomeIcon } from '../../assets/icons/icon-home.svg';
import { ReactComponent as LoreIcon } from '../../assets/icons/icon-lore.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/icon-gallery.svg';
import { ReactComponent as LegendaryIcon } from '../../assets/icons/icon-legendary.svg';
import { ReactComponent as RoadmapIcon } from '../../assets/icons/icon-roadmap.svg';
import { ReactComponent as TeamIcon } from '../../assets/icons/icon-team.svg';
import { ReactComponent as ScrapIcon } from '../../assets/icons/icon-scrap.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/icon-discord.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/icon-medium.svg';
import { ReactComponent as OpenseaIcon } from '../../assets/icons/icon-opensea.svg';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

const Navbar = () => {
  const [isToggle, setIsToggle] = useToggle();

  const navigate = useNavigate();

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 700 });
  };

  const scrollToPage = async (e, target) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        scrollTarget(target);
      }, 500);
    } else {
      scrollTarget(target);
    }
  };

  return (
    <div className='nav'>
      <button className='navbar-toggle' onClick={setIsToggle}></button>
      <ul className={`navbar ${isToggle && 'opened'}`}>
        <li>
          <a
            className='nav-item'
            href='#bannerSection'
            onClick={(e) => scrollToPage(e, 'bannerSection')}
          >
            <HomeIcon />
            Home
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='#loreSection'
            onClick={(e) => scrollToPage(e, 'loreSection')}
          >
            <LoreIcon />
            Lore
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='#nftSection'
            onClick={(e) => scrollToPage(e, 'nftSection')}
          >
            <GalleryIcon />
            Nft gallery
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='#legendarySection'
            onClick={(e) => scrollToPage(e, 'legendarySection')}
          >
            <LegendaryIcon />
            Legendary
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='#roadmapSection'
            onClick={(e) => scrollToPage(e, 'roadmapSection')}
          >
            <RoadmapIcon />
            Roadmap
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='#teamSection'
            onClick={(e) => scrollToPage(e, 'teamSection')}
          >
            <TeamIcon />
            Team
          </a>
        </li>
        <li>
          <a
            className='nav-item'
            href='/scrap'
            onClick={(e) => {
              e.preventDefault();
              navigate('/scrap');
            }}
          >
            <ScrapIcon />
            Scrap
          </a>
        </li>
        <div className='social-bar'>
          <a href='https://twitter.com/DystoApez'>
            <TwitterIcon />
          </a>
          <a href='https://discord.gg/dystoapez/'>
            <DiscordIcon />
          </a>
          <a href='https://medium.com/@dystoapez'>
            <MediumIcon />
          </a>
          <a href='https://opensea.io/collection/dystoapez-official'>
            <OpenseaIcon />
          </a>
        </div>
      </ul>
      <div className='social-bar'>
        <a href='https://twitter.com/DystoApez' target='_blink'>
          <TwitterIcon />
        </a>
        <a href='https://discord.gg/dystoapez/' target='_blink'>
          <DiscordIcon />
        </a>
        <a href='https://medium.com/@dystoapez' target='_blink'>
          <MediumIcon />
        </a>
        <a
          href='https://opensea.io/collection/dystoapez-official'
          target='_blink'
        >
          <OpenseaIcon />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
