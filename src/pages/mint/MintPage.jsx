import React, { useState, useEffect, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import './MintPage.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { utils } from 'ethers';
import { ApezContext } from '../../utils/context';
import { getCurrentWalletAddress, showWeb3WalletModal } from '../../utils';
import {
  useMaxSupply,
  useMintPrice,
  useMintPricePublic,
  usePreSaleStarted,
  useSaleStarted,
  useMintWhitelist,
  useMint,
  useTotalSupply,
} from '../../hooks';
import whitelist from '../../services/whitelist.json';

const MintPage = () => {
  const apezContext = useContext(ApezContext);
  const maxSupply = useMaxSupply();
  const totalSupply = useTotalSupply();
  const mintPrice = useMintPrice();
  const mintPricePublic = useMintPricePublic();
  const saleStarted = useSaleStarted();
  const preSaleStarted = usePreSaleStarted();

  const { state: mintWhitelistState, send: mintWhitelist } = useMintWhitelist();
  const { state: mintState, send: mint } = useMint();
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    if (amount < 2) setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  useEffect(() => {
    mintWhitelistState.status === 'Exception' &&
      toast.error(mintWhitelistState.errorMessage);
    mintWhitelistState.status === 'Success' &&
      toast.info('Whitelist Mint Success.');
  }, [mintWhitelistState]);

  useEffect(() => {
    mintState.status === 'Exception' && toast.error(mintState.errorMessage);
    mintState.status === 'Success' && toast.info(`You've minted.`);
  }, [mintState]);

  const handleMint = () => {
    if (!apezContext.connectState) {
      showWeb3WalletModal().then(async () => {
        const account = await getCurrentWalletAddress();

        if (account) {
          apezContext.handleConnect(account);
        }
      });
    } else {
      if (saleStarted) {
        const ethPrice = (amount * parseInt(mintPricePublic, 10)) / 10 ** 18;

        mint(amount, {
          value: utils.parseEther(ethPrice.toString()),
        });

        return;
      }

      if (preSaleStarted) {
        const ethPrice = (amount * parseInt(mintPrice, 10)) / 10 ** 18;

        const output = whitelist.filter(
          (item) =>
            item.wallet_address.toLowerCase() ===
              apezContext.addressState.toLowerCase() && item.max_count >= amount
        );

        if (output.length > 0) {
          mintWhitelist(amount, output[0]?.max_count, output[0]?.sig, {
            value: utils.parseEther(ethPrice.toString()),
          });
        }
        return;
      }

      toast.warning('NFT mint not started.');
    }
  };

  return (
    <div className='mint-page'>
      <Header />
      <div className='mint-page-panel'>
        <LazyLoadImage
          effect='blur'
          className='w-372'
          src='./assets/images/mint-monkey.gif'
          alt='Monkey'
        />
        <h3>Amount to mint</h3>
        <p>
          ({totalSupply ? parseInt(totalSupply, 10) : 0},{' '}
          {maxSupply ? parseInt(maxSupply, 10) : 0})
        </p>
        <div className='btn-group h-60px'>
          <button className='left' onClick={decreaseAmount}>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0002 13.5303L5.65355 9.18367C5.14022 8.67034 5.14022 7.83034 5.65355 7.317L10.0002 2.97034'
                stroke='#E5E5E5'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div>{amount}</div>
          <button className='right' onClick={increaseAmount}>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.99978 13.5303L10.3464 9.18367C10.8598 8.67034 10.8598 7.83034 10.3464 7.317L5.99978 2.97034'
                stroke='#E5E5E5'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <button className='mint-btn' onClick={handleMint}>
          Mint
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default MintPage;
