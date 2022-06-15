import React from 'react';
import Carousel from 'react-multi-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-multi-carousel/lib/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 6,
  },
  extraextralarge: {
    breakpoint: { max: 1920, min: 1400 },
    items: 5,
  },
  extralarge: {
    breakpoint: { max: 1400, min: 1024 },
    items: 4,
  },
  large: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  medium: {
    breakpoint: { max: 768, min: 560 },
    items: 2,
  },
  small: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
  },
};

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 1,
  },
  small: {
    breakpoint: { max: 1920, min: 0 },
    items: 1,
  },
};

const nfts = [
  {
    id: '1',
    name: '1.png',
  },
  {
    id: '2',
    name: '2.png',
  },
  {
    id: '3',
    name: '3.png',
  },
  {
    id: '4',
    name: '4.png',
  },
  {
    id: '5',
    name: '5.png',
  },
  {
    id: '6',
    name: '6.png',
  },
  {
    id: '7',
    name: '7.png',
  },
  {
    id: '8',
    name: '8.png',
  },
];

const legendaries = [
  {
    id: 'King Ape',
    name: 'King Ape.gif',
  },
  {
    id: 'Wolfe Ape',
    name: 'Wolfe Ape.gif',
  },
  {
    id: 'Cyberpunk_Monkey',
    name: 'Cyberpunk Monkey.gif',
  },
  {
    id: 'Golden Commander',
    name: 'Golden Commander.gif',
  },
  {
    id: 'Bio Ape',
    name: 'Bio Ape.gif',
  },
  {
    id: 'Kaiju Ape',
    name: 'Kaiju Ape.gif',
  },
  {
    id: 'Robo Ape',
    name: 'Robo Ape.gif',
  },
  {
    id: 'Ancient Ape',
    name: 'Ancient Ape.gif',
  },
  {
    id: 'Undead Ape',
    name: 'Undead Ape.gif',
  },
  {
    id: 'Ice Ape',
    name: 'Ice Ape.gif',
  },
];

const LegendaryButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
    totalAmount,
  } = rest;

  return (
    <div className='mt-10 flex justify-center items-center'>
      <div className='line hidden sm:block'>
        <img src='./assets/images/line-left.png' alt='Left Line' />
      </div>
      <div className='carousel-btn-group'>
        <button
          className={currentSlide === 0 ? 'prev disable' : 'prev'}
          onClick={() => previous()}
        ></button>
        <div className='page-bar'>
          {(currentSlide % totalAmount) - 1 > 0
            ? (currentSlide % totalAmount) - 1
            : (currentSlide % totalAmount) + totalAmount - 1}{' '}
          / {totalAmount}
        </div>
        <button className='next' onClick={() => next()}></button>
      </div>
      <div className='line hidden sm:block'>
        <img src='./assets/images/line-left.png' alt='Left Line' />
      </div>
    </div>
  );
};

const NFTButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className='mt-10 flex justify-center items-center'>
      <div className='line hidden sm:block'>
        <img src='./assets/images/line-left.png' alt='Left Line' />
      </div>
      <div className='carousel-btn-group'>
        <button
          className={currentSlide === 0 ? 'prev disable' : 'prev'}
          onClick={() => previous()}
        ></button>
        <div className='page-bar'></div>
        <button className='next' onClick={() => next()}></button>
      </div>
      <div className='line hidden sm:block'>
        <img src='./assets/images/line-left.png' alt='Left Line' />
      </div>
    </div>
  );
};

const NftSection = () => {
  return (
    <>
      <div className='nft-section' id='nftSection'>
        <div className='mx-auto flex justify-center w-320 sm-w-480 md-w-560 lg-w-648'>
          <img src='./assets/images/nft.png' alt='NFT' />
        </div>
        <div className='carousel-panel relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-48'>
          <Carousel
            responsive={responsive1}
            infinite={true}
            draggable={false}
            autoPlaySpeed={3000}
            arrows={true}
            renderButtonGroupOutside={true}
          >
            {nfts.map((nft) => {
              return (
                <div key={`nft ${nft.id}`} className='item'>
                  <LazyLoadImage
                    effect='blur'
                    src={`./assets/images/nft/${nft.name}`}
                    alt='carousel-item'
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className='nft-section legend-apez-section' id='legendarySection'>
        <div className='md:absolute w-full'>
          <div className='md:hidden px-8'>
            <img src='./assets/images/legen.png' alt='LEGEN' />
            <img
              className='w-80-p md:ml-auto'
              src='./assets/images/dary.png'
              alt='DARY'
            />
            <img
              className='w-80 md:ml-auto'
              src='./assets/images/apez.png'
              alt='APEZ'
            />
          </div>
          <div className='md:absolute mx-auto left-bg px-8 md:w-2/4 left-10 md:left-16 lg:left-24 xl:left-36 2xl:left-52'>
            <div className='md:absolute max-w-432 mt-16 md:mt-0 md:top-48 mx-auto'>
              <h3>Legendary Apez</h3>
              <p>
                70% of sales will go straight into a community wallet for
                development into the metaverse.
              </p>
              <p>30% Will be donated to Monkey World UK.</p>
              <p>
                8 Apez will be auctioned. 2 will be raffled to lucky minters of
                dysto apez. 1 mint = 1 ticket.
              </p>
              <p>
                Legendary Apez will have a free 3d Voxel model airdrop January
                2022.
              </p>
            </div>
            <img
              className='hidden md:block absolute top-0 right-28'
              src='./assets/images/cylinder1.png'
              alt='Cylinder'
            />
          </div>
          <div className='hidden md:block absolute right-part w-2/4 right-14'>
            <img src='./assets/images/legen.png' alt='LEGEN' />
            <img
              className='w-80-p md:ml-auto'
              src='./assets/images/dary.png'
              alt='DARY'
            />
            <img
              className='w-80-p md:ml-auto'
              src='./assets/images/apez.png'
              alt='APEZ'
            />
          </div>
        </div>
        <div className='carousel-panel relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-48'>
          <Carousel
            responsive={responsive2}
            infinite={true}
            draggable={false}
            autoPlaySpeed={3000}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<LegendaryButtonGroup totalAmount={10} />}
          >
            {legendaries.map((legendary) => {
              return (
                <div key={legendary.id} className='item'>
                  <LazyLoadImage
                    effect='blur'
                    src={`./assets/images/legendary/${legendary.name}`}
                    alt='carousel-item'
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default NftSection;
