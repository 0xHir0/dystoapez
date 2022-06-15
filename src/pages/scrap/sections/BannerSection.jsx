import { useState, useEffect, useContext } from 'react';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApezContext } from '../../../utils/context';
import { getCurrentWalletAddress, showWeb3WalletModal } from '../../../utils';

import {
  useBalanceOf,
  useGetClaimableReward,
  useClaimReward,
} from '../../../hooks';

const BannerSection = () => {
  const apezContext = useContext(ApezContext);

  const balanceOf = useBalanceOf(apezContext.addressState);
  const getClaimableReward = useGetClaimableReward(apezContext.addressState);
  const { state: claimRewardState, send: claimReward } = useClaimReward();

  const [balance, setBalance] = useState(0);
  const [claimAmount, setClaimAmount] = useState(0);

  useEffect(() => {
    setBalance(parseFloat(balanceOf / 10 ** 18).toFixed(3));
  }, [balanceOf]);

  useEffect(() => {
    setClaimAmount(parseFloat(getClaimableReward / 10 ** 18).toFixed(3));
  }, [getClaimableReward]);

  useEffect(() => {
    claimRewardState.status === 'Exception' &&
      toast.error(claimRewardState.errorMessage);
    claimRewardState.status === 'Success' && toast.info(`You've claimed.`);
  }, [claimRewardState]);

  const claimToken = async () => {
    if (!apezContext.connectState) {
      showWeb3WalletModal().then(async () => {
        const account = await getCurrentWalletAddress();

        if (account) {
          apezContext.handleConnect(account);
        }
      });
    } else {
      claimReward();
    }
  };

  return (
    <div className='banner-section' id='bannerSection'>
      <Header />
      <div className='banner-title mt-24 md:mt-32 2xl:mt-36'>
        <img src='./assets/images/scrap/title.png' alt='Scrap' />
        <img
          className='absolute bottom-3 md:bottom-0 mx-auto object-cover w-90-p h-4 md:h-6'
          src='./assets/images/scrap/footer_frame.png'
          alt='Scrap'
        />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-m-128 md-mt-m-80 lg-mt-m-100 xl-mt-m-120 md:px-16 lg:px-20 xl:px-24 translate-x-m-10'>
        <div className='relative mr-m-18 mb-m-2 md:mb-0 md-mr-m-26 z-10'>
          <img
            className='hidden md:block left-bar scale-y-125'
            src='./assets/images/scrap/left.png'
            alt=''
          />
          <img
            className='md:hidden h-70'
            src='./assets/images/scrap/top.png'
            alt=''
          />
          <h5 className='scrap-info left'>
            Wallet Balance
            <br />
            <CountUp
              end={balance}
              duration={1}
              decimals={3}
              separator=','
              decimal='.'
            />
          </h5>
        </div>
        <div className='relative z-20'>
          <img
            className='box-image'
            src='./assets/images/scrap/box.png'
            alt=''
          />
          <img
            className='sprocket-image translate-m-50-p w-140 md-w-150 lg-w-180 xl-w-210'
            src='./assets/images/COG.gif'
            alt=''
          />
        </div>
        <div className='relative mr-m-18 mt-m-18 md:mt-0 md-ml-m-20 z-20 md:z-10'>
          <img
            className='hidden md:block scale-y-125'
            src='./assets/images/scrap/right.png'
            alt=''
          />
          <img
            className='md:hidden h-70 mt-m-1'
            src='./assets/images/scrap/bottom.png'
            alt=''
          />
          <h5 className='scrap-info right'>
            Available to claim <br />
            <CountUp
              end={claimAmount}
              duration={1}
              decimals={3}
              separator=','
              decimal='.'
            />
          </h5>
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          className='claim-btn w-32 h-12 md-w-180 md-h-70'
          onClick={claimToken}
        >
          Claim
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default BannerSection;
