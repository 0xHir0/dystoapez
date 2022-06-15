import React from 'react';

const LoreSection = () => {
  return (
    <div className='lore-section' id='loreSection'>
      <div>
        <div className='flex lg-pt-158 xl-pt-250 xl2-mx-196 xl-mx-120 lg-mx-60 md-mx-30 flex-col lg:flex-row gap-y-5 px-8  lg:gap-8 xl:gap-24'>
          <img
            className='object-contain w-[320px] sm:w-[466px]'
            src='./assets/images/lore.png'
            alt='Lore'
          />
          <div className='lore-description'>
            <h3>Dysto Apes Lore:</h3>
            <p>
              The year was 4444 and the apes had evolved from their predecessors
              – the fallen human race. They were faster, smarter, more evolved,
              but what the humans had left was a state of decay. The apez were
              born amidst chaos; stifled in steel and in a world where fossil
              fuels had all but run dry. What they were left with was scrap –
              but in the hands of the evolved, brilliance shines. War is coming,
              but the apez are not to be defeated or even deterred.
            </p>
            <p>
              They pull their resources from far and wide, hunting down scrap to
              make miracles out of the massacres. With each piece comes a
              glistening beacon of hope; hope and power. With every piece of
              scrap a transaction and a transition can be made. From one
              greatness comes another, and the apez are drawing closer to the
              real battle...
            </p>
            <img
              className='frame-image'
              src='./assets/images/Frame-2.png'
              alt='Frame'
            />
          </div>
        </div>
        <img
          className='sparkle-image'
          src='./assets/images/sparkle.png'
          alt='Sparkle'
        />
      </div>
      <img
        className='building-banner'
        src='./assets/images/lore-banner.gif'
        alt='Lore-banner'
      />
      <img
        className='absolute bottom-0 w-full'
        src='./assets/images/shadow.png'
        alt='Shadow'
      />
    </div>
  );
};

export default LoreSection;
