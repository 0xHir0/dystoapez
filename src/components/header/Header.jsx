import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { shortenAddress } from '@usedapp/core';
import { ApezContext } from '../../utils/context';
import {
  disconnectWallet,
  getCurrentWalletAddress,
  showWeb3WalletModal,
} from '../../utils';
import './Header.scss';
import { Navigate } from 'react-router-dom';

const Header = () => {
  const apezContext = useContext(ApezContext);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (apezContext.connectState) {
      disconnectWallet().then(async () => {
        const account = await getCurrentWalletAddress();

        if (!account) {
          apezContext.handleDisconnect();
        }
      });

      return;
    }

    if (!apezContext.connectState) {
      showWeb3WalletModal().then(async () => {
        const account = await getCurrentWalletAddress();

        if (account) {
          apezContext.handleConnect(account);
        }
      });
    }
  };

  return (
    <header>
      <div className='logo-header'>
        <img
          className='left-bar'
          src='./assets/images/header-left.png'
          alt='Header'
        />
        <img className='logo' src='./assets/images/logo.png' alt='Header' />
        <img
          className='right-bar'
          src='./assets/images/header-right.png'
          alt='Header'
        />
      </div>

      {window.location.pathname === '/' ? (
        <button className='mint-btn' onClick={(e) => navigate('mint')}>
          Mint
        </button>
      ) : (
        <button className='mint-btn' onClick={connectWallet}>
          {!apezContext.addressState
            ? 'CONNECT'
            : shortenAddress(apezContext.addressState)}
        </button>
      )}
    </header>
  );
};

export default Header;
