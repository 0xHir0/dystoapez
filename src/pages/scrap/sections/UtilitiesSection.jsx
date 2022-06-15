const UtilitiesSection = () => {
  return (
    <div className='utility-section'>
      <div className='absolute top-m-36 md-top-m-52 lg-top-m-60 xl-top-m-72 xl2-top-m-80 left-16 md:left-24 lg:left-32 xl:left-36 xl2-left-200 w-70 md-w-96 lg-w-122 xl-w-140 xl2-w-165'>
        <img src='./assets/images/scrap/blue_planet.png' alt='Planet' />
      </div>
      <div className='max-w-620 token-story'>
        <h3>
          The <b className='font-bold'>$SCRAP</b> token.{' '}
        </h3>
        <p>
          <b className='font-bold'>$SCRAP</b> is the utility token for the Dysto
          Verse, and will be the key to the entire ecosystem. All future drops
          will require <b className='font-bold'>$SCRAP</b> to either mint or
          upgrade our future collections. These features will not be cheap so
          hold your <b className='font-bold'>$SCRAP</b> tight, you will be
          needing all you can get.{' '}
        </p>
        <p>
          Earn <b className='font-bold'>$SCRAP</b> passively without having to
          stake your NFT, simply claim from our website once you need it.
        </p>
        <p>
          Earn <b className='font-bold'>$SCRAP</b> passively without having to
          stake your NFT, simply claim from our website once you need it.
        </p>
        <ul>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning a genesis ape will yield 100{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning 2 or more apez will yield an extra 10{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning 5 or more apez will yield an extra 50{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning 10 or more apez will yield an extra 150{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning 20 or more apez will yield an extra 400{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
          <li>
            <img src='./assets/images/scrap/rocket.png' alt='rocket' />
            <div>
              Owning a legendary ape will yield 400{' '}
              <b className='font-bold'>$SCRAP</b> each day.
            </div>
          </li>
        </ul>
        <p>
          Bonus <b className='font-bold'>$SCRAP</b> will be airdropped every
          each day. Only requirement is that you must be holding the minimum of
          each reward tier.
        </p>
        <div className='absolute top-20-p right-16 md:right-24 lg:right-32 xl:right-36 xl2-right-200 w-70 md-w-96 lg-w-122 xl-w-140 xl2-w-165'>
          <img src='./assets/images/scrap/pink_planet.png' alt='Planet' />
        </div>
      </div>
      <div className='scrap-footer mt-24 md:mt-32'>
        <div className='max-w-1516 flex justify-center items-center gap-4 px-4 mx-auto mb-16'>
          <div className=''>
            <img
              className='object-cover'
              src='./assets/images/scrap/line.png'
              alt='Line'
            />
          </div>
          <h3>$Scrap utilities:</h3>
          <div>
            <img
              className='object-cover'
              src='./assets/images/scrap/line.png'
              alt='Line'
            />
          </div>
        </div>
        <div className='max-w-1516 mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-24 md:gap-4'>
          <div className='flex items-center flex-col md:flex-row gap-8 utility-text'>
            <img src='./assets/images/scrap/1.png' alt='utility' />
            Future Dysto content drops
          </div>
          <div className='flex items-center flex-col md:flex-row gap-8 utility-text'>
            <img src='./assets/images/scrap/2.png' alt='utility' />
            Metadata upgrades
          </div>
          <div className='flex items-center flex-col md:flex-row gap-8 utility-text'>
            <img src='./assets/images/scrap/3.png' alt='utility' />
            IRL event ticket purchases
          </div>
          <div className='flex items-center flex-col md:flex-row gap-8 utility-text'>
            <img src='./assets/images/scrap/4.png' alt='utility' />
            Merch Drops
          </div>
        </div>
        <div className='max-w-620 px-8 md:px-0 mx-auto my-32 text-center utility-text'>
          $SCRAP is NOT an investment and has NO economic value. It will be
          earned by active participation within the Dysto Apez ecosystem. Each
          Ape will be eligible to claim tokens at a rate of 100 $SCRAP per day.
          And Legendary Apez can claim 400 $SCRAP per day.
        </div>
        <img
          className='relative mt-m-200 md:mt-0 md:absolute object-cover md:top-0 md:h-full md:w-full'
          src='./assets/images/scrap/footer.png'
          alt='Footer Frame'
        />
      </div>
    </div>
  );
};

export default UtilitiesSection;
