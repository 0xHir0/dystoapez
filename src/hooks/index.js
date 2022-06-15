import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import DystoApezABI from '../abi/DystoApezABI.json';
import ScrapTokenABI from '../abi/ScrapTokenABI.json';
import {
  DystoApezContractAddress,
  ScrapTokenContractAddress,
} from '../contracts';

const DystoApezContractInterface = new ethers.utils.Interface(DystoApezABI);

const ScrapTokenContractInterface = new ethers.utils.Interface(ScrapTokenABI);

const dystoApezContract = new Contract(
  DystoApezContractAddress,
  DystoApezContractInterface
);

const scrapTokenContract = new Contract(
  ScrapTokenContractAddress,
  ScrapTokenContractInterface
);

export const useBalanceOf = (address) => {
  const [balanceOf] =
    useContractCall(
      address && {
        abi: ScrapTokenContractInterface,
        address: ScrapTokenContractAddress,
        method: 'balanceOf',
        args: [address],
      }
    ) ?? [];

  return balanceOf;
};

export const useGetClaimableReward = (address) => {
  const [getClaimableReward] =
    useContractCall(
      address && {
        abi: ScrapTokenContractInterface,
        address: ScrapTokenContractAddress,
        method: 'getClaimableReward',
        args: [address],
      }
    ) ?? [];

  return getClaimableReward;
};

export const useClaimReward = () => {
  const { state, send, event } = useContractFunction(
    scrapTokenContract,
    'claimReward',
    {}
  );

  return { state, send, event };
};

export const useMaxMintPerTX = () => {
  const [MAX_MINT_PER_TX] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'MAX_MINT_PER_TX',
      args: [],
    }) ?? [];

  return MAX_MINT_PER_TX;
};

export const useMaxSupply = () => {
  const [MAX_SUPPLY] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'MAX_SUPPLY',
      args: [],
    }) ?? [];

  return MAX_SUPPLY;
};

export const useMintPrice = () => {
  const [MINT_PRICE] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'MINT_PRICE',
      args: [],
    }) ?? [];

  return MINT_PRICE;
};

export const useMintPricePublic = () => {
  const [MINT_PRICE_PUBLIC] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'MINT_PRICE_PUBLIC',
      args: [],
    }) ?? [];

  return MINT_PRICE_PUBLIC;
};

export const useSaleStarted = () => {
  const [saleStarted] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'saleStarted',
      args: [],
    }) ?? [];

  return saleStarted;
};

export const usePreSaleStarted = () => {
  const [preSaleStarted] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'preSaleStarted',
      args: [],
    }) ?? [];

  return preSaleStarted;
};

export const useTotalSupply = () => {
  const [totalSupply] =
    useContractCall({
      abi: DystoApezContractInterface,
      address: DystoApezContractAddress,
      method: 'totalSupply',
      args: [],
    }) ?? [];

  return totalSupply;
};

export const useMintWhitelist = () => {
  const { state, send, event } = useContractFunction(
    dystoApezContract,
    'mintWhitelist',
    {}
  );

  return { state, send, event };
};

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    dystoApezContract,
    'mint',
    {}
  );

  return { state, send, event };
};
