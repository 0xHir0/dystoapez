import React from 'react';

const RoadmapSection = () => {
  return (
    <div className='roadmap-section' id='roadmapSection'>
      <div className='title'>
        <img
          className='w-320 md-w-480 lg-w-600 xl-w-720'
          src='./assets/images/road.png'
          alt='Roadmap'
        />
        <img
          className='w-320 md-w-480 lg-w-600 xl-w-720'
          src='./assets/images/map.png'
          alt='Map'
        />
      </div>
      <div className='roadmap-list'>
        <div className='roadmap-item left'>
          <h2>01</h2>
          <div>
            <h3>PRE MINT</h3>
            <p>
              Alpha Category / channels opened up in Discord with dedicated
              moderators. This includes market news on various Blockchain tech,
              NFTs and Coins as well as various WL raffle opportunities with
              other partnered projects.
            </p>
          </div>
        </div>
        <div className='circle-frame'>
          <div className='roadmap-item right'>
            <h2>02</h2>
            <div>
              <h3>MINT</h3>
              <p>
                4434 Genesis Dysto Apez released on the Ethereum Block Chain,
                mint price TBD.
              </p>
            </div>
          </div>
          <img
            className='absolute mt-m-150 md:mt-0 top-2/4 right-0 translate-y-m-50 w-106 md-w-176 lg-right-m-50'
            src='./assets/images/COG.gif'
            alt='CGO'
          />
          <div className='roadmap-item left'>
            <h2>03</h2>
            <div>
              <h3>POST MINT</h3>
              <p>
                <b>$SCRAP</b> Token to launch on mint. Start collecting your{' '}
                <b>$SCRAP</b>
                reserves for future use in the Dysto Apez ecosystem.
              </p>
              <p>
                8 Legendary Dysto Apez to be auctioned off. These Apez will
                collect 400 <b>$SCRAP</b> a day. 2 Legendary Apez will be
                raffled to anyone that minted a Dysto Ape. 1 mint = 1 entry.
              </p>
              <p>
                We are not fans of the staking mechanisms so your Apez do not
                have to move for you to collect <b>$SCRAP</b>
              </p>
            </div>
          </div>
        </div>
        <div className='roadmap-item right'>
          <h2>04</h2>
          <div>
            <h3>EXPANSION</h3>
            <p>
              Generation 2 development. Use your collected <b>$SCRAP</b> and 2
              Dysto Apez to mint <b>[REDACTED]</b>. Mint for gen 2 will require{' '}
              <b>$SCRAP</b>. We have already started generating artwork for Gen
              2.
            </p>
            <p>
              Ability to use <b>$SCRAP</b> to upgrade <b>[REDACTED]</b>.
            </p>
            <p>
              Burning lvl 1 <b>[REDACTED]</b> from lvl 1 supply and upgrades{' '}
              <b>[REDACTED]</b>
              to lvl 2, same goes for lvl 2 - lvl 3.
            </p>
            <p>
              Therefore <b>[REDACTED]</b> will have a depreciating supply as
              they are upgraded. It will be a race to reach lvl 3. You will be
              needing A lot of <b>$SCRAP</b> to fully upgrade what is to come.{' '}
              <b>$SCRAP</b> is king.
            </p>
            <p>
              Not owning <b>[REDACTED]</b> will put you at a disadvantage for
              when the great war begins.
            </p>
            <p>There is a powerful threat approaching.</p>
          </div>
        </div>
        <div className='roadmap-item left last'>
          <h2>05</h2>
          <div>
            <h3>Further Development Wen metaverse</h3>
            <p className='uppercase font-bold'>Wen metaverse.</p>
            <p>
              VX Dysto Apez are already under development and will be ready
              early Q1 2022. 1 Dysto = 1 free Dysto VX claim.
            </p>
            <p>
              We are always looking out and listening to community suggestions
              but we foresee IRL Dysto Apez meetups and Merch for our holders as
              some of the coming developments.
            </p>
            <p>
              Genesis Apez are going to be the key to our ecosystem, hold them
              close. Holding Dysto Apez will allow you to mint all future drops
              with <b>$SCRAP</b> + GAS.
            </p>
          </div>
        </div>
      </div>
      <img
        className='absolute top-2/4 left-0 translate-y-m-50 hidden md:block md-w-720 lg-w-1000 xl-w-1200 xl2-w-1500'
        src='./assets/images/banana-monkey.png'
        alt='Banana Monkey'
      />
      <img
        className='md:absolute bottom-0 md-right-60 lg-right-120 xl-right-160 xl2-right-200 w-330 md-w-380 lg-w-460 xl-w-520 xl2-w-580 mx-auto z-50'
        src='./assets/images/vx-nft.gif'
        alt='NX-nft'
      />
      <img
        className='absolute bottom-16 left-16 mx-auto md:left-auto md-right-60 z-10'
        src='./assets/images/roadmap-frame.png'
        alt='Roadmap'
      />
    </div>
  );
};

export default RoadmapSection;
